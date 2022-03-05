const Concessionaries = () => {
  const navigateToLogin = () => {
    window.location.replace("/screens/LoginPage");
  };

  const navigateToHome = () => {
    window.location.replace("/screens/welcome");
  };

  return (
    <div>
      <h4
        style={{
          padding: "1rem",
          margin: 10,
          color: "red",
        }}
      >
        Preciado usuario de los servicios de migración, HA OCURRIDO UN ERROR y
        debe entrar a la aplicación desde la página de quien le presta este
        servicio.{" "}
        <span className="row">
          <button
            style={{ fontSize: 15, padding: 15, margin: 10 }}
            className="btn btn-danger font-weight-light"
            type="button"
            onClick={navigateToLogin}
          >
            LOG IN
          </button>
          <button
            style={{ fontSize: 15, padding: 15, margin: 10 }}
            className="btn btn-success font-weight-light"
            type="button"
            onClick={navigateToHome}
          >
            GO TO HOME
          </button>
        </span>
      </h4>
    </div>
  );
};

export default Concessionaries;
