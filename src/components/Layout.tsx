import { Outlet, useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Importa la imagen como un módulo

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
      {/* Cambiamos bg-primary por bg-light y navbar-dark por navbar-light */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom sticky-top">
        <div className="container">
          {/* Usamos Link en lugar de <a> para navegación interna */}
          <Link
            className="navbar-brand d-flex align-items-center gap-2"
            to="/home"
          >
            <img
              src={logo} // <-- Usa la variable importada aquí
              alt="Logo Mhermida"
              style={{ height: 40, width: "auto" }}
            />
          </Link>
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
              {/* Cambiamos text-white a text-dark o quitamos la clase para que Bootstrap la gestione */}
              <li className="nav-item">
                <Link className="nav-link active text-dark" to="/home">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/products">
                  Productos
                </Link>
              </li>
              {/* Dropdown solo visible en pantallas pequeñas */}
              <li className="nav-item dropdown d-lg-none">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Más
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/promociones">
                      Promociones
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Enlaces normales para pantallas grandes */}
              <li className="nav-item d-none d-lg-block">
                <Link className="nav-link text-dark" to="/contact">
                  Contacto
                </Link>
              </li>
              <li className="nav-item d-none d-lg-block">
                <Link className="nav-link text-dark" to="/promociones">
                  Promociones
                </Link>
              </li>
            </ul>
            {/* Icono de usuario y botón de cerrar sesión */}
            <div className="d-flex align-items-center ms-3">
              {/* Cambiamos text-white a text-dark para que el ícono sea visible */}
              <span
                className="text-dark me-2" // Cambiado de text-white a text-dark
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
                className="btn btn-outline-primary btn-sm" // Cambiado a outline-primary para contraste
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

      {/* Footer (lo dejamos como está o también puedes cambiarlo si quieres que haga juego) */}
      <footer className="bg-primary text-white text-center py-4 mt-auto">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo y nombre */}
            <div className="col-md-4 mb-3 mb-md-0">
              <Link to="/" className="navbar-brand text-white fw-bold fs-4">
                Mhermida
              </Link>
              <div className="small mt-2">
                &copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos
                reservados.
              </div>
            </div>
            {/* Enlaces rápidos */}
            <div className="col-md-4 mb-3 mb-md-0">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="/home" className="text-white text-decoration-none">
                    Inicio
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="/products"
                    className="text-white text-decoration-none"
                  >
                    Productos
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="/contact"
                    className="text-white text-decoration-none"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            {/* Redes sociales y contacto */}
            <div className="col-md-4">
              <div className="mb-2">
                <a
                  href="mailto:info@mhermida.com"
                  className="text-white me-3"
                  title="Email"
                >
                  <i className="bi bi-envelope-fill fs-5"></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <i className="bi bi-twitter fs-5"></i>
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <i className="bi bi-facebook fs-5"></i>
                </a>
              </div>
              <div className="small">
                <i className="bi bi-geo-alt-fill me-1"></i>
                Dirección: Julio Cervera 20. Parque Tecnológico Móstoles. 28935
                Madrid (España).
              </div>
              <div className="small">
                <i className="bi bi-telephone-fill me-1"></i>
                Tel: +34 916 362 900
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
