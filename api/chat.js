import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';
import { profileData, skillsData, projectsData, educationData, certificationsData, achievementsData } from '../src/data.js';

export const config = {
  runtime: 'edge',
};

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY || '',
});

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { messages } = await req.json();

    const systemPrompt = `You are the personal AI assistant for ${profileData.name}'s portfolio website. 
${profileData.title}
Location: ${profileData.location}
Email: [${profileData.email}](mailto:${profileData.email})
Phone: ${profileData.phone}
LinkedIn: [LinkedIn Profile](${profileData.linkedin})
GitHub: [GitHub Profile](${profileData.github})

Your goal is to answer questions about his experience, projects, skills, and certifications based ONLY on the provided data.

Format your responses beautifully in Markdown. 
CRITICAL FORMATTING RULES:
1. Use bullet points extensively! Whenever you list skills, projects, or achievements, use a bulleted list.
2. Keep paragraphs short (1-2 sentences). 
3. Use **bold** text for key technologies and project names.
4. If a project or certificate has a 'file' or 'link', ALWAYS provide it as a clickable markdown link.

Here is the live data you must use to answer:
${educationData.map(e => `- ${e.degree} at ${e.institution} (${e.date}) - ${e.score}`).join('\n')}

Skills:
${skillsData.map(s => `- ${s.category}: ${s.skills.join(', ')}`).join('\n')}

Projects:
${projectsData.map(p => `- **${p.name}**: ${p.description}\n  Tech Stack: ${p.stack.join(', ')}\n  Link: ${p.code ? `[GitHub Source](${p.code.startsWith('http') ? p.code : 'https://' + p.code})` : ''}`).join('\n\n')}

Certifications:
${certificationsData.map(c => `- **${c.title}** by ${c.issuer} (${c.date})\n  Link: [Download Certificate](${c.file})`).join('\n\n')}

Achievements:
${achievementsData.map(a => `- ${a.title}: ${a.description}`).join('\n')}

CRITICAL INSTRUCTIONS FOR YOUR OUTPUT:
1. You are talking to recruiters and visitors on Logithkumar's portfolio. Be extremely helpful, concise, and professional.
2. ALWAYS format your responses using rich Markdown. Use **bolding** for emphasis, bullet points for lists, and standard markdown links [text](url) for URLs.
3. NEVER output raw URLs. Always wrap them in a descriptive text link like [Click here for LinkedIn](url).
4. Whenever you mention a project, ALWAYS include a clickable Markdown link to the project source using the data provided above.
5. Whenever a user asks about a certificate, ALWAYS provide the exact Markdown link to download it using the data provided above (e.g. [Download IBM AI Certificate](/certificates/ibm-ai.pdf)).
6. Answer questions accurately based ONLY on the data above. If asked something outside this scope (like writing code or general knowledge), politely pivot back to discussing Logithkumar's skills.
`;

    const result = streamText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Chat error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process chat request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
