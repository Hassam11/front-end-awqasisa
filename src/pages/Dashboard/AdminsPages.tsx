import { useEffect, useState } from "react";
import TRABAJADORES from "../../trabajadores.json"; // Ajusta la ruta según la ubicación real de tu archivo JSON
import DashboardNavigation from "../../components/DashboardNavigation";
import { Button, Grid, Box, Text, Image } from "@chakra-ui/react"; // Importamos componentes necesarios de Chakra UI

interface Trabajador {
  nombres: string;
  apellidos: string;
  correo: string;
  celular: string;
  fecha_de_cumpleaños: string;
  imrAvatar: string;
  ultima_entrada_al_sistema: string;
  rol: string;
}

export default function AdministradoresPage() {
  const [administradores, setAdministradores] = useState<Trabajador[]>([]);

  useEffect(() => {
    // Cargar los administradores desde el archivo JSON
    const data: Trabajador[] = TRABAJADORES.map((trabajador) => ({
      nombres: trabajador.nombres,
      apellidos: trabajador.apellidos,
      correo: trabajador.correo,
      celular: trabajador.celular,
      fecha_de_cumpleaños: trabajador.fecha_de_cumpleaños,
      imrAvatar: trabajador.imrAvatar,
      ultima_entrada_al_sistema: trabajador.ultima_entrada_al_sistema,
      rol: trabajador.rol,
    }));

    setAdministradores(data); // Mostrar todos los administradores sin limitación
  }, []);

  return (
    <div>
      <DashboardNavigation />
      <div className="w-2/3 m-auto">
        <h1 className="pt-5 text-3xl font-semibold mb-8">Administradores</h1>
        <Grid
          templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          gap={8}
          width="2/3"
          margin="auto"
          p={10}
        >
          {administradores.map((admin, index) => (
            <Box
              key={index}
              bg="white"
              rounded="lg"
              shadow="xl"
              p={6}
              textAlign="left"
              border="1px solid #E2E8F0" // Agregamos el borde aquí
            >
              <Image
                src={admin.imrAvatar}
                alt={`${admin.nombres} ${admin.apellidos}`}
                mb={4}
                w="40"
                h="40"
                objectFit="cover"
                borderRadius="full"
                mx="auto"
              />
              <Text fontSize="xl" fontWeight="semibold" mb={2}>
                {admin.nombres} {admin.apellidos}
              </Text>
              <Text color="gray.600" mb={2}>
                <strong>Correo:</strong> {admin.correo}
              </Text>
              <Text color="gray.600" mb={2}>
                <strong>Celular:</strong> {admin.celular}
              </Text>
              <Text color="gray.600" mb={2}>
                <strong>Fecha de cumpleaños:</strong>{" "}
                {admin.fecha_de_cumpleaños}
              </Text>
              <Text color="gray.600" mb={2}>
                <strong>Última entrada:</strong>{" "}
                {admin.ultima_entrada_al_sistema}
              </Text>
              <Text color="gray.600" mb={2}>
                <strong>Rol:</strong> {admin.rol}
              </Text>
            </Box>
          ))}
          <Box
            bg="white"
            rounded="lg"
            shadow="md"
            p={6}
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid #E2E8F0" // Borde para el botón de agregar administrador
          >
            <Button colorScheme="blue">Agregar Administrador</Button>
          </Box>
        </Grid>
      </div>
    </div>
  );
}
