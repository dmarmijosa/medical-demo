import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

// Componentes adicionales
import { Services } from "@/components/services"
import { BlogPreview } from "@/components/blog-preview"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. John Doe</h1>
              <p className="text-xl mb-6">Especialista en Medicina Interna y Cardiología</p>
              <p className="mb-8">
                Comprometido con tu salud y bienestar. Más de 15 años de experiencia brindando atención médica de
                calidad.
              </p>
              <Link href="/reservar" passHref>
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Reservar Cita
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dr. John Doe"
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <Services />
          <div className="text-center mt-12">
            <Link href="/servicios" passHref>
              <Button variant="outline">
                Ver todos los servicios
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Últimos Artículos</h2>
          <BlogPreview />
          <div className="text-center mt-12">
            <Link href="/blog" passHref>
              <Button variant="outline">
                Ver todos los artículos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Mí Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661764354954-f2d74a4738cf?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dr. John Doe en su consultorio"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold mb-6">Sobre Dr. John Doe</h2>
              <p className="mb-6">
                Con más de 15 años de experiencia en medicina interna y cardiología, el Dr. John Doe se ha dedicado a
                proporcionar atención médica de alta calidad y personalizada a sus pacientes.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Graduado con honores de la Universidad de Medicina</li>
                <li>Especialización en Cardiología en el Hospital Central</li>
                <li>Miembro de la Asociación Americana de Cardiología</li>
              </ul>
              <Link href="/sobre-mi" passHref>
                <Button>
                  Conocer más
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen mis pacientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>María González</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {'"El Dr. Doe es un profesional excepcional. Su atención y dedicación han mejorado significativamente mi calidad de vida."'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Carlos Rodríguez</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {'"Gracias al Dr. Doe, pude superar mis problemas cardíacos. Su experiencia y trato humano son incomparables."'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

