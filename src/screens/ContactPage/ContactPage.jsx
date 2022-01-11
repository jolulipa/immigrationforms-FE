const ContactPage = () => {
  return (
    <div
      className="container-fluid"
      style={{
        padding: 10,
        overflow: "auto",
        width: "100vh",
        height: 500,
      }}
    >
      <h2
        style={{
          padding: 10,
        }}
      >
        Bienvenido a nuestra página de <strong>CONTACTO:</strong>
      </h2>
      <h5
        style={{
          padding: "1rem",
        }}
      >
        Para contactarnos favor enviar correo electrónico a la siguiente
        dirección de correo electrónico:{" "}
        <span className="text-danger">e-mail: {"john@gmail.com"}</span>
      </h5>
    </div>
  );
};

export default ContactPage;
