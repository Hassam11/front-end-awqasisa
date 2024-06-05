import { useState } from "react";
import { Link } from "react-router-dom";
import DATA from "../../productos2.json";
import DashboardNavigation from "../../components/DashboardNavigation";
import { FaTable, FaThLarge } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

export default function ProductosPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const data = DATA.productos;

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  const handleEdit = (producto) => {
    setSelectedProduct(producto);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <DashboardNavigation />
      {/* Content Area */}
      <div className="flex-1 p-10 ml-64">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-semibold mb-8">Gestión de Productos</h1>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => toggleViewMode("grid")}
              className={`mr-4 ${
                viewMode === "grid" ? "text-blue-500" : "text-gray-500"
              }`}
            >
              <FaThLarge size={20} />
            </button>
            <button
              onClick={() => toggleViewMode("table")}
              className={
                viewMode === "table" ? "text-blue-500" : "text-gray-500"
              }
            >
              <FaTable size={20} />
            </button>
          </div>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {data.map((producto) => (
                <div
                  key={producto.nombre}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h2 className="text-xl font-semibold mb-4">
                    {producto.nombre}
                  </h2>
                  <p className="text-gray-600 mb-2">{producto.descripcion}</p>
                  <p className="text-gray-600 mb-2">
                    Precio: {producto.precio}
                  </p>
                  <p className="text-gray-600 mb-2">Stock: {producto.stock}</p>
                  <div className="flex justify-between">
                    <Button
                      colorScheme="blue"
                      onClick={() => handleEdit(producto)}
                    >
                      Editar
                    </Button>
                    <Button colorScheme="red">Eliminar</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Nombre</th>
                    <th className="py-3 px-6 text-left">Descripción</th>
                    <th className="py-3 px-6 text-left">Precio</th>
                    <th className="py-3 px-6 text-left">Stock</th>
                    <th className="py-3 px-6 text-left">Acciones</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {data.map((producto) => (
                    <tr
                      key={producto.nombre}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left">{producto.nombre}</td>
                      <td className="py-3 px-6 text-left">
                        {producto.descripcion}
                      </td>
                      <td className="py-3 px-6 text-left">{producto.precio}</td>
                      <td className="py-3 px-6 text-left">{producto.stock}</td>
                      <td className="py-3 px-6 text-left">
                        <Button
                          colorScheme="blue"
                          onClick={() => handleEdit(producto)}
                          mr={2}
                        >
                          Editar
                        </Button>
                        <Button colorScheme="red">Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* Modal */}
          <Modal
            isOpen={!!selectedProduct}
            onClose={handleCloseModal}
            size="xl"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{selectedProduct?.nombre}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>{selectedProduct?.descripcion}</p>
                <p>Precio: {selectedProduct?.precio}</p>
                <p>Stock: {selectedProduct?.stock}</p>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
}
