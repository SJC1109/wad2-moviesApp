import React from "react";
import Credit from "../creditCard/";
import "./creditList.css";

const CreditList = ({movies, action}) => {
  const creditCards = movies.map(m => (
    <Credit key={m.id} movie={m} action={action} />
  ));
  return <div className="row movies bg-info">{creditCards}</div>;
};

export default CreditList;