import DATA from "../productos.json";
import Navegation from "../components/Navegation";

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
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
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

          <div className="container mx-auto grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DATA[0].Hoops.map((product, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg "
              >
                {/* <Image
                src={product.srcImage}
                alt={product.nombre}
                width={200}
                height={200}
              /> */}
                <img
                  src="https://trolleymate.co.uk/assets/img/error_404.jpeg"
                  alt="image2"
                  width={200}
                  height={200}
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
    </>
  );
}
