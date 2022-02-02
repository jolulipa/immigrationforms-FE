const Concessionary = () => {
  const navigateToLogin = () => {
    window.location.replace("/concessionaries/Concessionary");
  };

  const navigateToHome = () => {
    window.location.replace("/screens/welcome");
  };

  return (
    <div>
      <h5
        style={{
          padding: "1rem",
        }}
      >
        Preciado usuario de los servicios de migración, debe entrar a la
        aplicación desde la página de quien le presta este servicio.{" "}
        <span className="">
          <button
            style={{ fontSize: 15, padding: 15, margin: 10 }}
            className="btn btn-danger font-weight-light d-none d-md-block d-lg-block d-xl-block"
            type="button"
            onClick={navigateToLogin}
          >
            LOG IN
          </button>
          <button
            style={{ fontSize: 15, padding: 15, margin: 10 }}
            className="btn btn-success font-weight-light d-none d-md-block d-lg-block d-xl-block"
            type="button"
            onClick={navigateToHome}
          >
            GO TO HOME
          </button>
        </span>
      </h5>
    </div>
  );
};

export default Concessionary;
