/* eslint-disable jsx-a11y/img-redundant-alt */
// import { useState, useEffect } from "react";
import "./css/Nav.css";
import logo from "./assets/logo.png";
import { useState, useEffect } from "react";
// import toast from "react-hot-toast";
// import { addHome, reallogo, installation } from "./icons";
// import WeatherIcon from "../components/WeatherIcon";
import { NavLink } from "react-router-dom";
import { usePwa } from "react-pwa-app";

function Nav() {
  const pwa = usePwa();
  const [load, setLoad] = useState(true);

  console.log(pwa.registration); // ServiceWorkerRegistration
  const currentTime = new Date().toLocaleTimeString();
  console.log("#######", currentTime);

  useEffect(() => {
    setTimeout(() => setLoad(false), 10000);
  }, []);

  const Pwabtn = () => {
    if (pwa.isInstalled === "standalone") {
      return null;
    } else {
      return (
        <>
          {load ? (
            <div className="pwa-con">
              <div className="pwa-btn">
                <div>
                  <h5>⭐⭐⭐⭐⭐</h5>
                </div>
                <button onClick={pwa.install}>Install</button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      );
    }
  };

  return (
    <nav>
      <div className="nav-main">
        <div className="Logo-container">
          <NavLink to="/">
            <img src={logo} alt="logo image" />
          </NavLink>
        </div>
        {/* <div className="Links-container">
          <NavLink to="/popular">
            <h5>⭐ Popular</h5>
          </NavLink>
          <NavLink to="/fast-shopping">
            <h5>Fast Shopping</h5>
          </NavLink>
          <NavLink to="/Wellness">
            <h5>Wellness</h5>
          </NavLink>
          <NavLink to="/Activities">
            <h5>Activities + Tours</h5>
          </NavLink>
          <NavLink to="/NightLife">
            <h5>Night Life</h5>
          </NavLink>
          <NavLink to="/VIP">
            <h5>VIP</h5>
          </NavLink>
        </div> */}
        {/* <h4><WalletConnect/></h4> */}
        <Pwabtn />
        {/* {pwa.isInstalled =="none" ? (  */}

        {/* ) : null} */}
      </div>
    </nav>
  );
}

export default Nav;
