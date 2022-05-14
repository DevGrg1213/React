import React from "react";
import "./ApprovalCard.css";
const ApprovalCard = (props) => {
  return (
    <div className="card">
      <div className="card__content">{props.children}</div>
      <div className="card__btns">
        <button className="btn btn__accept">Accept</button>
        <button className="btn btn__reject">Reject</button>
      </div>
    </div>
  );
};

export default ApprovalCard;
