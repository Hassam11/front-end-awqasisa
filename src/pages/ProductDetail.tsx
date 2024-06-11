import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DATA from "../productos.json";
import Navegation from "../components/Navegation";
import { IoArrowBack } from "react-icons/io5";

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
      <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
        <div className="flex items-center w-full max-w-6xl mb-4">
          <Link to="/">
            <IoArrowBack
              size={30}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            />
          </Link>
        </div>
        <main className="w-full max-w-6xl bg-white p-6 rounded-md shadow-lg flex">
          <div className="flex flex-col w-1/2">
            <img
              src={product.ImgResource}
              alt="Product"
              className="w-full h-[600px] object-cover rounded-md"
            />
            <div className="flex space-x-2 mt-4">
              {/* Thumbnail images */}
              <img
                src={product.img1}
                alt="Thumbnail 1"
                className="w-20 h-20 object-cover rounded-md"
              />
              <img
                src={product.img2}
                alt="Thumbnail 2"
                className="w-20 h-20 object-cover rounded-md"
              />
              <img
                src={product.img3}
                alt="Thumbnail 3"
                className="w-20 h-20 object-cover rounded-md"
              />
              <img
                src={product.img4}
                alt="Thumbnail 4"
                className="w-20 h-20 object-cover rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col w-1/2 ml-6">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-red-500">
                Precio: S./{product.precio}
              </span>
              <span className="text-xl line-through text-gray-500">
                PEN 100.48
              </span>
              <span className="text-red-600">-40%</span>
            </div>
            <span className="text-green-600 mt-2">2% de descuento extra</span>
            <button className="mt-2 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300">
              Cupón y descuento
            </button>
            <div className="bg-yellow-100 p-4 mt-4 rounded-md">
              <p>Envío gratis en el primer pedido</p>
              <p>Entrega rápida para el JUN 25 - JUL 06</p>
            </div>
            <h1 className="mt-4 text-2xl font-bold">{product.product}</h1>
            <p className="mt-2 text-gray-700">{product.descripcion}</p>
            <div className="flex items-center mt-4">
              <span className="text-yellow-500 text-xl">★ ★ ★ ★ ☆</span>
              <span className="ml-2 text-gray-700">
                4.5 | 3 valoraciones | 18 Vendidos
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start mt-4">
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
            <button className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-300 w-full">
              Agregar al carrito
            </button>
            <div className="mt-4 flex justify-between text-gray-600">
              <span>
                Pagos seguros | Seguridad y privacidad | Protección del
                comprador
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
