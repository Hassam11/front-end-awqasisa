import React from "react";
import DATA from "../productos.json";
import Navegation from "../components/Navegation";

export default function MainPage() {
  return (
    <>
      <Navegation />
      <section
        className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
        style={{
          maxWidth: "1600px",
          height: "32rem",
          backgroundColor: "gray",
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start px-6 tracking-wide">
            <h1 className="text-white text-5xl font-bold mb-4">
              Discover the Beauty of Awqasisa
            </h1>
            <p className="text-white text-lg mb-8">
              Unique and handcrafted jewelry just for you
            </p>
            <a
              href="#collections"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      <section id="collections" className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                Tienda
              </a>

              <div className="flex items-center" id="store-nav-content">
                <a
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </a>

                <a
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>

          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DATA[0].Hoops.map((product, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <img
                  //   src={product.srcImage}
                  alt={product.nombre}
                  width={200}
                  height={200}
                  className="w-full h-56 object-cover"
                />
                <div className="mt-2">
                  <h3 className="text-lg font-semibold">{product.nombre}</h3>
                  <p className="text-sm text-gray-600">{product.descripcion}</p>
                  <p className="mt-2 text-gray-900">
                    Precio: S./{product.precio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Awqasisa</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Awqasisa is dedicated to creating unique and beautiful handcrafted
            jewelry. Each piece is made with love and attention to detail to
            ensure you get the best quality.
          </p>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Have any questions? Feel free to reach out to us at{" "}
            <a
              href="mailto:info@awqasisa.com"
              className="text-blue-600 hover:underline"
            >
              info@awqasisa.com
            </a>
          </p>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Awqasisa. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
