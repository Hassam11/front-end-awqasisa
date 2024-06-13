import { useState } from "react";
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
  Input,
} from "@chakra-ui/react";

interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string; // Agregar la propiedad imagen al tipo Producto
}

export default function ProductosPage() {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const data: Producto[] = DATA.productos.map((producto) => ({
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    precio: parseFloat(producto.precio), // Convertir de string a number
    stock: parseInt(producto.stock),
    imagen: "https://baliq.com/wp-content/uploads/2021/12/ARG-5510.jpg", // Agregar la URL de la imagen
  }));

  const toggleViewMode = (mode: "grid" | "table") => {
    setViewMode(mode);
  };

  const handleEdit = (producto: Producto) => {
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
          <h1 className="text-3xl font-semibold mb-8">Productos</h1>
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
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="mx-auto mb-4 w-40 h-40 object-contain"
                  />
                  <h2 className="text-xl font-semibold mb-4">
                    {producto.nombre}
                  </h2>
                  <p className="text-gray-600 mb-2">{producto.descripcion}</p>
                  <p className="text-gray-800 font-semibold text-lg mb-2">
                    Precio: S/. {producto.precio.toFixed(2)}
                  </p>
                  <p className="text-gray-800 font-semibold text-lg mb-2">
                    Stock: {producto.stock}
                  </p>
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
                    <th className="py-3 px-6 text-left">Producto</th>{" "}
                    <th className="py-3 px-6 text-left">Descripción</th>
                    <th className="py-3 px-6 text-left">Precio</th>
                    <th className="py-3 px-6 text-left">Stock</th>
                    {/* Nueva columna para la imagen */}
                    <th className="py-3 px-6 text-left">Acciones</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {data.map((producto) => (
                    <tr
                      key={producto.nombre}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left font-semibold text-sm">
                        {producto.nombre}
                      </td>
                      <td className="py-3 px-6 text-left">
                        <img
                          src={producto.imagen}
                          alt={producto.nombre}
                          className="w-20 h-20 object-contain"
                        />
                      </td>
                      <td className="py-3 px-6 text-left  font-semibold">
                        {producto.descripcion}
                      </td>
                      <td className="py-3 px-6 text-left  font-semibold">
                        S/. {producto.precio}
                      </td>
                      <td className="py-3 px-6 text-left  font-semibold">
                        {producto.stock}
                      </td>

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
                <img
                  src={selectedProduct?.imagen}
                  alt={selectedProduct?.nombre}
                  className="mx-auto mb-4 w-40 h-40 object-contain"
                />
                <div>
                  <label htmlFor="descripcion">Descripción:</label>
                  <Input
                    id="descripcion"
                    value={selectedProduct?.descripcion}
                    className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="precio">Precio:</label>
                  <Input
                    id="precio"
                    type="number"
                    value={selectedProduct?.precio}
                    className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="stock">Stock:</label>
                  <Input
                    id="stock"
                    type="number"
                    value={selectedProduct?.stock}
                    className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
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
