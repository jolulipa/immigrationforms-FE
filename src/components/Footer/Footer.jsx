import { Link } from "react-router-dom";
import "./styles.css";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineGlobal,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer ">
      <div
        style={{
          paddingTop: "0px",
          paddingBottom: "15px",
          borderBottom: ".5px solid rgb(107, 153, 245)",
        }}
      >
        <span
          className="col-1 align-middle"
          style={{
            textDecoration: "none",
            color: "white",
            marginLeft: "15px",
          }}
        >
          {" "}
          SÍGUENOS:
        </span>
        <Link className="col-2">
          {
            <AiOutlineInstagram
              style={{
                fontSize: 18,
              }}
            />
          }
        </Link>
        <Link className="col-2">
          {
            <AiOutlineTwitter
              style={{
                fontSize: 18,
              }}
            />
          }
        </Link>
        <Link className="col-2">
          {
            <AiOutlineFacebook
              style={{
                fontSize: 18,
              }}
            />
          }
        </Link>
        <Link className="col-2">
          {
            <AiOutlineGlobal
              style={{
                fontSize: 18,
              }}
            />
          }
        </Link>
      </div>
      <div className="row">
        <div className="col-7">
          Copyright &copy; The Immigration Times, 2021. Todos los derechos
          reservados
        </div>
        {
          <Link
            className="col-1"
            style={{
              color: "white",
            }}
            to="/screens/WelcomePage"
          >
            HOME
          </Link>
        }
        {
          <Link
            className="col-1"
            style={{
              color: "white",
            }}
            to="/screens/contact"
          >
            CONTACT
          </Link>
        }
        {
          <Link
            className="col-1"
            style={{
              color: "white",
            }}
            to="/screens/LandingPage"
          >
            SERVICES
          </Link>
        }
      </div>
    </div>
  );
};

export default Footer;
