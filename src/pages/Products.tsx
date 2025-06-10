import { useEffect, useState } from "react";
import { getProducts, getCart, addToCartAPI, removeFromCartAPI } from "../services/api";

type Product = {
  id: number;
  nombre: string;
  precio: string;
  imagen_url?: string | null;
};

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);

  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart(token);
        setCart(data.productos || data); // Ajusta según la respuesta real
      } catch (err) {
        setError("Error al cargar el carrito");
      }
    };
    if (token) fetchCart();
  }, [token]);

  const addToCart = async (product: Product) => {
    try {
      await addToCartAPI(product.id, 1, token); // Añade 1 unidad
      const data = await getCart(token);
      setCart(data.productos || data);
    } catch (err) {
      setError("No se pudo añadir al carrito");
      console.error(err);
    }
  };

  const removeFromCart = async (product: Product) => {
    try {
      await removeFromCartAPI(product.id, token);
      const data = await getCart(token);
      setCart(data.productos || data);
    } catch (err) {
      setError("No se pudo quitar del carrito");
      console.error(err);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Productos</h1>
      <div className="mb-4 text-end">
        <button
          className="btn btn-outline-primary"
          onClick={() => setShowCart(true)}
        >
          🛒 Carrito ({cart.length})
        </button>
      </div>
      {loading && <p className="text-center">Cargando productos...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={
                  product.imagen_url ||
                  "https://via.placeholder.com/200x150?text=Producto"
                }
                className="card-img-top"
                alt={product.nombre}
                style={{ objectFit: "cover", height: "180px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text fw-bold mb-4">
                  {parseFloat(product.precio).toFixed(2)} €
                </p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => addToCart(product)}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal del carrito */}
      {showCart && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Carrito</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowCart(false)}
                ></button>
              </div>
              <div className="modal-body">
                {cart.length === 0 ? (
                  <p>El carrito está vacío.</p>
                ) : (
                  <ul className="list-group">
                    {cart.map((item: any, idx: number) => (
                      <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={idx}
                      >
                        {item.nombre} - {parseFloat(item.precio).toFixed(2)} € x{" "}
                        {item.cantidad || 1}
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => removeFromCart(item)}
                        >
                          Quitar
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowCart(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
