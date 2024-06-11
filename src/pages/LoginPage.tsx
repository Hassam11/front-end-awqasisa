import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevenir el envío predeterminado del formulario

    // Aquí deberías validar el correo y la contraseña
    // Si son correctos, los guardas en localStorage
    const validEmail = "admin@admin.com";
    const validPassword = "admin";

    if (email === validEmail && password === validPassword) {
      // Guardar correo y contraseña en localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      navigate("/");
    } else {
      // Mostrar un mensaje de error o realizar otras acciones
      console.log("Correo o contraseña incorrectos");
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="mb-4 text-center text-xl font-bold uppercase">
            Iniciar Sesión
          </h2>

          <form onSubmit={handleLogin}>
            {" "}
            {/* Agregar el formulario y el manejador de envío */}
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={handleChangePassword}
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Iniciar sesión
              </button>
            </div>
          </form>

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
