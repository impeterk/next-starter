import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <section className="container mx-auto pt-8">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">Get started</CardTitle>
        </CardHeader>
        <CardContent>
          <article className="prose">
            <ul>
              <li>Tailwind CSS</li>
              <li>Zod</li>
              <li>Conform</li>
              <li>T3 Env</li>
              <li>ShadCN UI</li>
              <li>Dark Mode</li>
              <li>Prettier</li>
              <li>Eslint</li>
            </ul>
          </article>
        </CardContent>
        <CardFooter>
          <ExclamationTriangleIcon className="mr-2 text-destructive" /> Next 15
          RC - React 19 RC
        </CardFooter>
      </Card>
    </section>
  );
}
