import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Contenido principal */}
      <main className="container my-5 flex-grow-1">
        <h1 className="mb-4 text-center">Mhermida</h1>
        <p className="text-center">
          Aquí encontrarás los mejores productos al mejor precio.
        </p>

        {/* Carrusel de fotos */}
        <div
          id="carouselExample"
          className="carousel slide mb-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded shadow">
            <div className="carousel-item active">
              <img
                src="https://www.mhermida.com/Files/images/banners/banner_productos.gif"
                className="d-block w-100"
                alt="Foto 1"
                style={{ height: 350, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Sección Quiénes somos con diseño */}
        <section
          className="mb-5 py-5 px-3"
          style={{
            background: "linear-gradient(135deg, #f8fafc 60%, #e3f2fd 100%)",
            borderRadius: "1.5rem",
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07)",
          }}
        >
          <h2
            className="text-center mb-4 fw-bold"
            style={{
              fontSize: "2.5rem",
              letterSpacing: "1px",
              color: "#009fe3",
              textShadow: "0 2px 8px #b2ebf2",
            }}
          >
            ¿Quiénes somos?
          </h2>
          <hr
            className="mx-auto mb-5"
            style={{ width: 80, borderTop: "3px solid #009fe3", opacity: 1 }}
          />
          <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
            <div className="col">
              <div className="d-flex flex-column align-items-center bg-white rounded shadow-sm p-4 h-100 hover-shadow">
                <i
                  className="bi bi-trophy mb-2"
                  style={{
                    fontSize: 48,
                    color: "#009fe3",
                    transition: "transform 0.2s",
                  }}
                ></i>
                <h5 className="mt-3 fw-bold">¿Quiénes somos?</h5>
                <p>
                  Empresa familiar con más de 35 años de experiencia reconocida
                  como especialista en impresoras y almacenamiento.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-items-center bg-white rounded shadow-sm p-4 h-100 hover-shadow">
                <i
                  className="bi bi-people mb-2"
                  style={{
                    fontSize: 48,
                    color: "#009fe3",
                    transition: "transform 0.2s",
                  }}
                ></i>
                <h5 className="mt-3 fw-bold">Nuestros valores</h5>
                <p>
                  Importancia de los valores de <b>HERMIDA</b>. Trabajo,
                  dedicación, profesionalidad, flexibilidad, compromiso,
                  atención al cliente.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-items-center bg-white rounded shadow-sm p-4 h-100 hover-shadow">
                <i
                  className="bi bi-diagram-3 mb-2"
                  style={{
                    fontSize: 48,
                    color: "#009fe3",
                    transition: "transform 0.2s",
                  }}
                ></i>
                <h5 className="mt-3 fw-bold">Negocios principales</h5>
                <p>
                  Suministro de consumibles de impresoras, productos de
                  microinformática y oficina.
                  <br />
                  <b>Transformación Digital:</b> soluciones avanzadas de
                  impresión y gestión documental.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-items-center bg-white rounded shadow-sm p-4 h-100 hover-shadow">
                <i
                  className="bi bi-globe2 mb-2"
                  style={{
                    fontSize: 48,
                    color: "#009fe3",
                    transition: "transform 0.2s",
                  }}
                ></i>
                <h5 className="mt-3 fw-bold">Productos</h5>
                <p>
                  15.000 referencias en catálogo, de las cuales, 6.000
                  habitualmente en existencias.
                  <br />
                  Suministro en 24 horas.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-items-center bg-white rounded shadow-sm p-4 h-100 hover-shadow">
                <i
                  className="bi bi-bar-chart-line mb-2"
                  style={{
                    fontSize: 48,
                    color: "#009fe3",
                    transition: "transform 0.2s",
                  }}
                ></i>
                <h5 className="mt-3 fw-bold">Cifra de facturación</h5>
                <p>
                  40 millones de € (2023).
                  <br />
                  Más de 2.000 clientes activos.
                  <br />
                  Más de 14.000 entregas al mes.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-items-center bg-white rounded shadow-sm p-4 h-100 hover-shadow">
                <i
                  className="bi bi-cart4 mb-2"
                  style={{
                    fontSize: 48,
                    color: "#009fe3",
                    transition: "transform 0.2s",
                  }}
                ></i>
                <h5 className="mt-3 fw-bold">Venta a través de</h5>
                <p>
                  Distribuidores de venta a empresas • Telemarketing • Catálogo
                  • E-commerce • Tiendas (retailers) • Venta contractual • Pago
                  por Uso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mapa de Google Maps */}
        <section>
          <h2 className="text-center mb-3 fw-bold" style={{ color: "#009fe3" }}>
            Dónde estamos
          </h2>
          <div className="d-flex justify-content-center">
            <div
              className="shadow rounded"
              style={{
                overflow: "hidden",
                border: "3px solid #009fe3",
                maxWidth: 700,
                width: "100%",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.532557340901!2d-3.8764082241765707!3d40.34237627145163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418464632eeef1%3A0xe0e2e7b270f9edd1!2sM.HERMIDA%20INFORMATICA%2C%20S.L.!5e1!3m2!1ses!2ses!4v1749592170713!5m2!1ses!2ses"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación oficinas"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
