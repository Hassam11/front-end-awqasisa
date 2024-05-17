import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="mb-4 text-center text-xl font-bold uppercase">
              Regístrate
            </h2>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Nombre completo"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="correo"
                type="email"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">
                  Quiero recibir ofertas especiales, recomendaciones
                  personalizadas y consejos de aprendizaje.
                </span>
              </label>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                Regístrate
              </button>
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
