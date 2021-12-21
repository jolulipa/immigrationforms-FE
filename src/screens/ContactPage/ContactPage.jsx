const ContactPage = () => {
  return (
    <div>
      <h2
        style={{
          padding: 10,
        }}
      >
        Bienvenido a su <strong>MÓDULO DE CONTACTO</strong>
      </h2>
      <h5
        style={{
          padding: "1rem",
        }}
      >
        Para contactarnos favor enviar correo electrónico a la siguiente
        dirección de{" "}
        <span className="badge badge-secondary">
          e-mail: {"john@gmail.com"}
        </span>
      </h5>
    </div>
  );
};

export default ContactPage;
