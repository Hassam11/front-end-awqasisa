import { Link } from "react-router-dom";

export default function DashboardNavigation() {
  return (
    <div className="w-64 bg-gray-800 text-white fixed h-screen overflow-y-auto">
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <ul className="mt-6 text-center">
          <li className="mb-4">
            <Link
              to="/Dashboard/ventas"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded"
            >
              Ventas
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/Dashboard/productos"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded"
            >
              Productos
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/Dashboard/facturas"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded"
            >
              Facturas
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/Dashboard/clientes" // La ruta completa a la página de clientes
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded"
            >
              Clientes
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded"
            >
              Tienda
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/login"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded"
            >
              Salir
            </Link>
          </li>
          {/* Otros elementos del menú */}
        </ul>
      </div>
    </div>
  );
}
