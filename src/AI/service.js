import { Run } from './metaAi.js';

export async function responseAi(text) {
  const response = await Run('@cf/meta/llama-3-8b-instruct', {
    messages: [
      {
        role: 'system',
        content:
          'Tu eres un asistente personal para un mundo virtual de estudiantes de universidad. Por favor, proporciona respuestas cortas y concisas.'
      },
      {
        role: 'user',
        content: text
      }
    ]
  });
  return response.result;
}
