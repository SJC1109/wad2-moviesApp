import React from "react";
import './creditInfo.css'

const CreditInfo = ({credit}) => {
  const {person={}} = credit
  return <div className={"wrap1"}>
    <img
      src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
      alt={person.name}
    />
    <div className={"title"}>{person.name}</div>

  </div>;
};

export default CreditInfo;
