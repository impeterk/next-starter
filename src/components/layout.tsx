import Link from "next/link";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "./ui/button";
import ThemeSwitch from "./ui/theme-switch";

export const Header = () => {
  return (
    <header className="border-b bg-background text-foreground">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="text-xl">
          Next starter
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="p-4 text-center text-muted-foreground">
      <Button asChild variant={"link"}>
        <Link href="https://github.com/impeterk/next-starter">
          <GitHubLogoIcon className="mr-2" /> Github repository
        </Link>
      </Button>
    </footer>
  );
};
