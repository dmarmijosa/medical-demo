/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const posts = [
  {
    title: "Cómo mantener un corazón saludable",
    excerpt: "Descubre los hábitos diarios que pueden mejorar significativamente la salud de tu corazón.",
    date: "2023-05-15",
    category: "Cardiología",
    slug: "como-mantener-un-corazon-saludable",
  },
  {
    title: "La importancia de la prevención en la salud",
    excerpt: "Aprende por qué la prevención es clave para mantener una buena salud a largo plazo.",
    date: "2023-05-01",
    category: "Medicina Preventiva",
    slug: "importancia-prevencion-salud",
  },
  {
    title: "Mitos y realidades sobre la hipertensión",
    excerpt: "Desmitificamos algunas creencias comunes sobre la hipertensión y cómo manejarla correctamente.",
    date: "2023-04-20",
    category: "Hipertensión",
    slug: "mitos-realidades-hipertension",
  },
]

export default function Blog() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Blog de Salud y Bienestar</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Manténgase informado con los últimos artículos sobre salud, consejos médicos y avances en medicina.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">
                    <Link href={`/blog/categoria/${post.category.toLowerCase()}`} className="hover:underline">
                      {post.category}
                    </Link>
                  </p>
                  <Link href={`/blog/${post.slug}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">Dr. John Doe</span>
                    <img className="h-10 w-10 rounded-full" src="/doctor-avatar.jpg" alt="Dr. John Doe" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Dr. John Doe</p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>5 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-extrabold text-gray-900">Buscar Artículos</h3>
          <div className="mt-4 flex">
            <Input type="text" placeholder="Buscar por título o categoría" className="flex-grow" />
            <Button className="ml-4">Buscar</Button>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-extrabold text-gray-900">Categorías</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="outline">Cardiología</Button>
            <Button variant="outline">Medicina Preventiva</Button>
            <Button variant="outline">Hipertensión</Button>
            <Button variant="outline">Nutrición</Button>
            <Button variant="outline">Ejercicio</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

