import Navegation from "../components/Navegation";

export default function AboutPage() {
  return (
    <div>
      <Navegation />
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
            Acerca de Nosotros
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Misión
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Somos una marca que comercializamos y diseñamos bisutería con
                  un estilo trendy, romántico y delicado, elaborados con
                  materiales minuciosamente seleccionados y de alta calidad.
                  Nuestro objetivo como marca es acompañarte en cada momento de
                  tu vida, empoderándote más, realzando tu brillo y esencia.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Visión
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Posicionarnos como marca y ser líder en nuestro sector,
                  marcando la diferenciación en diseño, innovación, valores y
                  siendo una marca más sostenible.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Objetivos
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Mantener estándares de calidad excepcionales, innovar
                  constantemente en diseño, comprometerse con prácticas
                  sostenibles, brindar un servicio al cliente excepcional,
                  expandir la presencia de la marca y contribuir al bienestar de
                  las comunidades locales.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden col-span-2">
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Nuestros Valores
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Creemos en la autenticidad, la sostenibilidad y el
                  empoderamiento. Nos esforzamos por ser una marca que no solo
                  vende productos, sino que también inspira y apoya a nuestras
                  clientas en cada etapa de sus vidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
