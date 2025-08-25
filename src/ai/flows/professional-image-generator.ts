'use server';

/**
 * @fileOverview A Genkit flow for generating a professional headshot from an image.
 *
 * - generateProfessionalImage - A function that takes an image and generates a new one.
 * - ProfessionalImageInput - The input type for the generateProfessionalImage function.
 * - ProfessionalImageOutput - The return type for the generateProfessionalImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProfessionalImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a person, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ProfessionalImageInput = z.infer<typeof ProfessionalImageInputSchema>;

const ProfessionalImageOutputSchema = z.object({
    imageDataUri: z.string().describe("The generated image as a data URI.")
});
export type ProfessionalImageOutput = z.infer<typeof ProfessionalImageOutputSchema>;

export async function generateProfessionalImage(input: ProfessionalImageInput): Promise<ProfessionalImageOutput> {
  return professionalImageGeneratorFlow(input);
}

const professionalImageGeneratorFlow = ai.defineFlow(
  {
    name: 'professionalImageGeneratorFlow',
    inputSchema: ProfessionalImageInputSchema,
    outputSchema: ProfessionalImageOutputSchema,
  },
  async (input) => {
    const {media} = await ai.generate({
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: [
          {media: {url: input.photoDataUri}},
          {text: 'Generate a professional, corporate-style headshot of this person for a website. The person should be wearing a suit, and the background should be a modern, blurred office setting.'},
        ],
        config: {
          responseModalities: ['TEXT', 'IMAGE'],
        },
      });

    if (!media?.url) {
        throw new Error('Failed to generate image.');
    }

    return { imageDataUri: media.url };
  }
);
