'use server';

/**
 * @fileOverview This file defines a Genkit flow for automatically updating website content
 * based on the latest information from the website owner's professional profiles.
 *
 * - dynamicContentUpdater - a function that triggers the content update process.
 * - DynamicContentUpdaterInput - The input type for the dynamicContentUpdater function (currently empty).
 * - DynamicContentUpdaterOutput - The return type for the dynamicContentUpdater function (a string).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicContentUpdaterInputSchema = z.object({
  
});
export type DynamicContentUpdaterInput = z.infer<typeof DynamicContentUpdaterInputSchema>;

const DynamicContentUpdaterOutputSchema = z.string();
export type DynamicContentUpdaterOutput = z.infer<typeof DynamicContentUpdaterOutputSchema>;

export async function dynamicContentUpdater(input: DynamicContentUpdaterInput): Promise<DynamicContentUpdaterOutput> {
  return dynamicContentUpdaterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dynamicContentUpdaterPrompt',
  input: {schema: DynamicContentUpdaterInputSchema},
  output: {schema: DynamicContentUpdaterOutputSchema.nullable()},
  prompt: `You are an AI-powered content updater for a personal website. Your goal is to keep the website's content fresh and accurate by automatically updating it with the latest information from the website owner's professional profiles.

  Specifically, you will search for the latest certifications, project details, and skills from the following sources:

  - LinkedIn profile
  - GitHub repositories
  - Personal website (mwebs.io)

  Based on the information you gather, generate updated content for the website, ensuring it reflects the website owner's most current expertise and accomplishments.

  The updated content should be concise, professional, and engaging.

  Output the updated content as a single string.
`,
});

const dynamicContentUpdaterFlow = ai.defineFlow(
  {
    name: 'dynamicContentUpdaterFlow',
    inputSchema: DynamicContentUpdaterInputSchema,
    outputSchema: DynamicContentUpdaterOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output ?? '';
  }
);
