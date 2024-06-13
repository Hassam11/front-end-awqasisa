import { Link } from "react-router-dom";
import { FaStore, FaHome, FaNewspaper, FaChartBar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdExitToApp } from "react-icons/md";

export default function DashboardNavigation() {
  return (
    <div className="w-64 bg-gray-800 text-white fixed h-screen overflow-y-auto">
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <ul className="mt-6">
          <li className="mb-4">
            <Link
              to="/Dashboard/ventas"
              className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded"
            >
              <FaChartBar className="mr-2" />
              Ventas
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/Dashboard/productos"
              className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded"
            >
              <FaStore className="mr-2" />
              Productos
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/Dashboard/facturas"
              className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded"
            >
              <FaNewspaper className="mr-2" />
              Facturas
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/Dashboard/clientes"
              className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded"
            >
              <IoPerson className="mr-2" />
              Clientes
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/"
              className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded"
            >
              <FaHome className="mr-2" />
              Tienda
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/login"
              className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded"
            >
              <MdExitToApp className="mr-2" />
              Salir
            </Link>
          </li>
          {/* Otros elementos del menú */}
        </ul>
      </div>
    </div>
  );
}
