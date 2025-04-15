import Link from "next/link";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { IconBlocks } from "@tabler/icons-react";

import { Button } from "./ui/button";
import ThemeSwitch from "./ui/theme-switch";

export const Header = () => {
  return (
    <header className="bg-background text-foreground border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-xl">
          <IconBlocks className="text-indigo-600" />
          Peterk.dev Next starter
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="text-muted-foreground p-4 text-center">
      <Button asChild variant={"link"}>
        <Link href="https://github.com/impeterk/next-starter">
          <GitHubLogoIcon className="mr-2" /> Github repository
        </Link>
      </Button>
    </footer>
  );
};
