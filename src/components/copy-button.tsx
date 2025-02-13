"use client";

import { Clipboard } from "lucide-react";

import { Button } from "./ui/button";

export default function CopyButton({ text }: { text: string }) {
  function handleClick() {
    navigator.clipboard.writeText(text);
  }
  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute right-6 size-8"
      onClick={handleClick}
    >
      <Clipboard className="z-10 size-4 text-muted-foreground" />
    </Button>
  );
}
