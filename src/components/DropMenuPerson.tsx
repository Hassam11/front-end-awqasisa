import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DropMenuPerson() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    // Limpiar datos del localStorage
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    // Redirigir al usuario a la página de inicio de sesión
    navigate("/login");
  };

  return (
    <button
      onClick={toggleMenu}
      className="pl-3 inline-block no-underline hover:text-black relative"
    >
      <svg
        className="fill-current hover:text-black"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <circle fill="none" cx="12" cy="7" r="3" />
        <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM12 13c-4.336 0-8 1.507-8 4v2c0 0.553 0.447 1 1 1h14c0.553 0 1-0.447 1-1v-2C20 14.507 16.336 13 12 13zM5 18c0.011-1.206 3.623-2.995 7-2.995S19 16.794 19 18H5z" />
      </svg>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <Link
            to="/perfil"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Perfil
          </Link>
          <Link
            to="/configuracion"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Configuración
          </Link>
          <Link
            to="/Dashboard"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Dashboard
          </Link>
          <button
            onClick={logout}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-center "
          >
            Salir
          </button>
        </div>
      )}
    </button>
  );
}
