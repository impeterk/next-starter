import { IconAlertTriangle, IconBrandTabler } from "@tabler/icons-react";

import CopyButton from "@/components/copy-button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <section className="container mx-auto px-4 pt-8 md:px-6">
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl">
            Next.js 15.3 Basic Starter Kit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <article className="prose dark:prose-invert">
            <ul>
              <li>Tailwind CSS</li>
              <li>ShadCN UI</li>
              <li>
                <span className="inline-flex items-center gap-2">
                  Tabler Icons <IconBrandTabler className="inline" />
                </span>
              </li>
              <li>Dark Mode</li>
              <li>Prettier</li>
              <li>Eslint</li>
              <li>Zod</li>
              <li>T3 Env</li>
            </ul>
            <div className="flex justify-center">
              <p className="inline-flex items-center justify-center border-b">
                <IconAlertTriangle className="text-destructive inline" />
                Unstable features
              </p>
            </div>
            <ul>
              <li>React compiler</li>
              <li>
                Turbopack build <b>(alpha)</b>
              </li>
            </ul>
          </article>
        </CardContent>
        <CardFooter className="">
          <div className="bg-muted/50 flex w-full items-center rounded-lg p-2 pl-4">
            <code className="font-mono text-sm font-semibold">
              npx degit https://github.com/impeterk/next-starter
            </code>
            <CopyButton
              text="npx degit https://github.com/impeterk/next-starter"
              className="ml-auto"
            />
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
