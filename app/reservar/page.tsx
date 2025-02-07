"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import QRCode from "react-qr-code"

export default function ReservarCita() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: new Date(),
    time: "",
    type: "",
  })

  const [showQR, setShowQR] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setFormData((prevData) => ({
        ...prevData,
        date,
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario y reservar la cita
    console.log("Cita reservada:", formData)
    // Mostrar el código QR
    setShowQR(true)
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Reservar Cita</h2>
          <p className="mt-4 text-lg text-gray-500">
            Complete el formulario a continuación para programar su cita con el Dr. Pamela Cuenca.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre Completo
              </label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <Input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Fecha de la Cita</label>
              <Calendar mode="single" selected={formData.date} onSelect={handleDateChange} className="mt-1" />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Hora de la Cita
              </label>
              <Select
                name="time"
                value={formData.time}
                onValueChange={(value) => setFormData({ ...formData, time: value })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Seleccione una hora" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">09:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="12:00">12:00 PM</SelectItem>
                  <SelectItem value="14:00">02:00 PM</SelectItem>
                  <SelectItem value="15:00">03:00 PM</SelectItem>
                  <SelectItem value="16:00">04:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Tipo de Consulta
              </label>
              <Select
                name="type"
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Seleccione el tipo de consulta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="presencial">Presencial</SelectItem>
                  <SelectItem value="virtual">Virtual</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button type="submit" className="w-full">
                Reservar Cita
              </Button>
            </div>
          </form>
        </div>
        {showQR && (
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Su cita ha sido reservada</h3>
            <p className="text-gray-500 mb-4">
              Escanee el siguiente código QR para guardar los detalles de su cita en su dispositivo móvil.
            </p>
            <div className="inline-block p-4 bg-white rounded-lg shadow-md">
              <QRCode
                value={`Cita con Dr. Pamela Cuenca\nFecha: ${format(formData.date, "dd/MM/yyyy", { locale: es })}\nHora: ${
                  formData.time
                }\nTipo: ${formData.type === "presencial" ? "Presencial" : "Virtual"}`}
                size={200}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

