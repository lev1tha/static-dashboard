import React from "react";
import "./contentMain.css";
import Cards from "../Card/Cards";
import Transactions from "../Transaction/Transactions";
import Report from "../Report/Report";
import Budget from "../Budget/Budget";
import Subscription from "../Subscription/Subscription";
import Savings from "../Savings/Savings";
import Loans from "../Loans/Loans";
import Finance from "../Financial/Financial";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
        <Transactions />
        <Report />
      </div>
      <div className="content-grid-two">
        <Budget />
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Subscription />
            <Savings />
          </div>
        </div>
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Loans />
            <Finance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
