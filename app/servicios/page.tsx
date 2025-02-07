import { Heart, Stethoscope, Video, CreditCard } from "lucide-react"

const services = [
  {
    name: "Consulta General",
    description:
      "Evaluación integral de su salud, incluyendo historial médico, examen físico y recomendaciones personalizadas.",
    icon: Stethoscope,
  },
  {
    name: "Cardiología",
    description:
      "Diagnóstico y tratamiento de enfermedades cardiovasculares, incluyendo electrocardiogramas y pruebas de esfuerzo.",
    icon: Heart,
  },
  {
    name: "Telemedicina",
    description: "Consultas médicas en línea para mayor comodidad y accesibilidad, manteniendo la calidad de atención.",
    icon: Video,
  },
]

export default function Servicios() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Nuestros Servicios</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Cuidado médico integral
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Ofrecemos una amplia gama de servicios médicos para cuidar de su salud y bienestar.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-extrabold text-gray-900">Información de Pagos y Seguros</h3>
          <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <CreditCard className="h-6 w-6 text-primary" aria-hidden="true" />
                <h4 className="ml-3 text-lg leading-6 font-medium text-gray-900">Métodos de Pago Aceptados</h4>
              </div>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Aceptamos efectivo, tarjetas de crédito/débito y transferencias bancarias.</p>
              </div>
            </div>
            <div className="px-4 py-5 sm:p-6 border-t border-gray-200">
              <h4 className="text-lg leading-6 font-medium text-gray-900">Seguros Médicos</h4>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Trabajamos con las principales aseguradoras. Por favor, consulte su cobertura específica.</p>
              </div>
              <div className="mt-3">
                <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark">
                  Ver lista completa de seguros aceptados &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

