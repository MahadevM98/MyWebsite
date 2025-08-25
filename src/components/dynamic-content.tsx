import { dynamicContentUpdater } from "@/ai/flows/dynamic-content-updater";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot } from "lucide-react";

export async function DynamicContent() {
  // Since the Genkit flow for this app takes no input, we pass an empty object.
  const content = await dynamicContentUpdater({});

  if (!content) return null;

  return (
    <Card className="mt-8 bg-background/70 border-primary/20 shadow-lg text-left">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-headline">
          <Bot className="h-5 w-5 text-primary" />
          AI-Powered Update
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  );
}
