import { GoogleGenAI } from "@google/genai";
import { H3Error } from 'h3';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const genAI = new GoogleGenAI({  });

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
  try{
    // throw Error("This is a test error");// Test error to see if error handling works
    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: content,
    });
    return {
      status: 200,
      message: "Successfully received your resume review.",
      text: response.text
    }
  }catch(e){
    let errorMessage:string = "An error occurred while processing your request."; 
    if (e instanceof Error) {
      errorMessage = e.message;
    } else if (typeof e === 'string') {
      errorMessage = e;
    }
    throw new H3Error(errorMessage);
  }
});
