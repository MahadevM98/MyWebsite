'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { generateProfessionalImage } from '@/ai/flows/professional-image-generator';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ImageGeneratorPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOriginalImage(reader.result as string);
        setGeneratedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateClick = async () => {
    if (!originalImage) return;

    setIsLoading(true);
    setGeneratedImage(null);

    try {
      const result = await generateProfessionalImage({ photoDataUri: originalImage });
      setGeneratedImage(result.imageDataUri);
    } catch (error) {
      console.error('Error generating image:', error);
      toast({
        variant: 'destructive',
        title: 'Error Generating Image',
        description: 'There was a problem creating the professional headshot. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
       <header className="sticky top-0 z-50 w-full flex justify-center py-4">
        <div className="flex h-16 w-full max-w-sm items-center justify-center rounded-full bg-black/30 p-2 backdrop-blur-xl border border-white/10 mx-4">
            <h1 className="text-xl font-bold">AI Headshot Generator</h1>
        </div>
        </header>
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8">
        <Card className="max-w-2xl mx-auto bg-secondary/30 border-primary/20">
          <CardHeader>
            <CardTitle>Create a Professional Headshot</CardTitle>
            <CardDescription>
              Upload a picture of yourself, and our AI will generate a professional headshot for you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="image-upload" className="font-medium">Upload Image</label>
              <input 
                id="image-upload" 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload}
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="space-y-2">
                <h3 className="font-semibold">Original</h3>
                <div className="aspect-square w-full rounded-md border border-dashed flex items-center justify-center bg-secondary/30">
                  {originalImage ? (
                    <Image src={originalImage} alt="Original" width={400} height={400} className="rounded-md object-cover" />
                  ) : (
                    <p className="text-muted-foreground">No image uploaded</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Generated</h3>
                 <div className="aspect-square w-full rounded-md border border-dashed flex items-center justify-center bg-secondary/30">
                  {isLoading ? (
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p>Generating...</p>
                    </div>
                  ) : generatedImage ? (
                    <Image src={generatedImage} alt="Generated Headshot" width={400} height={400} className="rounded-md object-cover" />
                  ) : (
                    <p className="text-muted-foreground">AI image will appear here</p>
                  )}
                </div>
              </div>
            </div>

             <Button onClick={handleGenerateClick} disabled={!originalImage || isLoading} className="w-full" size="lg">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Headshot'
              )}
            </Button>

            {generatedImage && (
                 <Button asChild variant="outline" className="w-full">
                    <a href={generatedImage} download="professional-headshot.png">Download Image</a>
                 </Button>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
