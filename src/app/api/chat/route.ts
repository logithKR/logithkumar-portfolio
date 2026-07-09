import { NextRequest, NextResponse } from 'next/server';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { profileData, skillsData, projectsData, educationData, achievementsData, certificationsData } from '@/data';

const getContext = () => {
  return `
    Name: ${profileData.name}
    Title: ${profileData.title}
    Tagline: ${profileData.tagline}
    Bio: ${profileData.bio}
    About: ${profileData.about}
    Contact: ${profileData.email}, ${profileData.phone}
    Location: ${profileData.location}
    
    Skills: ${skillsData.map(s => s.category + ": " + s.skills.join(", ")).join("; ")}
    
    Projects:
    ${projectsData.map(p => `- ${p.name} (${p.date}): ${p.description} Features: ${p.features.join(" ")} Stack: ${p.stack.join(", ")}`).join("\n")}
    
    Education:
    ${educationData.map(e => `- ${e.degree} at ${e.institution} (${e.date}) - Score: ${e.score}`).join("\n")}
    
    Achievements:
    ${achievementsData.map(a => `- ${a.title}: ${a.description}`).join("\n")}
    
    Certifications:
    ${certificationsData.join("\n")}
  `;
};

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    if (!process.env.GOOGLE_API_KEY) {
      return NextResponse.json(
        { text: "Error: GOOGLE_API_KEY is not configured in the environment." },
        { status: 500 }
      );
    }

    const context = getContext();

    const llm = new ChatGoogleGenerativeAI({
      model: "gemini-2.5-flash",
      temperature: 0,
    });

    const prompt = PromptTemplate.fromTemplate(`
      You are Logithkumar's AI Recruiter Assistant on his portfolio website.
      Your job is to answer questions about Logithkumar's skills, experience, and projects in a professional, impressive manner.
      Answer the user's question using ONLY the following context. Do NOT hallucinate or invent any information. If you don't know the answer based on the context, say "I don't have that information in my current knowledge base."
      Always be polite and highlight his strengths.
      
      Context:
      {context}
      
      User Question: {question}
      
      Answer:
    `);

    const chain = RunnableSequence.from([
      prompt,
      llm,
      new StringOutputParser()
    ]);

    const responseText = await chain.invoke({
      context: context,
      question: lastMessage
    });
    
    const stream = new ReadableStream({
      start(controller) {
        const str = `0:"${responseText.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"\n`;
        controller.enqueue(new TextEncoder().encode(str));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/x-custom-event-stream',
      },
    });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
