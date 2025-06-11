import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

type Product = {
  id: number;
  nombre: string;
  precio: string;
  imagen_url?: string | null;
  categoria?: string;
};

function Promociones() {
  const [impresoras, setImpresoras] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImpresoras = async () => {
      try {
        const productos = await getProducts();
        // Filtra solo las impresoras (ajusta el campo según tu backend)
        const impresorasFiltradas = productos.filter(
          (p: Product) =>
            p.categoria && p.categoria.toLowerCase().includes("impresora")
        );
        setImpresoras(impresorasFiltradas);
      } finally {
        setLoading(false);
      }
    };
    fetchImpresoras();
  }, []);

  const aplicarDescuento = (precio: string, descuento: number) => {
    const precioNum = parseFloat(precio);
    return (precioNum * (1 - descuento / 100)).toFixed(2);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#009fe3" }}>
        Promociones
      </h1>
      {loading && <p className="text-center">Cargando promociones...</p>}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {impresoras.map((producto) => (
          <div className="col" key={producto.id}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={
                  producto.imagen_url ||
                  "https://via.placeholder.com/200x150?text=Impresora"
                }
                className="card-img-top"
                alt={producto.nombre}
                style={{ objectFit: "cover", height: 220 }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold" style={{ color: "#009fe3" }}>
                  {producto.nombre}
                </h5>
                <p className="card-text mb-2">
                  <span className="text-decoration-line-through text-danger me-2">
                    {parseFloat(producto.precio).toFixed(2)} €
                  </span>
                  <span className="fw-bold text-success">
                    {aplicarDescuento(producto.precio, 20)} € (-20%)
                  </span>
                </p>
                <p className="card-text">
                  ¡Oferta especial en impresoras solo este mes!
                </p>
              </div>
            </div>
          </div>
        ))}
        {impresoras.length === 0 && !loading && (
          <div className="col">
            <div className="alert alert-info text-center">
              No hay impresoras en promoción actualmente.
            </div>
          </div>
        )}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img
              src="https://www.mhermida.com/Files/images/promociones/promocion1.jpg"
              className="card-img-top"
              alt="Promoción Inventada"
              style={{ objectFit: "cover", height: 220 }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold" style={{ color: "#009fe3" }}>
                ¡Impresora HP LaserJet Pro en oferta!
              </h5>
              <p className="card-text mb-2">
                <span className="text-decoration-line-through text-danger me-2">
                  199,00 €
                </span>
                <span className="fw-bold text-success">159,00 € (-20%)</span>
              </p>
              <p className="card-text">
                Llévate la impresora HP LaserJet Pro con un 20% de descuento
                solo este mes.
                <br />
                ¡Aprovecha esta oportunidad exclusiva!
              </p>
              <a
                href="#"
                className="btn btn-primary disabled"
                tabIndex={-1}
                aria-disabled="true"
              >
                Solo muestra (demo)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promociones;
