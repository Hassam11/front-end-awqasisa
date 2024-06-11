import { useState } from "react";
import { FaCcVisa, FaCcAmex, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import Navegation from "../components/Navegation";
import DATA from "../productos.json";
import { Link } from "react-router-dom";
import { Input } from "@chakra-ui/react";

export default function CheckoutPage() {
  const hoops = DATA[0].Hoops[0];
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  return (
    <>
      <Navegation />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6">Pagar</h2>

          <div className="mb-4">
            <label className="block text-base font-medium text-gray-700 mb-2">
              Dirección de Envio
            </label>
            <Input
              placeholder="Ingrese dirección precisa Ejem: Calle - Av - Distrito"
              type="text"
            />
          </div>

          <div className="mb-6">
            <label className="block text-base font-medium text-gray-700 mb-2">
              Método de pago
            </label>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment-method"
                  id="visa"
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  onChange={() => setSelectedPaymentMethod("visa")}
                />
                <label
                  htmlFor="visa"
                  className="ml-3 flex items-center text-base font-medium text-gray-700"
                >
                  <FaCcVisa className="mr-2" /> Visa **** 0095
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment-method"
                  id="credit-card"
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  onChange={() => setSelectedPaymentMethod("credit-card")}
                />
                <label
                  htmlFor="credit-card"
                  className="ml-3 flex items-center text-base font-medium text-gray-700"
                >
                  <FaCcAmex className="mr-2" /> Tarjeta de crédito/débito
                  <FaCcVisa className="mx-1" />
                  <FaCcMastercard className="mx-1" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment-method"
                  id="paypal"
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  onChange={() => setSelectedPaymentMethod("paypal")}
                />
                <label
                  htmlFor="paypal"
                  className="ml-3 flex items-center text-base font-medium text-gray-700"
                >
                  <FaCcPaypal className="mr-2" /> PayPal
                </label>
              </div>
            </div>
          </div>

          {selectedPaymentMethod === "visa" && (
            <div className="mb-6">
              <label className="block text-base font-medium text-gray-700 mb-2">
                Información de la tarjeta
              </label>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Número de tarjeta"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                />
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="block w-1/2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="block w-1/2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                  />
                </div>
              </div>
            </div>
          )}

          {selectedPaymentMethod === "credit-card" && (
            <div className="mb-6">
              <label className="block text-base font-medium text-gray-700 mb-2">
                Información de la tarjeta
              </label>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Número de tarjeta"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                />
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="block w-1/2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="block w-1/2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                  />
                </div>
              </div>
            </div>
          )}

          {selectedPaymentMethod === "paypal" && (
            <div className="mb-6">
              <label className="block text-base font-medium text-gray-700 mb-2">
                PayPal Email
              </label>
              <input
                type="email"
                placeholder="Email de PayPal"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
              />
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Detalles del pedido</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-medium text-gray-700">
                {hoops.product}
              </span>
              <span className="text-base font-medium text-gray-700">
                S/. {hoops.precio}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Resumen</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-medium text-gray-700">
                Precio original:
              </span>
              <span className="text-base font-medium text-gray-700">
                S/ {hoops.precio}
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-medium text-gray-700">
                Descuentos:
              </span>
              <span className="text-base font-medium text-gray-700">
                - S/ 10,00
              </span>
            </div>
            <div className="flex items-center justify-between text-xl font-bold">
              <span>Total:</span>
              <span>S/ 50.28</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
              Completar pago
            </button>
            <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition ml-4">
              <Link to="/">Cancelar producto</Link>
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Garantía de reembolso de 30 días
          </p>
        </div>
      </div>
    </>
  );
}
