import { ChangeEvent, useState } from "react";
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  Heading,
} from "@chakra-ui/react";
import DashboardNavigation from "../../components/DashboardNavigation";

export default function ClientesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [clientes] = useState([
    {
      id: 1,
      nombre: "Juan Pérez",
      email: "juan@gmail.com",
      telefono: "999-999-999",
      compras: 3,
      direccion: "Avenida - Calle, Ciudad",
      notas: "Cliente preferente",
      comprando: false,
    },
    {
      id: 2,
      nombre: "María López",
      email: "maria@gmail.com",
      telefono: "999-999-999",
      compras: 5,
      direccion: "Avenida - Calle, Ciudad",
      notas: "Ninguna",
      comprando: true,
    },
    {
      id: 3,
      nombre: "Carlos García",
      email: "carlos@gmail.com",
      telefono: "999-999-999",
      compras: 2,
      direccion: "Avenida - Calle, Ciudad",
      notas: "Pago pendiente",
      comprando: false,
    },
    {
      id: 4,
      nombre: "Ana García",
      email: "ana@gmail.com",
      telefono: "999-999-999",
      compras: 4,
      direccion: "Avenida - Calle, Ciudad",
      notas: "Cliente nuevo",
      comprando: true,
    },
    {
      id: 5,
      nombre: "Diego Martínez",
      email: "diego@gmail.com",
      telefono: "999-999-999",
      compras: 7,
      direccion: "Avenida - Calle, Ciudad",
      notas: "Cliente frecuente",
      comprando: false,
    },
    {
      id: 6,
      nombre: "Laura Ramírez",
      email: "laura@gmail.com",
      telefono: "999-999-999",
      compras: 2,
      direccion: "Avenida - Calle, Ciudad",
      notas: "Cliente preferente",
      comprando: true,
    },
    {
      id: 7,
      nombre: "Pedro Díaz",
      email: "pedro@gmail.com",
      telefono: "999-999-999",
      compras: 5,
      direccion: "Avenida - Calle, Ciudad",
      notas: "Cliente nuevo",
      comprando: false,
    },
    {
      id: 8,
      nombre: "María Sánchez",
      email: "maria@gmail.com",
      telefono: "999-999-999",
      compras: 3,
      direccion: "Avenida - Calle, Ciudad",
      notas: "Cliente frecuente",
      comprando: true,
    },
    {
      id: 9,
      nombre: "Carlos Rodríguez",
      email: "carlos@gmail.com",
      telefono: "999-999-999",
      compras: 6,
      direccion: "Avenida - Calle, Ciudad",
      notas: "Cliente nuevo",
      comprando: false,
    },
    {
      id: 10,
      nombre: "Lucía Gómez",
      email: "lucia@gmail.com",
      telefono: "999-999-999",
      compras: 1,
      direccion: "Avenida - Calle, Ciudad",
      notas: "Cliente preferente",
      comprando: true,
    },
    {
      id: 11,
      nombre: "Pablo Pérez",
      email: "pablo@gmail.com",
      telefono: "999-999-999",
      compras: 8,
      direccion: "Avenida - Calle, Ciudad",
      notas: "Cliente frecuente",
      comprando: false,
    },
    {
      id: 12,
      nombre: "Sofía Martínez",
      email: "sofia@gmail.com",
      telefono: "999-999-999",
      compras: 2,
      direccion: "Avenida - Calle, Ciudad",
      notas: "Cliente nuevo",
      comprando: true,
    },
    {
      id: 13,
      nombre: "Alejandro Díaz",
      email: "alejandro@gmail.com",
      telefono: "999-999-999",
      compras: 5,
      direccion: "Avenida - Calle, Ciudad",
      notas: "Cliente preferente",
      comprando: false,
    },
  ]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredClientes = clientes.filter((cliente) =>
    cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <DashboardNavigation />
      {/* Content Area */}
      <Flex flex="1" p="10" ml="64" direction="column" bg="gray.50">
        <Heading as="h1" size="lg" mb="8">
          Panel de Clientes
        </Heading>
        <Input
          placeholder="Buscar cliente"
          value={searchTerm}
          onChange={handleSearch}
          mb="4"
          size="lg"
          bg="white"
          borderColor="gray.300"
          _hover={{ borderColor: "gray.400" }}
        />
        <Flex overflowX="auto">
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th py="4" px="6">
                  Nombre
                </Th>
                <Th py="4" px="6">
                  Email
                </Th>
                <Th py="4" px="6">
                  Teléfono
                </Th>
                <Th py="4" px="6">
                  Compras realizadas
                </Th>
                <Th py="4" px="6">
                  Dirección
                </Th>
                <Th py="4" px="6">
                  Notas
                </Th>
                <Th py="4" px="6">
                  Comprando
                </Th>
                <Th py="4" px="6">
                  Acciones
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredClientes.map((cliente) => (
                <Tr
                  key={cliente.id}
                  _hover={{ bgColor: "gray.100" }}
                  borderBottom="1px"
                  borderColor="gray.200"
                >
                  <Td py="4" px="6">
                    {cliente.nombre}
                  </Td>
                  <Td py="4" px="6">
                    {cliente.email}
                  </Td>
                  <Td py="4" px="6">
                    {cliente.telefono}
                  </Td>
                  <Td py="4" px="6">
                    {cliente.compras}
                  </Td>
                  <Td py="4" px="6">
                    {cliente.direccion}
                  </Td>
                  <Td py="4" px="6">
                    {cliente.notas}
                  </Td>
                  <Td py="4" px="6">
                    {cliente.comprando ? "Sí" : "No"}
                  </Td>
                  <Td py="4" px="6">
                    <Button
                      bg="blue.500"
                      color="white"
                      px="4"
                      py="2"
                      rounded="md"
                      _hover={{ bg: "blue.600" }}
                    >
                      Ver Detalles
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </Flex>
  );
}
