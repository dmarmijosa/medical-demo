import Link from "next/link"

const segurosAceptados = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "Humana",
  "Kaiser Permanente",
  "Medicare",
  "Medicaid",
  "UnitedHealthcare",
  "Anthem",
  "Centene",
  "Molina Healthcare",
  "WellCare",
]

export default function SegurosAceptados() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Seguros Médicos Aceptados</h1>
          <p className="mt-4 text-lg text-gray-500">
            Trabajamos con una amplia variedad de aseguradoras para facilitar su atención médica.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {segurosAceptados.map((seguro) => (
              <li key={seguro} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">{seguro}</h3>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 text-center">
          <p className="text-base text-gray-500">
            Esta lista puede estar sujeta a cambios. Por favor, verifique su cobertura específica con su aseguradora o
            contáctenos para obtener la información más actualizada.
          </p>
          <Link
            href="/contacto"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Contáctenos para más información
          </Link>
        </div>
      </div>
    </div>
  )
}

