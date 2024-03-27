import React from "react";
import "./contentMain.css";
import Cards from "../Card/Cards";
import Transactions from "../Transaction/Transactions";
import Report from "../Report/Report";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
        <Transactions />
        <Report />
      </div>
    </div>
  );
};

export default ContentMain;
