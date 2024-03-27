import React from "react";
import "./contentMain.css";
import Cards from "../Card/Cards";
import Transactions from "../Transaction/Transactions";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
        <Transactions />
      </div>
    </div>
  );
};

export default ContentMain;
