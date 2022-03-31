import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { colors } from "../../ui-config/colors";
import { useAppContext } from "../../context/Provider";
// import Logout from "../../components/Logout/Logout";
import Jpeg1 from "../../images/latina.png";
import Jpeg2 from "../../images/liberty.png";
import Jpeg3 from "../../images/visaaplication1.jpg";

const WelcomePage = () => {
  const { state: context } = useAppContext();
  const { updateConcessionary } = useAppContext();
  const history = useHistory();
  const url = new URL(window.location.href);
  var conId = url.searchParams.get("concessionaryId");
  let concessionaryId;
  conId
    ? (concessionaryId = conId)
    : (concessionaryId = context.concessionary.concessionary);

  if (!concessionaryId) {
    alert("You must login or come from the service provider page");
    history.push("/concessionaries/Concessionaries");
  }

  if (context.intake.role === "adm") {
    history.push("/screens/AdminPage");
  }

  useEffect(() => {
    console.log(
      "WelcomePage - ConcessionaryID:",
      concessionaryId,
      "|",
      context?.concessionary?.concessionary
    );
    if (
      concessionaryId !== "undefined" ||
      context?.concessionary?.concessionary !== concessionaryId
    )
      updateConcessionary({
        ...context,
        concessionary: concessionaryId,
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-2 d-none d-md-block d-lg-block d-xl-block red-input"
          style={{ padding: 0 }}
        >
          <img
            src={Jpeg1}
            alt="Somos Latinos"
            className="img-fluid d-none d-md-block d-lg-block d-xl-block red-input"
            style={{ padding: 0, width: 225, height: 275 }}
          />
          <img
            src={Jpeg3}
            alt="Visa Application"
            className="img-fluid d-none d-md-block d-lg-block d-xl-block red-input"
            style={{ width: 225, height: 150 }}
          />
        </div>
        <div
          className="col-2 d-none d-md-block d-lg-block d-xl-block red-input"
          style={{ padding: 0 }}
        >
          <img
            src={Jpeg2}
            alt="Liberty Statue"
            className="img-fluid d-none d-md-block d-lg-block d-xl-block red-input"
            style={{ padding: 0, width: 175, height: 425 }}
          />
        </div>
        <div className="col">
          <h2 style={styles.title}>
            Bienvenido a su <br />{" "}
            <strong>HERRAMIENTA DE IMMIGRACIÓN USA</strong>
          </h2>
          <div className="">
            <p style={styles.paragraph}>
              Esta herramienta es un servicio de trámites de migración en los
              Estados Unidos. Disponible 24 horas al dia, en linea y que
              facilita a los hispanos los trámites migratorios en los Estados
              Unidos de Norteamerica. Nuestros servicios son siempre entregados
              con responsabilidad, a tiempo y a precios asequibles para nuestra
              comunidad.
            </p>
            <p style={styles.paragraph}>
              Ofrece cualquier servicio de immigración para migrantes a los
              Estados Unidos de America. Para iniciar el proceso, es necesario
              registrarse, llenando un formulario. El formulario es el primer
              paso que debe tomar para que podamos ayudarle a conseguir sus
              objetivos migratorios.
            </p>
          </div>
          <div className="row d-flex">
            <Link
              to="/screens/Registration"
              className="btn btn-primary"
              style={styles.navigate}
            >
              REGISTRARSE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  title: {
    marginTop: 15,
    borderLeft: "5px solid red",
    paddingTop: 5,
    paddingLeft: 10,
    textAlign: "left",
    color: colors.blue,
    textShadow: "0 0 2px white",
  },

  paragraph: {
    fontSize: 15,
    padding: 15,
    margin: 0,
    color: colors.gray,
    textShadow: "0 0 1px black",
    textAlign: "left",
  },

  navigate: {
    fontSize: 14,
    paddingBottom: 30,
    marginLeft: 25,
    margin: 30,
    width: 140,
    height: 30,
  },
  navigate2: {
    verticalAlign: 10,
    fontSize: 12,
    paddingBottom: 15,
    paddingTop: 2,
    width: 80,
    height: 25,
  },
};
export default WelcomePage;
