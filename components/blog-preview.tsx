import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recentPosts = [
  {
    title: "Cómo mantener un corazón saludable",
    excerpt: "Descubre los hábitos diarios que pueden mejorar significativamente la salud de tu corazón.",
    slug: "como-mantener-un-corazon-saludable",
  },
  {
    title: "La importancia de la prevención en la salud",
    excerpt: "Aprende por qué la prevención es clave para mantener una buena salud a largo plazo.",
    slug: "importancia-prevencion-salud",
  },
  {
    title: "Mitos y realidades sobre la hipertensión",
    excerpt: "Desmitificamos algunas creencias comunes sobre la hipertensión y cómo manejarla correctamente.",
    slug: "mitos-realidades-hipertension",
  },
]

export function BlogPreview() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {recentPosts.map((post) => (
        <Card key={post.slug}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
              Leer más
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

