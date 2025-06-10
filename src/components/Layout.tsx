import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes limpiar el token o datos del usuario si los usas
    // localStorage.removeItem('token');
    navigate("/");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Mhermida
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/home">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contacto
                </a>
              </li>
            </ul>
            {/* Icono de usuario y botón de cerrar sesión */}
            <div className="d-flex align-items-center ms-3">
              <span
                className="text-white me-2"
                title="Usuario"
                style={{ cursor: "pointer" }}
              >
                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "1.8rem" }}
                  onClick={() => navigate("/profile")}
                ></i>
              </span>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido de la página */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3 mt-auto">
        &copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos
        reservados.
      </footer>
    </div>
  );
}

export default Layout;
