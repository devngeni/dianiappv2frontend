import React from "react";
import "./css/home.css";
import { useParams } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import useAnalyticsEventTracker from "../useAnalyticsEventTracker";
import {
  dinner,
  taxi,
  plane,
  scooter,
  bike,
  groceries,
  packageicon,
  ksh,
  rocket,
  bed,
  boat,
  geek,
  fix,
  bookingicon,
  cryptobtnnew,
  bankfx,
  renta,
  sendcrypto,
  receivecrypto,
  drink,
  food,
} from "./icons";

function Home() {
  const gaEventTracker = useAnalyticsEventTracker("Home");
  let { from } = useParams();
  console.log("*******", from);
  if (from) {
    let submitBacklink = async () => {
      try {
        let res = await fetch("https://api.dianiapp.me/backlink/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            source: from,
          }),
        });
        let resJson = await res.json();
        console.log(resJson);
      } catch (err) {
        console.log(err);
      }
    };
    submitBacklink();
  }

  const data = [
    {
      name: "Groceries 24/7",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need Groceries 🧅",
      className: "whatsapp",
      image: groceries,
      desc: "image desc",
    },
  ];

  return (
    <div className="container">
      <h4 style={{ marginTop: "30px" }}>INSTANT GO {rocket}</h4>
      <div className="Tabs-container">
        <ReactWhatsapp
          number={"+254115144146"}
          message={"Hello DianiApp 😊 I need Food / Drinks 🍾"}
          className="whatsapp"
          onClick={() => gaEventTracker("Food and Drinks")}
        >
          <div className="Tab-item">
            <div className="grid-left">{drink} </div>
            <div className="grid-right"> &nbsp;&nbsp; Drinks Delivery</div>
          </div>
        </ReactWhatsapp>
        <ReactWhatsapp
          number={"+254115144146"}
          message={"Hello DianiApp 😊 I need Food / Drinks 🍾"}
          className="whatsapp"
          onClick={() => gaEventTracker("Food and Drinks")}
        >
          <div className="Tab-item">
            <div className="grid-left">{food} </div>
            <div className="grid-right"> &nbsp;&nbsp; Food Delivery</div>
          </div>
        </ReactWhatsapp>
        {data.map((item, index) => {
          let tag = item.name;
          return (
            <ReactWhatsapp
              key={index}
              number={item.number}
              message={item.message}
              className={item.className}
              onClick={() => gaEventTracker(tag)}
            >
              <div className="Tab-item">
                <div className="grid-left">{item.image}</div>
                <div className="grid-right">{item.name}</div>
              </div>
            </ReactWhatsapp>
          );
        })}
        

        <h4 style={{ marginTop: "30px" }}>24/7 BOOKINGS {bookingicon}</h4>
        <ReactWhatsapp
          number={"+254115144146"}
          message={"Hello DianiApp 😊 I need  Accomodation 🛌"}
          className="whatsapp"
          onClick={() => gaEventTracker("Accomodation")}
        >
          <div className="Tab-item">
            <div className="grid-left">{bed}</div>
            <div className="grid-right"> Accomodation</div>
          </div>
        </ReactWhatsapp>

        <ReactWhatsapp
          number={"+254115144146"}
          message={"Hello DianiApp 😊 I need a Dinner Reservation 🍽️"}
          className="whatsapp"
          onClick={() => gaEventTracker("Dinner Reservation")}
        >
          <div className="Tab-item">
            <div className="grid-left">{dinner}</div>
            <div className="grid-right"> Dinner Reservation</div>
          </div>
        </ReactWhatsapp>

        <ReactWhatsapp
          number={"+254115144146"}
          message={"Hello DianiApp 😊 I need Airport Transportation ✈️"}
          className="whatsapp"
          onClick={() => gaEventTracker("Airport Transportation")}
        >
          <div className="Tab-item">
            <div className="grid-left">{plane}</div>
            <div className="grid-right"> Airport Transportation</div>
          </div>
        </ReactWhatsapp>

        <h4 style={{ marginTop: "30px" }}>INSTANT HIRE {rocket}</h4>
        {/* <h4>RENT A {rocket}</h4> */}
        <ReactWhatsapp
          number="+254115144146"
          message="Hello DianiApp 😊 I need to rent a Scooter/ E-Bike/ Car/ Taxi / a Boat ⛵"
          className="whatsapp"
          onClick={() => gaEventTracker("Scooter, eBike")}
        >
          <div
            className="Tab-item"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div className="flex-car-item pxl">
              Scooter
              <br />
              {scooter}
            </div>
            <div className="flex-car-item pxl">
              E-Bikes
              <br />
              {bike}
            </div>
            <div className="flex-car-item">{renta}</div>
            <div className="flex-car-item pxl">
              Car/Taxi
              <br />
              {taxi}
            </div>
            <div className="flex-car-item pxl">
              Boat
              <br />
              {boat}
            </div>
          </div>
        </ReactWhatsapp>
        {/* {scooter}&nbsp; {bikesmall}&nbsp;&nbsp; {taxi}&nbsp; */}
        {/* <h4>HelloRE A {rocket}</h4> */}
        <ReactWhatsapp
          number="+254115144146"
          message={
            "Hello DianiApp 😊 I need  Parcel Delivery / Hire a Tech Guru / Hire Repair/FixIt 🛠️"
          }
          className="whatsapp"
          onClick={() => gaEventTracker("Rent A;")}
        >
          <div
            className="Tab-item"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div className="pxl">
              <p style={{ background: "none" }}>
                {packageicon}
                <br />
                Parcel <br /> Delivery{" "}
              </p>
            </div>
            <div className="pxl">
              <p style={{ background: "none" }}>
                {geek}
                <br />
                Hire
                <br />
                Tech Guru
              </p>
            </div>
            <div className="pxl">
              <p style={{ background: "none" }}>
                {fix}
                <br />
                Hire
                <br />
                Repair/FixIT
              </p>
            </div>
            {/* <div className="scooter"><p style={{background:"none"}}>Guru<br/>{geek}</p><p style={{background:"none"}}>Repair <br/>{fix}</p></div>      */}
          </div>
        </ReactWhatsapp>

        <h4 style={{ marginTop: "30px" }}>BANKING & FX {bankfx}</h4>
        <ReactWhatsapp
          number={"+254115144146"}
          message={"Hello DianiApp 😊 I need  Cash and Currency exchange 💰"}
          className="whatsapp"
          onClick={() => gaEventTracker("Cash and currencies exchange")}
        >
          <div className="Tab-item">
            <div className="grid-left">{ksh}</div>
            <div className="grid-right"> Cash. Currencies. Exchange</div>
          </div>
        </ReactWhatsapp>

        <ReactWhatsapp
          number={"+254115144146"}
          message={"Hello DianiApp 😊 I need to spend Crypto ₿"}
          className="whatsapp"
          onClick={() => gaEventTracker("Spend Crypto")}
        >
          <div className="Tab-item">
            <div className="grid-left">{cryptobtnnew}</div>
            <div className="grid-right"> Spend Crypto</div>
          </div>
        </ReactWhatsapp>
        <div className="shrink-container">
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need to send Crypto ₿"}
            className="shrink"
            onClick={() => gaEventTracker("Send Crypto")}
          >
            <div className="bg">
              <div className="shrink">{sendcrypto}</div>
              <div className="shrink"> Send Crypto</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need to receive Crypto ₿"}
            className="shrink"
            onClick={() => gaEventTracker("Receive Crypto")}
          >
            <div className="bg">
              <div className="shrink">{receivecrypto}</div>
              <div className="shrink"> Receive Crypto</div>
            </div>
          </ReactWhatsapp>
        </div>

     
      </div>
    </div>
  );
}

export default Home;
// caribean jinja diani north coast
