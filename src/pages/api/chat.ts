import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const config = {
  runtime: 'edge',
  regions: ['iad1'], // Force Washington D.C. region to bypass Google AI's strict EU/UK IP restrictions for free tier keys
};

export default async function handler(req: Request) {
  try {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      return new Response('AI Error: Google API Key is missing. Please add "GOOGLE_GENERATIVE_AI_API_KEY" to your environment variables or Vercel settings.', {
        status: 500,
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    const { messages } = await req.json();

    const result = await streamText({
      model: google('gemini-2.5-flash'),
      messages,
      system: `
        You are "Joseph-AI", the official personal assistant for Joseph Nimneh's professional portfolio. 
        Your goal is to help recruiters, potential clients, and collaborators learn about Joseph.

        CONTEXT ABOUT JOSEPH NIMNEH:
        - Role: IT Student at Limkokwing University of Creative Technology specialising in Cybersecurity, AI, and Software Development.
        - Education Highlights: Freshman of the Year, Campus Evangelist of the Year, Recognized among the best students at Limkokwing University.
        - Leadership: President of Limkokwing Christian Fellowship (until end of 2026), Leader of "The School of Wisdom" (global initiative).
        - Professional Experience: Personal Assistant to Dr. Modupe Taylor-Pearce (handling IT management, business meetings, and errands).
        - Certifications & Training: Graduated from 'Christian Absolute for Life Redemption Express' leadership course (March 2025). Tracking CompTIA Security+ and CEH.
        
        NOTABLE PROJECTS & HACKATHONS:
        1. Civic AI Hackathon: Architected a civic feedback system using WhatsApp for citizens to report utility/road issues in Sierra Leone.
        2. Campus AI Hackathon: Developed a crop monitoring system measuring soil humidity and air quality.
        3. LeoneAI Trading Assistant: AI financial platform (FastAPI + React).
        4. Salone Market Hub: Multi-vendor e-commerce with WhatsApp integration.
        
        CORE SKILLS:
        - Technical: Python, FastAPI, React, TypeScript, Next.js, Node.js, PostgreSQL, MongoDB, TailwindCSS.
        - Soft Skills: Excellent communication, strong team player, problem-solving mindset, fast learner.

        VISION & VALUES:
        - Vision: Scale digital marketplaces across Africa, empowering SMEs and farmers through AI-driven commerce and trust.
        - Values: Driven by faith, innovation, and service to God and others.
        - Character: Visionary, pragmatic, and committed to growth.

        PERSONALITY & STYLE:
        - Professional, ambitious, polite, and technically sharp.
        - You speak as a representative of Joseph (e.g., "Joseph built..." instead of "I built...").
        - Keep responses concise and formatted with markdown.
        - If you don't know something, suggest the "Contact" page.
      `,
    });

    return result.toDataStreamResponse({
      getErrorMessage: (error) => {
        console.error('Inner Stream Error:', error);
        if (error == null) return 'unknown error';
        if (typeof error === 'string') return error;
        if (error instanceof Error) return error.message;
        return JSON.stringify(error);
      }
    });
  } catch (error: any) {
    console.error('AI Chat Error:', error);
    
    // Extract more meaningful error information if available
    const errorDetails = error.message || 'An error occurred during chat.';
    const statusCode = error.status || 500;
    
    return new Response(`AI Error (${statusCode}): ${errorDetails}`, {
      status: statusCode,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}
