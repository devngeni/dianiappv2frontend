import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import MobileFooter from "./components/MobileFooter";
import Wellness from "./components/pages/Wellness";
import Activities from "./components/pages/Activities";
import NightLife from "./components/pages/NightLife";
import Tours from "./components/pages/Tours";
import VIP from "./components/pages/VIP";
import MobileNav from "./components/MobileNav";
import HowItWorks from "./components/pages/HowItWorks";
import BotIcon from "./components/BotIcon";
import "animate.css/animate.min.css";
import DefaultNav from "./components/DefaultNav";
import Lalo from "./components/Lalo";
import "@fontsource/montserrat"; // Defaults to weight 400.
import InterractiveSection from "./components/WalletConnector.jsx";
import Preloader from "./components/PreLoad/Preloader";
import { WalletProvider } from "./context/WalletContext";
import ReactGA from "react-ga";
import axios from "axios";
import Fast from "./components/pages/Fast";
// import RatingView from "./components/pages/RatingView";

// const TRACKING_ID = "G-Q6E9KV4GKH";
// ReactGA.initialize(TRACKING_ID);

function App() {
  // usePageTracking();

  // const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [itIsOpen, setItIsOpen] = useState(false);
  const [IP, setIP] = useState()
  // eslint-disable-next-line no-unused-vars
  // const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const promo_id = urlParams.get("promo_id");
  const getData = async () => {
    if (promo_id != null) {
      const res = await axios.get("https://geolocation-db.com/json/");
      console.log(res.data);
      const IPAddress = await res.data.IPv4;
      console.log("IP ADDRESS", IPAddress);
      setIP(IPAddress);
      const data = await axios.get(
        `http://localhost:8000/${IPAddress}/${promo_id}`
      );
      console.log({ "axios response": data });
      console.log("promo_id", promo_id);

      //creating function to load ip address from the API
    }
  };
  console.log("hii imeenda",IP)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const setPopupOpen = () => {
    setItIsOpen(!itIsOpen);
  };

  return (
    <WalletProvider>
      {/* <ConnectButton/> */}
      {itIsOpen && <Lalo setItIsOpen={setItIsOpen} />}
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <InterractiveSection />
          <DefaultNav />
          <Nav />
          <br />
          <br />
          <h4>Deliveries, Bookings, Anytime / Anywhere</h4>
          {/* <Marquee/> */}
          {/* <AddToHomeScreen /> */}
          {/* <Type /> */}
          {/* <WeatherIcon /> */}
          {/* {isOpen && <Popup setIsOpen={setIsOpen}/>} */}
          <MobileNav />
          <BotIcon />
          <Routes>
            <Route path="/:from" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/fast-shopping" element={<Fast />} />
            <Route path="/popular" element={<Home />} />
            <Route path="/Wellness" element={<Wellness />} />
            <Route path="/NightLife" element={<NightLife />} />
            <Route path="/Tours" element={<Tours />} />
            <Route path="/VIP" element={<VIP />} />
            <Route path="/Activities" element={<Activities />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            {/* <Route path="/rate-us" element={<RatingView/>} /> */}
          </Routes>
          <MobileFooter setItIsOpen={setPopupOpen} />
        </>
      )}
    </WalletProvider>
  );
}

export default App;
