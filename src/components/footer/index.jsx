import "bootstrap/dist/css/bootstrap.min.css";
import { FaCode } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaX,
  FaGithub,
} from "react-icons/fa6";
import "./style.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  const today = new Date();
  return (
    <footer className="bg-body-tertiary ">
      <div className="footer-container">
        <h5>
          Kelvin Fosu <FaCode className="code" />
        </h5>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="socialmedia-icons ">
          <a href="https://Facebook.com/kelvinfosu348">
            {" "}
            <FaFacebook className="icon-allmedia" />
          </a>
          <a href="https://Instagram.com//kelvinfosu348">
            {" "}
            <FaInstagram className="icon-allmedia" />
          </a>
          <a href="https://Linkedin.com/in/kelvin-fosu-86009530b">
            {" "}
            <FaLinkedin className="icon-allmedia" />
          </a>
          <a href="https://x.com/__kelvinfosu?s=21">
            {" "}
            <FaX className="icon-allmedia" />
          </a>
          <a href="https://tiktok.com/__kelvinfosu">
            {" "}
            <FaTiktok className="icon-allmedia" />
          </a>
          <a href="https://github.com/Fosu-Kelvin">
            {" "}
            <FaGithub className="icon-allmedia" />
          </a>
        </div>
      </div>
      <div className="sub-footer-details">
        <p>copyright&copy;{today.getFullYear()}</p>
        <p>Designed by Kelvin Fosu</p>
      </div>
    </footer>
  );
};

export default Footer;
