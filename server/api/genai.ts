import { GoogleGenAI } from "@google/genai";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const genAI = new GoogleGenAI({ apiKey: config.geminiToken });

  const body = await readBody(event);

  const content = [
    { text: body.prompt },
    {
      inlineData: {
        mimeType: "application/pdf",
        data: body.base64File,
      },
    },
  ];

  const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: content,
  });

  return response.text as string;
});
