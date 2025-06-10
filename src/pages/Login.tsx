import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    console.log("Login body:", { email: cleanEmail, password: cleanPassword });

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: cleanEmail, password: cleanPassword }),
      });

      const data = await response.json();
      console.log("Respuesta del backend:", data);

      // CAMBIA ESTA LÍNEA: Ahora comprueba data.access_token en lugar de data.token
      if (data.access_token) {
        localStorage.setItem("token", data.access_token); // Guarda el access_token
        navigate("/home");
      } else {
        setError(data.message || "Credenciales incorrectas");
      }
    } catch (err) {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 bg-light"
      style={{ minHeight: "100vh" }}
    >
      <div className="card shadow p-4" style={{ maxWidth: 400, width: "100%" }}>
        <div className="mb-4 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
            alt="Logo"
            width={64}
            className="mb-3"
          />
          <h2 className="mb-0">Iniciar sesión</h2>
          <p className="text-muted">Bienvenido a la tienda</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Entrar"}
          </button>
          {error && <p className="text-danger mt-3">{error}</p>}
          <div className="register-link mt-3 text-center">
            <Link to="/register" className="text-decoration-none">
              ¿No tienes cuenta?{" "}
              <span className="text-primary">Regístrate aquí</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
