import Navegation from "../components/Navegation";

export default function PerfilPage() {
  return (
    <div>
      <Navegation />
      <div className="container mx-auto mt-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Perfil de Usuario</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Editar Perfil
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información del Usuario */}
          <div className="bg-white shadow p-6 rounded col-span-1">
            <h2 className="text-xl font-semibold mb-4">
              Información del Usuario
            </h2>
            <p className="mb-2">
              <span className="font-semibold">Nombre:</span> John Doe
            </p>
            <p className="mb-2">
              <span className="font-semibold">Correo Electrónico:</span>{" "}
              john.doe@example.com
            </p>
            <p className="mb-2">
              <span className="font-semibold">Teléfono:</span> +999 999 999
            </p>
            <p className="mb-2">
              <span className="font-semibold">Dirección:</span> 123 Calle ??,
              Lima, Perú
            </p>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mt-4 w-full">
              Cambiar Contraseña
            </button>
          </div>
          {/* Últimas Órdenes */}
          <div className="bg-white shadow p-6 rounded col-span-2">
            <h2 className="text-xl font-semibold mb-4">Últimas Órdenes</h2>
            <div className="flex flex-col space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold">Orden #789012</h3>
                <p className="text-sm">Fecha: 10 de mayo de 2024</p>
                <p className="text-sm">Estado: En tránsito</p>
                {/* Detalles de la orden */}
                <div className="flex justify-between mt-2">
                  <button className="text-blue-500 hover:text-blue-600 font-semibold">
                    Ver Detalles
                  </button>
                  <button className="text-red-500 hover:text-red-600 font-semibold">
                    Cancelar Orden
                  </button>
                </div>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold">Orden #123456</h3>
                <p className="text-sm">Fecha: 12 de mayo de 2024</p>
                <p className="text-sm">Estado: Entregado</p>
                {/* Detalles de la orden */}
                <div className="flex justify-between mt-2">
                  <button className="text-blue-500 hover:text-blue-600 font-semibold">
                    Ver Detalles
                  </button>
                  <button className="text-yellow-500 hover:text-red-600 font-semibold">
                    Ver Orden
                  </button>
                </div>
              </div>

              {/* Más órdenes */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
