import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaCode } from "react-icons/fa6"
import { FaFacebook,FaInstagram,FaLinkedin,FaTiktok,FaX,FaGithub } from "react-icons/fa6"
import './style.scss'
const Footer = () => {

    const today =new Date()
  return (
    <footer className="bg-body-tertiary ">
        <div className="footer-container">
        <h5>Kelvin Fosu <FaCode/></h5>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Resume</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
       <div className="socialmedia">
        <FaFacebook   />
        <FaInstagram />
        <FaLinkedin />
        <FaTiktok />
        <FaX />
        <FaGithub />
        </div>
       </div>
       <div className="sub">
        <p>copyright@{today.getFullYear()}</p>
        <p>Designed by Kelvin Fosu</p>
        </div>
    </footer>
  )
}

export default Footer