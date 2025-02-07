import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CodigoQR() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Código QR para Citas</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <Card className="w-full md:w-1/2">
          <CardHeader>
            <CardTitle>Escanea para Agendar tu Cita</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="https://plus.unsplash.com/premium_photo-1661764354954-f2d74a4738cf?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Código QR para agendar cita"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </CardContent>
        </Card>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">¿Cómo usar el código QR?</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Abre la cámara de tu smartphone</li>
            <li>Apunta al código QR</li>
            <li>Toca la notificación que aparece</li>
            <li>Serás dirigido a nuestra página de reserva de citas</li>
            <li>Selecciona la fecha y hora que prefieras</li>
            <li>Confirma tu cita</li>
          </ol>
          <p className="mt-6 text-gray-600">
            Si tienes problemas para escanear el código QR, puedes ir directamente a nuestra página de
            <a href="/reservar" className="text-primary hover:underline">
              {" "}
              reserva de citas
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

