import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    // Aquí puedes hacer la petición a tu backend si lo necesitas
    if (!name || !email || !message) {
      setError("Por favor, rellena todos los campos.");
      return;
    }

    // Simulación de envío correcto
    setSuccess("¡Mensaje enviado correctamente!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container my-5" style={{ maxWidth: 500 }}>
      <h2 className="mb-4 text-center">Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
          <textarea
            className="form-control"
            placeholder="Mensaje"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Enviar
        </button>
        {success && <p className="text-success mt-3">{success}</p>}
        {error && <p className="text-danger mt-3">{error}</p>}
      </form>
    </div>
  );
}

export default Contact;
