import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <p className="text-lg font-bold">AWQASISA</p>
          <p className="mt-2">Tu destino para joyas exquisitas.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Enlaces rápidos</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/faq" className="hover:underline">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/politica-privacidad" className="hover:underline">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link to="/terminos-servicio" className="hover:underline">
                Términos de Servicio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
