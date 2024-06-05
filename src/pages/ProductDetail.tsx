import { useState } from "react";
import { useParams } from "react-router-dom";
import DATA from "../productos.json";
import Navegation from "../components/Navegation";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = DATA[0].Hoops[productId];
  const [cantidad, setCantidad] = useState(1);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <>
      <Navegation />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="relative w-full md:w-2/3">
            <img
              //src={product.srcImage} // Asegúrate de incluir la ruta de la imagen
              src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fHww"
              alt={product.nombre}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
          <div className="text-center md:text-left w-full md:w-1/3">
            <h3 className="text-3xl font-bold mb-2">{product.nombre}</h3>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              {product.descripcion}
            </p>
            <p className="text-xl text-gray-900 mb-2">
              Precio: S./{product.precio}
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300 mr-2"
                onClick={decrementarCantidad}
              >
                -
              </button>
              <span className="text-xl">{cantidad}</span>
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300 ml-2"
                onClick={incrementarCantidad}
              >
                +
              </button>
            </div>
            <button className="mt-4 bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors duration-300 w-full">
              Agregar al carrito
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
          <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
          <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </>
  );
}
