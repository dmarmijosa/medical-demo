import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const posts = [
  {
    title: "Cómo mantener un corazón saludable",
    content:
      "El cuidado del corazón es fundamental para una vida larga y saludable. Algunos consejos clave incluyen mantener una dieta balanceada rica en frutas, verduras y granos integrales, hacer ejercicio regularmente (al menos 30 minutos al día, 5 días a la semana), controlar el estrés mediante técnicas de relajación, dormir adecuadamente (7-9 horas por noche), y evitar hábitos dañinos como fumar o el consumo excesivo de alcohol. Además, es importante realizar chequeos médicos regulares para monitorear la presión arterial, el colesterol y otros indicadores de salud cardiovascular.",
    date: "2023-05-15",
    author: "Dr. Pamela Cuenca",
    slug: "como-mantener-un-corazon-saludable",
  },
  {
    title: "La importancia de la prevención en la salud",
    content:
      "La prevención es la clave para mantener una buena salud a largo plazo. Esto implica adoptar un estilo de vida saludable que incluya una dieta equilibrada, ejercicio regular, y evitar hábitos nocivos como el tabaquismo. También es crucial realizar exámenes médicos preventivos de manera regular, como mamografías, colonoscopias, y chequeos de presión arterial y colesterol. La detección temprana de enfermedades puede marcar una gran diferencia en el pronóstico y el tratamiento. Además, mantenerse al día con las vacunas recomendadas es una parte importante de la prevención de enfermedades.",
    date: "2023-05-01",
    author: "Dr. Pamela Cuenca",
    slug: "importancia-prevencion-salud",
  },
  {
    title: "Mitos y realidades sobre la hipertensión",
    content:
      "La hipertensión, o presión arterial alta, es una condición común pero a menudo malentendida. Un mito común es que la hipertensión siempre causa síntomas notables, cuando en realidad a menudo no presenta síntomas, por lo que se le conoce como el 'asesino silencioso'. Otro mito es que solo las personas mayores o con sobrepeso pueden tener hipertensión, cuando en realidad puede afectar a personas de todas las edades y tipos de cuerpo. Es importante entender que la hipertensión es una condición seria que puede aumentar el riesgo de enfermedades cardíacas y accidentes cerebrovasculares, pero que puede ser controlada efectivamente con cambios en el estilo de vida y, en algunos casos, medicación.",
    date: "2023-04-20",
    author: "Dr. Pamela Cuenca",
    slug: "mitos-realidades-hipertension",
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
      <div className="mt-4 flex items-center">
        <span className="text-sm font-medium text-gray-500">{post.author}</span>
        <span className="mx-1 text-gray-500">&middot;</span>
        <time dateTime={post.date} className="text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString()}
        </time>
      </div>
      <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
        <p>{post.content}</p>
      </div>
      <div className="mt-8">
        <Link href="/blog">
          <Button variant="outline">Volver al blog</Button>
        </Link>
      </div>
    </article>
  )
}

