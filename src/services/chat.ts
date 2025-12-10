// src/services/chat.ts
import OpenAI from "openai";

function getOpenAIClient() {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    throw new Error("OPENAI_API_KEY is missing. Please set it in .env or as an environment variable.");
  }
  return new OpenAI({ apiKey: key });
}

export async function handleChat(prompt: string, metadata?: any) {
  if (!prompt) throw new Error("No prompt provided");

  // skapa klient vid anrop (lazily) så dotenv hinner ladda nyckeln
  const client = getOpenAIClient();

  const response = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 800
  });

  const text = response.choices?.[0]?.message?.content ?? "";
  return { text };
}
