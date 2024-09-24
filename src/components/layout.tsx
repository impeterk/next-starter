import Link from "next/link";

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
      Next.js {new Date().getFullYear()}
    </footer>
  );
};
