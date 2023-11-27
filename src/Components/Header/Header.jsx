import React from "react";
import "./header.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="header">
        <h1 className="header-heading">Serene Distribution</h1>
        <div className="header-nav">
          <div className="header-navlinks">
            <p>
              <Link className="link1" to="/">
                Home
              </Link>
            </p>
            <p>
              <Link className="link2" to="/careers">
                Careers
              </Link>
            </p>
          </div>
          <div className="header__navbar-menu">
            {toggleMenu ? (
              <RiCloseLine
                color="#162b6f"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#162b6f;"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="header-menu_container scale-up-center">
                <div className="header-menu_container-links">
                  <p>
                    <Link className="link1" to="/">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link className="link2" to="/careers">
                      Careers
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
