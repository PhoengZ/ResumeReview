export async function getResponseFromApi(prompt: string, base64File: string, checkboxs: string[]): Promise<string> {
  const text = `Please analyze the following resume and provide feedback on how to improve it.
  **Area of work** : ${checkboxs.join(", ")}

  **Prompt from user** : ${prompt}

  **Objective** :
  1. Score of this resume zero to ten.
  2. Strong point of this resume.
  3. Weak point of this resume.
  4. Suggestions to improve this resume.`
  const res = await $fetch('/api/genai', {
    method: 'POST',
    body: { prompt: text, base64File: base64File },
  });
  return res as string;
}
