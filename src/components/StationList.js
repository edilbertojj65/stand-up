import React, { useEffect, useState } from "react";
import StationItem from "./StationItem";

function StationList() {
  const [station, setStation] = useState([]);
    
debugger
 
  useEffect(() => {
    fetch("http://localhost:4000/station")
      .then((r) => r.json())
      .then(station =>  {
        setStation(station) 
      })
              
      
   }, [] );

  
  function handleDeleteClick(id) {
    fetch(`http://localhost:4000/station/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedStations = station.filter((q) => q.id !== id);
        setStation(updatedStations);
      });
  }

  function handleUserChange(id, user) {
    fetch(`http://localhost:4000/station/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((updatedStation) => {
        const updatedStations = station.map((q) => {
          if (q.id === updatedStation.id) return updatedStation;
          return q;
        });
        setStation(updatedStations);
      });
  }

  


  const stationsItems = station.map((q) => (
    <StationItem
      key={q.id}
      station={q}
      onDeleteClick={handleDeleteClick}
      onUserChange={handleUserChange}
    />
  ));



  return (
    <section>
      <h1> View stations</h1>
      {<ul>{stationsItems}</ul>} 
    </section>
  );
 }



export default StationList;
