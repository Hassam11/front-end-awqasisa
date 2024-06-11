import DashboardNavigation from "../components/DashboardNavigation";

function DashboardPage() {
  const ventas = [
    { id: 1, producto: "Camiseta", cantidad: 10, total: 200 },
    { id: 2, producto: "Pantalón", cantidad: 5, total: 150 },
    { id: 3, producto: "Zapatos", cantidad: 8, total: 300 },
    { id: 4, producto: "Gorra", cantidad: 3, total: 50 },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <DashboardNavigation />
      {/* Content Area */}
      <div className="flex-1 p-10 ml-64">
        {" "}
        {/* Agrega un margen izquierdo igual al ancho del sidebar */}
        {/* Contenido del dashboard */}
        <h2 className="text-2xl font-semibold mb-6">Ventas de la Tienda</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Producto</th>
                <th className="py-3 px-6 text-left">Cantidad</th>
                <th className="py-3 px-6 text-left">Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {ventas.map((venta) => (
                <tr
                  key={venta.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">{venta.id}</td>
                  <td className="py-3 px-6 text-left">{venta.producto}</td>
                  <td className="py-3 px-6 text-left">{venta.cantidad}</td>
                  <td className="py-3 px-6 text-left">{venta.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
