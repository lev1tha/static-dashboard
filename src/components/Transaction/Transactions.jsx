import "./Transaction.css";

import { transactions } from "../../data/data";
import { iconsImgs } from "../../utils/images";

const Transactions = () => {
  return (
    <div className="grid-ome-item grid-common grid-c2">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">All Transaction</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>
      <div className="grid-content">
        <div className="grid-items">
          {transactions.map((transactions) => (
            <div className="grid-item" key={transactions.id}>
              <div className="grid-item-l">
                <div className="grid-item-avatar fit-cover">
                  <img src={transactions.image} alt="" />
                </div>
                <p className="text">
                  {transactions.name} <span>{transactions.data}</span>{" "}
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-scarlet">
                  ${transactions.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
