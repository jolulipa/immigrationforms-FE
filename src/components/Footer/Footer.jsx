import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineGlobal,
  AiTwotoneMail,
  AiTwotonePhone,
  AiTwotoneEnvironment,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        marginTop: 50,
        marginBottom: 0,
      }}
    >
      <div style={styles.line}>
        <span
          className=""
          style={{
            color: "white",
          }}
        >
          {" "}
          SÍGUENOS:
        </span>
        <Link className="">{<AiOutlineInstagram style={styles.icon} />}</Link>
        <Link className="">{<AiOutlineTwitter style={styles.icon} />}</Link>
        <Link className="">{<AiOutlineFacebook style={styles.icon} />}</Link>
        <Link className="">{<AiOutlineGlobal style={styles.icon} />}</Link>
        <span
          className="col-1"
          style={{
            justifyContent: "space-between",
          }}
        >
          {" "}
        </span>
        <Link className="">{<AiTwotoneEnvironment style={styles.icon} />}</Link>
        <span className="" style={styles.text}>
          {" "}
          28 St. Arroyo Hondo, Santo Domingo, DR
        </span>
        <Link className="">{<AiTwotonePhone style={styles.icon} />}</Link>
        <span className="" style={styles.text}>
          {" "}
          (212)222-3333
        </span>
        <Link className="">{<AiTwotoneMail style={styles.icon} />}</Link>
        <span className="" style={styles.text}>
          {" "}
          info@immigrationtime.com
        </span>
      </div>
      <div style={styles.line2}>
        Copyright &copy; The Immigration Times, 2021. Todos los derechos
        reservados
        {
          <Link
            className=""
            style={
              (styles.link,
              {
                marginLeft: "25px",
              })
            }
            to="/screens/WelcomePage"
          >
            HOME
          </Link>
        }
        {
          <Link className="" style={styles.link} to="/screens/contact">
            CONTACT
          </Link>
        }
        {
          <Link className="" style={styles.link} to="/screens/LandingPage">
            SERVICES
          </Link>
        }
      </div>
    </div>
  );
};
const styles = {
  line: {
    display: "flex",
    paddingTop: "5px",
    paddingBottom: "20px",
    borderBottom: ".5px solid rgb(107, 153, 245)",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  line2: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "20px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    textAlign: "right",
  },
  icon: {
    fontSize: 18,
    textDecoration: "none",
    color: "white",
    marginLeft: "15px",
  },
  text: {
    textDecoration: "none",
    color: "white",
    marginLeft: "5px",
  },
};
export default Footer;
