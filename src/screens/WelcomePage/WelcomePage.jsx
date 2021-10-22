import { Link } from "react-router-dom";
import { useEffect } from "react";
import { colors } from "../../ui-config/colors";
import { useAppContext } from "../../context/Provider";
import Jpeg1 from "../../images/Welcome.png";
// import Jpeg2 from "../../images/liberty.png";

const WelcomePage = () => {
  const { state: context } = useAppContext();
  const { updateConcessionary } = useAppContext();
  const url = new URL(window.location.href);
  var concessionaryId = url.searchParams.get("concessionaryId");

  if (context.intake.role === "adm") {
    window.location.replace("/screens/AdminPage");
  }

  useEffect(() => {
    if (
      concessionaryId !== "undefined" &&
      context?.concessionary?.concessionary !== concessionaryId
    )
      updateConcessionary({
        ...context.concessionary,
        concessionary: concessionaryId,
      });
    console.log("Concessionary ID:", concessionaryId);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container mr-1">
      <div className="row">
        <img src={Jpeg1} alt="Somos Latinos" className="col-6" />
        <div className="col-6">
          <h2 style={styles.title}>
            Bienvenido a <br />{" "}
            <strong>SU HERRAMIENTA DE IMMIGRACION USA</strong>
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
              Esta herramienta ofrece cualquier servicio de immigración para
              migrantes a los Estados Unidos de America. Para iniciar el proceso
              con la herramienta, es necesario registrarse, llenando un
              formulario. Este formulario es el primer paso para iniciar los
              procedimientos necesarios para ayudarle a conseguir sus objetivos
              migratorios.
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
    marginTop: 25,
    borderLeft: "5px solid red",
    paddingTop: 5,
    paddingLeft: 10,
    textAlign: "left",
    color: colors.brown,
  },

  paragraph: {
    textAlign: "justify",
    fontSize: 15,
    padding: 15,
    margin: 0,
    color: colors.brown,
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
