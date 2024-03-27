import React from "react";
import { iconsImgs } from "../../utils/images";
import "./card.css";

const Cards = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-text">Card</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>
      <div className="grid-c1-content">
        <p>Balance</p>
        <div className="lg-value">$22. 000</div>
        <div className="card-wrapper">
          <span className="card-pin-hidden">**** **** ****</span>
          <span>1234</span>
        </div>
        <div className="card-logo-wrapper">
          <div>
            <p className="text text-silver-v1 empiry-text">Expires</p>
            <p className="text text-sm text-white">
              12/22
            </p>
          </div>
          <div className="card-logo">
            <div className="card-shape1"></div>
            <div className="card-shape2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
