import Image from "next/image"

export default function SobreMi() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Sobre Dr. Pamela Cuenca</h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Con más de 15 años de experiencia en medicina interna y cardiología, el Dr. Pamela Cuenca se ha dedicado a
              proporcionar atención médica de alta calidad y personalizada a sus pacientes.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Formación Académica</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Graduada de la Universidad de Medicina con honores. Especialización en Cardiología en el Hospital
                    Central.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Experiencia Profesional</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Más de 15 años de experiencia en hospitales de renombre y consulta privada. Especialista en
                    tratamientos cardiovasculares innovadores.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Compromiso con los Pacientes</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Dedicado a proporcionar atención personalizada y de calidad. Enfoque en la prevención y el bienestar
                    integral del paciente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <Image
              className="rounded-lg shadow-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dr. Pamela Cuenca en su consultorio"
              width={640}
              height={640}
            />
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-extrabold text-gray-900">Testimonios de Pacientes</h3>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-base text-gray-500">
                  {'"El Dr. Doe es un profesional excepcional. Su atención y dedicación han mejorado significativamente mi calidad de vida."'}
                </p>
                <div className="mt-6">
                  <p className="text-base font-medium text-gray-900">María González</p>
                  <p className="text-sm text-gray-500">Paciente desde 2018</p>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-base text-gray-500">
                  {'"Gracias al Dr. Doe, pude superar mis problemas cardíacos. Su experiencia y trato humano son incomparables."'}
                </p>
                <div className="mt-6">
                  <p className="text-base font-medium text-gray-900">Carlos Rodríguez</p>
                  <p className="text-sm text-gray-500">Paciente desde 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

