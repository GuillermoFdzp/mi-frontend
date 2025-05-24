function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Mi Tienda
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
                <a className="nav-link active" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="container my-5">
        <h1 className="mb-4 text-center">Bienvenido a Mi Tienda</h1>
        <p className="text-center">
          Aquí encontrarás los mejores productos al mejor precio.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3 mt-auto">
        &copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos
        reservados.
      </footer>
    </>
  );
}

export default Home;
