import DATA from "../productos.json";
import Navegation from "../components/Navegation";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navegation />
      <section
        className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
        style={{
          maxWidth: "1600px",
          height: "32rem",
          // backgroundImage:
          //   "url('https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fHww')",
          backgroundColor: "gray",
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
            {/* <h1 className="text-black text-2xl my-4">
            Stripy Zig Zag Jigsaw Pillow and Duvet Set
          </h1>
          <a
            className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
            href="#"
          >
            products
          </a> */}
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

          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={`https://via.placeholder.com/300x200?text=Product+${
                    index + 1
                  }`}
                  alt={`Producto ${index + 1}`}
                  className="w-full h-56 object-cover rounded-md"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Producto {index + 1}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla optio saepe iste, libero cupiditate obcaecati! Sunt
                    accusantium dolores nulla facere..
                  </p>
                  <div className="flex items-center mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      S./{(index + 1) * 10}.00
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400 mr-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 inline"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 .587l3.668 7.429 8.2 1.191-5.918 5.766 1.396 8.139L12 18.9l-7.346 3.912 1.396-8.139L.132 9.207l8.2-1.191z" />
                          </svg>
                        ))}
                    </span>
                    <span className="text-gray-600">(45)</span>
                  </div>
                  <button className="mt-4 w-full bg-orange-500 text-white text-center py-2 rounded-md hover:bg-orange-600 transition-colors duration-200">
                    Añadir
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center mt-8">
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Anterior</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
              {Array.from({ length: 5 }, (_, index) => (
                <a
                  key={index}
                  href="#"
                  className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                    index === 0 ? "bg-gray-200" : "bg-white"
                  } text-gray-700 hover:bg-gray-50`}
                >
                  {index + 1}
                </a>
              ))}
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Siguiente</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
