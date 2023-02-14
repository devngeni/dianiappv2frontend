import React from "react";
import {
  phone,
  battery,
  shopping,
  amazonpkgo,
  simcard,
  camera,
  laptop,
  dress,
  tshirt,
  shoe,
  flippers,
} from "../icons";
import useAnalyticsEventTracker from "../../useAnalyticsEventTracker";
import ReactWhatsapp from "react-whatsapp";

function Fast() {
  const gaEventTracker = useAnalyticsEventTracker("Home");
  return (
    <>
      <div classNAme="container">
        <div className="Tabs-container">
          <h4 style={{ marginTop: "30px" }}>FAST SHOPPING {shopping}</h4>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need Shopping 🛒"}
            className="whatsapp"
            onClick={() => gaEventTracker("Fast Shopping")}
          >
            <div
              className="Tab-item"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="flex-car-item pxl">{dress}</div>
              <div className="flex-car-item pxl">{tshirt}</div>
              <div className="flex-car-item pxl">{shoe}</div>
              <div className="flex-car-item pxl">{flippers}</div>
              <div
                className="flex-car-item pxl"
                style={{ marginTop: "0", width: "95px" }}
              >
                Buy now Delivered Now
              </div>
            </div>
          </ReactWhatsapp>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need Tech Gadgets 📱"}
            className="whatsapp"
            onClick={() => gaEventTracker("Tech gadgets")}
          >
            <div
              className="Tab-item"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="flex-car-item pxl">{phone}</div>
              <div className="flex-car-item pxl">{camera}</div>
              <div className="flex-car-item pxl">{battery}</div>
              <div className="flex-car-item pxl">{laptop}</div>
              <div
                className="flex-car-item pxl"
                style={{ marginTop: "0", width: "95px" }}
              >
                Tech Gadgets
              </div>
            </div>
          </ReactWhatsapp>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need to Purchase Sim Cards 📦"}
            className="whatsapp"
            onClick={() => gaEventTracker("Purchase sim cards")}
          >
            <div className="Tab-item">
              <div className="grid-left">{simcard}</div>
              <div className="grid-right">Buy sim cards</div>
            </div>
          </ReactWhatsapp>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need Package Delivery(Amazon US) 📦"}
            className="whatsapp"
            onClick={() => gaEventTracker("Package Delivery Amazon US ")}
          >
            <div className="Tab-item">
              <div className="grid-left">{amazonpkgo}</div>
              <div className="grid-right"> AMAZON USA &#60;7 Days</div>
            </div>
          </ReactWhatsapp>
          <ReactWhatsapp
            number={"+254115144146"}
            message={
              "Hello DianiApp 😊 I need Package Delivery(Amazon UK/EUR) 📦"
            }
            className="whatsapp"
            onClick={() => gaEventTracker("Package Delivery Amazon UK/EUR")}
          >
            <div className="Tab-item">
              <div className="grid-left">{amazonpkgo}</div>
              <div className="grid-right"> AMAZON UK/EUR &#60;9Days</div>
            </div>
          </ReactWhatsapp>
        </div>
      </div>
    </>
  );
}

export default Fast;
