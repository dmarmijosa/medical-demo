import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Stethoscope, Video } from "lucide-react"

const services = [
  {
    name: "Consulta General",
    description: "Evaluación integral de su salud, incluyendo historial médico y examen físico.",
    icon: Stethoscope,
  },
  {
    name: "Cardiología",
    description: "Diagnóstico y tratamiento de enfermedades cardiovasculares.",
    icon: Heart,
  },
  {
    name: "Telemedicina",
    description: "Consultas médicas en línea para mayor comodidad y accesibilidad.",
    icon: Video,
  },
]

export function Services() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service) => (
        <Card key={service.name}>
          <CardHeader>
            <service.icon className="h-10 w-10 text-primary mb-2" />
            <CardTitle>{service.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

