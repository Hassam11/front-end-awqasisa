export default function CartShop() {
  return (
    <section className="bg-white py-4 rounded-lg shadow-lg">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center pb-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">Compras</h1>
        </div>

        <div className="mt-4 max-w-xs">
          <div className="rounded-lg">
            <div className="px-4 py-4">
              <div className="flow-root">
                <ul className="-my-4">
                  <li className="flex space-y-3 py-4 text-left">
                    <div className="shrink-0 relative">
                      <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow">
                        1
                      </span>
                      <img
                        className="h-16 w-16 max-w-full rounded-lg object-cover"
                        src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                        alt="Producto"
                      />
                    </div>

                    <div className="relative flex flex-1 flex-col justify-between pl-4">
                      <div>
                        <p className="text-base font-semibold text-gray-900">
                          Nike Air Max 2019
                        </p>
                        <p className="mt-1 text-sm text-gray-400">36EU - 4US</p>
                      </div>
                      <div className="flex items-end justify-between mt-4">
                        <p className="text-base font-semibold text-gray-900">
                          $1259.00
                        </p>
                        <button
                          type="button"
                          className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                        >
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
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <hr className="mt-4 border-t border-gray-200" />

              <div className="mt-4 text-center">
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  Comprar
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-4 ml-2 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
