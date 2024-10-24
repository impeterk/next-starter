import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <section className="container mx-auto pt-8">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">
            Next.js 15 Basic Starter Kit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <article className="prose dark:prose-invert">
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
      </Card>
    </section>
  );
}
