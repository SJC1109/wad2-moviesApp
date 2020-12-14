import React from "react";
import './creditKnown.css'


const CreditKnown = ({credit}) => {
  const {person={}, media={}} = credit
  
  return <div className={"wrap2"}>
     <div className={"name"}>{person.name}</div>
     <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
        credit_type
        </li>
        <li key="rut" className="list-group-item ">
          {credit.credit_type}
        </li>
        <li key="ruh" className="list-group-item list-group-item-dark">
        department
        </li>
        <li key="rut" className="list-group-item ">
          {credit.department}
        </li>
        <li key="ruh" className="list-group-item list-group-item-dark">
        job
        </li>
        <li key="rut" className="list-group-item ">
          {credit.job}
        </li>
        <li key="ruh" className="list-group-item list-group-item-dark">
        media_type
        </li>
        <li key="rut" className="list-group-item ">
          {credit.media_type}
        </li>
      </ul>
    <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          gender
        </li>
        <li key="rut" className="list-group-item ">
          {person.gender}
        </li>
        <li key="ruh" className="list-group-item list-group-item-dark">
       popularity
        </li>
        <li key="rut" className="list-group-item ">
          {person.popularity}
        </li>
      </ul>
  
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
        character
        </li>
        <li key="rut" className="list-group-item ">
          {media.character}
        </li>
      </ul>
    
    <div className={"title0"}>known for</div>
    <div className={"known"}>
      {person.known_for.map(item=>(
        <div className={"card1"}>
          
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt={item.title}
          />
          <div className={"name"}>{item.title}</div>
        </div>
      ))}
    </div>
  </div>;
};

export default CreditKnown;
