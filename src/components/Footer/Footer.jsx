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
      <div
        style={{
          display: "flex",
          paddingTop: "5px",
          paddingBottom: "20px",
          borderBottom: ".5px solid rgb(107, 153, 245)",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <span
          className=""
          style={{
            color: "white",
          }}
        >
          {" "}
          SÍGUENOS:
        </span>
        <Link className="">
          {
            <AiOutlineInstagram
              style={{
                textDecoration: "none",
                fontSize: 18,
                color: "white",
                marginLeft: "20px",
              }}
            />
          }
        </Link>
        <Link className="">
          {
            <AiOutlineTwitter
              style={{
                textDecoration: "none",
                fontSize: 18,
                color: "white",
                marginLeft: "20px",
              }}
            />
          }
        </Link>
        <Link className="">
          {
            <AiOutlineFacebook
              style={{
                textDecoration: "none",
                fontSize: 18,
                color: "white",
                marginLeft: "20px",
              }}
            />
          }
        </Link>
        <Link className="">
          {
            <AiOutlineGlobal
              style={{
                textDecoration: "none",
                fontSize: 18,
                color: "white",
                marginLeft: "20px",
              }}
            />
          }
        </Link>
        <span
          className="col-1"
          style={{
            justifyContent: "space-between",
          }}
        >
          {" "}
        </span>
        <Link className="">
          {
            <AiTwotoneEnvironment
              style={{
                fontSize: 18,
                marginLeft: "15px",
                color: "white",
              }}
            />
          }
        </Link>
        <span
          className=""
          style={{
            textDecoration: "none",
            color: "white",
            marginLeft: "5px",
          }}
        >
          {" "}
          28 St. Arroyo Hondo, Santo Domingo, DR
        </span>
        <Link className="">
          {
            <AiTwotonePhone
              style={{
                fontSize: 18,
                textDecoration: "none",
                color: "white",
                marginLeft: "15px",
              }}
            />
          }
        </Link>
        <span
          className=""
          style={{
            textDecoration: "none",
            color: "white",
            marginLeft: "5px",
          }}
        >
          {" "}
          (212)222-3333
        </span>
        <Link className="">
          {
            <AiTwotoneMail
              style={{
                fontSize: 18,
                textDecoration: "none",
                color: "white",
                marginLeft: "15px",
              }}
            />
          }
        </Link>
        <span
          className=""
          style={{
            textDecoration: "none",
            color: "white",
            marginLeft: "5px",
          }}
        >
          {" "}
          info@immigrationtime.com
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "20px",
        }}
      >
        Copyright &copy; The Immigration Times, 2021. Todos los derechos
        reservados
        {
          <Link
            className=""
            style={{
              textDecoration: "none",
              marginLeft: "25px",
              color: "white",
              textAlign: "right",
            }}
            to="/screens/WelcomePage"
          >
            HOME
          </Link>
        }
        {
          <Link
            className=""
            style={{
              textDecoration: "none",
              color: "white",
              textAlign: "right",
            }}
            to="/screens/contact"
          >
            CONTACT
          </Link>
        }
        {
          <Link
            className=""
            style={{
              textDecoration: "none",
              color: "white",
              textAlign: "right",
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
