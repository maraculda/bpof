
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LaptopTablet from "./components/LaptopTablet";
import Desktop2 from "./components/Desktop2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/laptop-tablet">
          <LaptopTablet overlapGroup="/img/pexels-instawalli-176851-1@1x.png" />
        </Route>
        <Route path="/:path(|desktop-2)">
          <Desktop2 {...desktop2Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const rOADBOXQ31Data = {
    price: "Q3",
};

const rOADBOXQ32Data = {
    price: "Q4",
    className: "roadbox-q4",
};

const oURTEAMSUBSECTION1Data = {
    ourTeam: "OUR TEAM",
};

const secondRowTeam2Data = {
    className: "third-row-team",
};

const firstRowTeam2Data = {
    className: "fourth-row-team",
};

const secondRowTeam3Data = {
    className: "fifth-row-team",
};

const oURTEAMSUBSECTION2Data = {
    ourTeam: "FAQ",
    className: "faq-subsection",
};

const firstQ2Data = {
    className: "second-q",
};

const firstQ3Data = {
    className: "third-q",
};

const firstQ4Data = {
    className: "fourth-q",
};

const firstQ5Data = {
    className: "fifth-q",
};

const desktop2Data = {
    logo: "BPOFgaming",
    roadmap1: "ROADMAP",
    stacking1: "STACKING",
    ourTeam: "OUR TEAM",
    faq: "FAQ",
    connectAWallet: "CONNECT A WALLET",
    emptyDarkRoomModernFuturisticSciFiB: "/img/empty-dark-room-modern-futuristic-sci-fi-background-3d-illustrat@1x.png",
    title: "MINT",
    subheading: "be part of the future gaming",
    roadmap2: "ROADMAP",
    group3: "/img/rectangle@2x.png",
    q1Text: "The Phase 1 Collection(BpoF Tickets) will contain 5555 NFTs BPoF Tickets that are necessary to get in the Portal so you can enter in the Galaxy of the Game when it is launched.",
    price1: "Q1",
    group5: "/img/rectangle-1@2x.png",
    q2Text: "The Phase 2 Collection(BpoF Tickets) will contain 5555 NFTs BPoF Tickets that are necessary to get in the Portal so you can enter in the Galaxy of the Game when it is launched.",
    price2: "Q2",
    stacking2: "STACKING",
    group7: "/img/rectangle-3@2x.png",
    phase1: "Phase 1",
    phase2: "Phase 2",
    phase3: "Phase 3",
    stackingPhase1: "10% and 44.000.000 $COINs",
    stackingPhase2: "15% + 5%(only if you own BpoF Ticket and at least one Normal Car) and it will have 93.000.000 $COINs",
    stackingPhase3: " 20% + 5% (If you own a BPoF ticket, a normal and a flying car) and 150.000.000 $COINs",
    stackingDetails: <React.Fragment>_ _10.000 BpoF $COINs will be valued 0.1 E-Gold.<br /><br />_ _BpoF Phases Percentages will be :<br />_ _ 23.81% BpoF Tickets<br />_ _ 33.2% Normal Cars <br />_ _ 43.7%Flying Cars</React.Fragment>,
    whitepaper: "WHITEPAPER",
    bpof2022AllRightsReserved: "BPOF 2022 ALL RIGHTS RESERVED",
    rOADBOXQ31Props: rOADBOXQ31Data,
    rOADBOXQ32Props: rOADBOXQ32Data,
    oURTEAMSUBSECTION1Props: oURTEAMSUBSECTION1Data,
    secondRowTeam1Props: secondRowTeam2Data,
    firstRowTeamProps: firstRowTeam2Data,
    secondRowTeam2Props: secondRowTeam3Data,
    oURTEAMSUBSECTION2Props: oURTEAMSUBSECTION2Data,
    firstQ1Props: firstQ2Data,
    firstQ2Props: firstQ3Data,
    firstQ3Props: firstQ4Data,
    firstQ4Props: firstQ5Data,
};

