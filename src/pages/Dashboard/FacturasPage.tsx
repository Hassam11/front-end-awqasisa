import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
} from "@chakra-ui/react";
import facturasData from "../../facturas.json";
import DashboardNavigation from "../../components/DashboardNavigation";

export default function FacturasPage() {
  const [facturas, setFacturas] = useState(facturasData);
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  const handleFechaInicioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFechaInicio(e.target.value);
  };

  const handleFechaFinChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFechaFin(e.target.value);
  };

  const filtrarFacturasPorFecha = () => {
    const facturasFiltradas = facturas.filter((factura) => {
      const fechaFactura = new Date(factura.fechaEmision);
      const fechaInicioFiltro = new Date(fechaInicio);
      const fechaFinFiltro = new Date(fechaFin);
      return (
        fechaFactura >= fechaInicioFiltro && fechaFactura <= fechaFinFiltro
      );
    });
    setFacturas(facturasFiltradas);
  };

  const resetearFacturas = () => {
    setFacturas(facturasData);
    setFechaInicio("");
    setFechaFin("");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <DashboardNavigation />
      {/* Content Area */}
      <div className="flex-1 p-10 ml-64">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-semibold mb-8">Gestión de Facturas</h1>
          <div className="mb-4">
            <input
              type="date"
              value={fechaInicio}
              onChange={handleFechaInicioChange}
              className="mr-2"
            />
            <input
              type="date"
              value={fechaFin}
              onChange={handleFechaFinChange}
              className="mr-2"
            />
            <Button onClick={filtrarFacturasPorFecha} colorScheme="blue">
              Filtrar
            </Button>
            <Button onClick={resetearFacturas} colorScheme="red" ml={2}>
              Restablecer
            </Button>
          </div>
          {/* Tabla de facturas */}
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>Número de Factura</Th>
                <Th>Cliente</Th>
                <Th>Correo</Th>
                <Th>Fecha de Emisión</Th>
                <Th>Total</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {facturas.map((factura) => (
                <Tr key={factura.numero}>
                  <Td>{factura.numero}</Td>
                  <Td>{factura.cliente.nombre}</Td>
                  <Td>{factura.cliente.correo}</Td>
                  <Td>{factura.fechaEmision}</Td>
                  <Td>${factura.total}</Td>
                  <Td>
                    <Flex>
                      <Link
                        to={`/factura/${factura.numero}`}
                        className="text-blue-500 mr-2 hover:text-blue-600"
                      >
                        Ver
                      </Link>
                      <Link
                        to={`/factura/${factura.numero}/editar`}
                        className="text-green-500 mr-2 hover:text-green-600"
                      >
                        Editar
                      </Link>
                      <Link
                        to={`/factura/${factura.numero}/eliminar`}
                        className="text-red-500 hover:text-red-600"
                      >
                        Eliminar
                      </Link>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
