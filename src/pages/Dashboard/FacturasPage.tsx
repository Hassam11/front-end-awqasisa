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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Text,
  Stack,
} from "@chakra-ui/react";
import facturasData from "../../facturas.json";
import DashboardNavigation from "../../components/DashboardNavigation";

// Definición de tipos
interface Producto {
  nombre: string;
  cantidad: number;
}

interface Cliente {
  nombre: string;
  correo: string;
  ruc: string;
  direccion: string;
}

interface Factura {
  numero: string;
  cliente: Cliente;
  fechaEmision: string; // Cambiado a string según el formato del JSON
  total: number;
  estado: string;
  metodoPago: string;
  fechaPago: string; // Cambiado a string según el formato del JSON
  productos: Producto[];
  vendedor?: string; // Vendedor es opcional según el JSON
}

export default function FacturasPage() {
  const [facturas, setFacturas] = useState<Factura[]>(facturasData);
  const [fechaInicio, setFechaInicio] = useState<string>("");
  const [fechaFin, setFechaFin] = useState<string>("");
  const [selectedFactura, setSelectedFactura] = useState<Factura | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const verDetalles = (factura: Factura) => {
    setSelectedFactura(factura);
    onOpen();
  };
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
    }).format(value);
  };

  const formatearFecha = (fecha: string) => {
    const opciones = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    } as Intl.DateTimeFormatOptions;
    return new Date(fecha).toLocaleDateString("es-ES", opciones);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <DashboardNavigation />
      {/* Content Area */}
      <div className="flex-1 p-10 ml-64">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-semibold mb-8">Facturas</h1>
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
                  <Td>{formatearFecha(factura.fechaEmision)}</Td>
                  <Td>{formatCurrency(factura.total)}</Td>
                  <Td>
                    <Flex>
                      <Button
                        colorScheme="blue"
                        onClick={() => verDetalles(factura)}
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition duration-300 ease-in-out"
                      >
                        Ver detalles
                      </Button>
                      <Link
                        to={`/factura/${factura.numero}/editar`}
                        className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600 transition duration-300 ease-in-out"
                      >
                        Descargar
                      </Link>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          {/* Modal */}
          {selectedFactura && (
            <Modal isOpen={isOpen} onClose={onClose} size="2xl">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Detalles de la Factura</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Text fontWeight="semibold">Número de Factura:</Text>
                        <Text>{selectedFactura.numero}</Text>
                      </div>
                      <div>
                        <Text fontWeight="semibold">Cliente:</Text>
                        <Text>{selectedFactura.cliente.nombre}</Text>
                      </div>
                      <div>
                        <Text fontWeight="semibold">Correo:</Text>
                        <Text>{selectedFactura.cliente.correo}</Text>
                      </div>
                      <div>
                        <Text fontWeight="semibold">RUC o DNI:</Text>
                        <Text>{selectedFactura.cliente.ruc}</Text>
                      </div>
                      <div>
                        <Text fontWeight="semibold">Dirección:</Text>
                        <Text>{selectedFactura.cliente.direccion}</Text>
                      </div>
                      <div>
                        <Text fontWeight="semibold">Fecha de Pago:</Text>
                        <Text>{formatearFecha(selectedFactura.fechaPago)}</Text>
                      </div>
                      <div>
                        <Text fontWeight="semibold">Fecha de Emisión:</Text>
                        <Text>
                          {formatearFecha(selectedFactura.fechaEmision)}
                        </Text>
                      </div>
                      <div>
                        <Text fontWeight="semibold">Total:</Text>
                        <Text>{formatCurrency(selectedFactura.total)}</Text>
                      </div>
                      <div>
                        <Text fontWeight="semibold">Estado:</Text>
                        <Text>{selectedFactura.estado}</Text>
                      </div>
                      <div>
                        <Text fontWeight="semibold">Método de Pago:</Text>
                        <Text>{selectedFactura.metodoPago}</Text>
                      </div>
                    </div>
                    <Box mt="4">
                      <Text fontWeight="bold">Productos:</Text>
                      <Stack spacing={2} mt="2">
                        {selectedFactura.productos.map((producto, index) => (
                          <Box
                            key={index}
                            borderWidth="1px"
                            borderRadius="lg"
                            p="2"
                          >
                            <Text fontSize="lg" fontWeight="semibold">
                              {producto.nombre}
                            </Text>
                            <Text>Cantidad: {producto.cantidad}</Text>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Cerrar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}
