import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";
import { useEffect, useState } from "react";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Me",
    to: "/about",
  },
  {
    label: "Skills",
    to: "/skills",
  },
 
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const location = useLocation();

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  useEffect(() => {
    setToggleIcon(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to={"/"} className="navbar__container__logo">
          Kelvin Fosu <FaCode size={30} />
        </Link>

        <ul className={`nabar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((dataItem, index) => (
            <li key={index} className="nabar__container__menu__item">
              <Link
                to={dataItem.to}
                className="nabar__container__menu__item__links"
              >
                {dataItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="toggle_icon" onClick={handleToggleIcon}>
        {toggleIcon ? <HiX /> : <FaBars />}
      </div>
    </nav>
  );
};

export default NavBar;
