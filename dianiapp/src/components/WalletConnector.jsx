import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  interractive,
  walletconnectionsmall,
  profile,
  wifi,
  lalologo,
  closevg,
  addHome,
} from "./icons";
import "./css/walletModal.css";
import { Tab, Tabs, TabPanel, TabList } from "react-tabs";
import MiniLoader from "./MiniLoader";
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import ConnectWalet from  "./../ConnectWallet"

// import { WalletLinkConnector } from "@web3-react/walletlink-connector";
// import {WalletConnectConnector} from '@web3-react/walletconnect-connector';
// import {InjectedConnector} from '@web3-react/injected-connector';
// import { useWeb3React } from '@web3-react/core'

// const CoinbaseWallet = new WalletLinkConnector({
//  url: `https://mainnet.infura.io/v3/5ef8165ab6174ab980c609a75024165b`,
//  appName: "Web3-react Demo",
//  supportedChainIds: [1, 3, 4, 5, 42],
// });

// const WalletConnect = new WalletConnectConnector({
//  rpcUrl: `https://mainnet.infura.io/v3/5ef8165ab6174ab980c609a75024165b`,
//  bridge: "https://bridge.walletconnect.org",
//  qrcode: true,
// });

// const Injected = new InjectedConnector({
//  supportedChainIds: [1, 3, 4, 5, 42]
// });

const InterractiveSection = () => {
  const [open, setOpen] = useState(false);
  // const { activate, deactivate } = useWeb3React();
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="main-connect">
        <button className="connection-btn" onClick={() => setOpen(true)}>
          {interractive}
        </button>
        {open === true ? (
          //  <Popup position="bottom right" lockScroll={true} arrow={false} className="inerract" keepTooltipInside={true} >
          <div className="chat-box">
            <div className="logo-top-con">
              <h3>Lalo Interactive</h3>
              <div className="logowrap">{lalologo}</div>
            </div>
            <Tabs className="transit">
              <TabPanel className="transition" >
                <div className="message-wifi" style={{display:"block", width:"100%"}}>
                  <NavLink to="/popular" activeclassname="active" style={{width:"100%"}} onClick={() => handleClick()}>
                    <h5 style={{color:"#000", paddingBottom:"10px", width:"100%", textAlign:"center"}}>⭐ Popular</h5>
                  </NavLink>
                  <NavLink to="/fast-shopping" activeclassname="active" style={{width:"100%"}} onClick={() => handleClick()}>
                    <h5 style={{color:"#000", paddingBottom:"10px", width:"100%", textAlign:"center"}}>Fast Shopping</h5>
                  </NavLink>
                  <NavLink to="/Wellness" activeclassname="active" style={{width:"100%"}} onClick={() => handleClick()}>
                    <h5 style={{color:"#000", paddingBottom:"10px", width:"100%", textAlign:"center"}}>Wellness</h5>
                  </NavLink>
                  <NavLink to="/Activities" activeclassname="active" style={{width:"100%"}} onClick={() => handleClick()}>
                    <h5 style={{color:"#000", paddingBottom:"10px", width:"100%", textAlign:"center"}}>
                      Activities +<br /> Tours
                    </h5>
                  </NavLink>
                  <NavLink to="/NightLife" activeclassname="active" style={{width:"100%"}} onClick={() => handleClick()}>
                    <h5 style={{color:"#000", paddingBottom:"10px", width:"100%", textAlign:"center"}}>Night Life</h5>
                  </NavLink>
                  <NavLink to="/VIP" activeclassname="active" style={{width:"100%"}} onClick={() => handleClick()}>
                    <h5 style={{color:"#000", paddingBottom:"10px", width:"100%", textAlign:"center"}}>VIP</h5>
                  </NavLink>
                </div>
              </TabPanel>
              <TabPanel
                className="transition"
                style={{ justifyContent: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <h3  style={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "0.8em",
                  }}
                  >Web3 wallet connect comming soon</h3>
                </div>
              </TabPanel>
              <TabPanel
                className="transition"
              >
                <h3
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "0.8em",
                  }}
                >
                  Profile creation coming soon
                </h3>
              </TabPanel>
              <TabPanel
                className="transition"
                style={{ justifyContent: "center" }}
              >
                <h3
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    marginTop: "50px",
                    fontSize: "0.8em",
                    display:"grid",
                    gridTemplateColumns:"1fr 1fr"
                  }}
                  className="center"
                >
                  Accessing free wifi <MiniLoader/>
                </h3>
              </TabPanel>
              <TabList className="icons-flex">
                <Tab>{addHome}</Tab>
                <Tab>
                  <div>{walletconnectionsmall}</div>
                </Tab>
                <Tab>{profile}</Tab>
                <Tab>
                  <a href="https://lalowifi.me">{wifi}</a>
                </Tab>
                {/* <Tab style={{position:"absolute", right:"3vw", bottom: "11vh", zIndex:100, width:"50px", height:"50px"}}>{walletconnectionsmall}</Tab>
                <Tab style={{position:"absolute", right:"3vw", bottom: "18vh", zIndex:100, width:"50px", height:"50px"}}>{walletconnectionsmall}</Tab> */}
                <div onClick={() => handleClick()}>
                  <div>{closevg}</div>
                </div>
              </TabList>
            </Tabs>
          </div>
        ) : // </Popup>
        null}
      </div>
    </>
  );
};

export default InterractiveSection;
