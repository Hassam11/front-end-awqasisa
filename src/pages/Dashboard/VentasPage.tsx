import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import {
  Button,
  Flex,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import ventasData from "../../ventas.json";
import DashboardNavigation from "../../components/DashboardNavigation";
import "chart.js/auto";

export default function VentasPage() {
  const [ventas, setVentas] = useState(ventasData);

  // Función para calcular el total de ventas
  const calcularTotalVentas = () => {
    return ventas.reduce((total, venta) => total + venta.total, 0);
  };

  // Función para calcular las ganancias del mes actual
  const calcularGananciasMes = () => {
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth() + 1;
    const añoActual = fechaActual.getFullYear();
    return ventas.reduce((total, venta) => {
      const fechaVenta = new Date(venta.fechaVenta);
      const mesVenta = fechaVenta.getMonth() + 1;
      const añoVenta = fechaVenta.getFullYear();
      if (mesVenta === mesActual && añoVenta === añoActual) {
        return total + venta.total;
      } else {
        return total;
      }
    }, 0);
  };

  // Función para determinar si los clientes subieron o bajaron en el mes actual
  const calcularCambioClientes = () => {
    return Math.random() > 0.5 ? "↑" : "↓";
  };

  // Datos y opciones para el gráfico de línea
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
    datasets: [
      {
        label: "Ventas por Mes",
        data: [41, 38, 38, 36, 40, 50, 57],
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <DashboardNavigation />
      {/* Content Area */}
      <div className="flex-1 p-10 ml-64">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-semibold mb-8">
            Estadísticas de Ventas
          </h1>
          {/* Estadísticas de ventas */}
          <StatGroup gap={10}>
            <Stat
              boxShadow="xs"
              p="6"
              rounded="md"
              border="1px"
              borderColor="gray.200"
            >
              <StatLabel>Ventas Totales</StatLabel>
              <StatNumber>S/ {calcularTotalVentas()}</StatNumber>
            </Stat>
            <Stat
              boxShadow="xs"
              p="6"
              rounded="md"
              border="1px"
              borderColor="gray.200"
            >
              <StatLabel>Ganancias del Mes</StatLabel>
              <StatNumber>S/ {calcularGananciasMes()}</StatNumber>
            </Stat>
            <Stat
              boxShadow="xs"
              p="6"
              rounded="md"
              border="1px"
              borderColor="gray.200"
            >
              <StatLabel>Cambio de Clientes</StatLabel>
              <StatNumber>{calcularCambioClientes()} 2</StatNumber>
            </Stat>
          </StatGroup>
        </div>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} p={6}>
          <GridItem colSpan={2}>
            <Box
              boxShadow="xs"
              p="6"
              rounded="md"
              border="1px"
              borderColor="gray.200"
            >
              <Line data={data} options={options} />
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box
              boxShadow="xs"
              p="6"
              rounded="md"
              border="1px"
              borderColor="gray.200"
            >
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Análisis de Clientes
              </Text>
              <Text>Clientes Nuevos: 50</Text>
              <Text>Clientes Recurrentes: 17</Text>
              <Text fontSize="xl" fontWeight="bold" mb={4} mt={6}>
                Productos Más Vendidos
              </Text>
              <Text>1. Hoops Aisha - 30 unidades</Text>
              <Text>2. Argollas Julieta- 18 unidades</Text>
              <Text>3. Argollas Inti - 13 unidades</Text>
            </Box>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}
