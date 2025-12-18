
import { GoogleGenAI } from '@google/genai';
import { ColoringPageParams, GeneratedImage } from '../types';

export const generateColoringPage = async (
  apiKey: string,
  params: ColoringPageParams
): Promise<GeneratedImage> => {
  const ai = new GoogleGenAI({ apiKey });
  
  const { name, ageGroup, theme, photo } = params;
  
  let promptText = `Create a high-quality coloring book page for a child named ${name || 'the child'} who is in the ${ageGroup} category. 
  The theme is "${theme}". 
  STYLE REQUIREMENTS:
  - Strict black and white line art.
  - Pure white background.
  - No grayscale, no shading, no gradients.
  - Clean, thick outlines suitable for coloring.
  - ${photo ? 'Feature a caricature version of the person in the attached image as the main character.' : ''}
  - Ensure the scene is fun, safe, and engaging for kids.`;

  try {
    const contents: any = {
      parts: [{ text: promptText }]
    };

    if (photo) {
      // Photo is expected to be a base64 string including the prefix (e.g. data:image/png;base64,...)
      const base64Data = photo.split(',')[1] || photo;
      const mimeType = photo.match(/data:([^;]+);/)?.[1] || 'image/png';
      
      contents.parts.unshift({
        inlineData: {
          data: base64Data,
          mimeType: mimeType
        }
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: contents,
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    // Find the image part in the response
    let imageUrl = '';
    const candidates = (response as any).candidates;
    if (candidates && candidates.length > 0) {
      const parts = candidates[0].content.parts;
      for (const part of parts) {
        if (part.inlineData) {
          imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
          break;
        }
      }
    }

    if (!imageUrl) {
      throw new Error('No image was generated in the response.');
    }

    return {
      id: crypto.randomUUID(),
      url: imageUrl,
      prompt: theme,
      timestamp: Date.now()
    };
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    throw error;
  }
};
