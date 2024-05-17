import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    // Lógica para iniciar sesión
  };

  const handleRegister = () => {
    // Lógica para registrar usuario
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="mb-4 text-center text-xl font-bold uppercase">
            Iniciar Sesión
          </h2>

          <div className="mb-4">
            <button className="bg-slate-100 text-black font-bold py-2 px-4 rounded flex items-center justify-center w-full mb-4">
              <svg
                className="h-5 w-5 mr-2"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0a8 8 0 108 8 8.006 8.006 0 00-8-8zM4 8h3v4H4zm5 0h3v4H9zm2.21-1.29l-1.42-1.42A1 1 0 009.17 5.17l1.42 1.42A1 1 0 0011.21 6.71zM5.17 5.17A1 1 0 003.76 6.59l1.42 1.42A1 1 0 005.17 5.17z"
                />
              </svg>
              Continuar con Google
            </button>
          </div>

          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="block text-gray-500 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">Recuérdame</span>
            </label>
          </div>
          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              Iniciar sesión
            </button>
          </div>
          <p className="text-center text-gray-500 text-xs mt-2">
            ¿Aún no tienes cuenta?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              ¡Regístrate aquí!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
