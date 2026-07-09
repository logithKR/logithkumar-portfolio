const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { google } = require('@ai-sdk/google');
const { streamText } = require('ai');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    const systemPrompt = `You are the AI assistant for LOGITHKUMAR K R's portfolio website. 
    Logithkumar is a Software Development Engineer specializing in AI integrations, Backend, and Full-Stack Systems.
    Location: Salem, India
    Email: logithkr12@gmail.com
    Phone: +91 9360879590
    
    Education:
    - B.E. in Computer Science (2020-2024), Knowledge Institute of Technology (CGPA: 8.65)
    
    Skills:
    - Python, JavaScript, SQL
    - React (Vite), HTML, CSS, Tailwind CSS
    - FastAPI, Flask, Node.js, Express.js
    - SQLite, Firebase Firestore, SQLAlchemy
    - LangChain, FAISS, Google Gemini API, OR-Tools
    
    Projects:
    - Code Documentation Generator: Vite, Tailwind, Python, FastAPI, Gemini API
    - E-Commerce Web App: Vite, Tailwind CSS, Express.js, Firebase
    - Task Scheduling API: Python, FastAPI, OR-Tools, SQLite
    
    Be helpful, concise, and professional. Answer questions about Logithkumar's skills and experience.`;

    const result = streamText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      messages,
    });

    result.pipeDataStreamToResponse(res);
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
