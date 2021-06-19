import React from 'react'

function StationItem({ station, onDeleteClick, onUserChange }) {
  const { id, name,ubication,type, user, status } = station;
  
   const users = ["edilbj","juanj", "julianj"," "]
   
  const options = users.map((user, index) => (
    <option key={index} value={user}>
      {user}
    </option>
  ));

  function handleDeleteClick() {
    onDeleteClick(id);
  }

  function handleUserChange(event) {
    
    onUserChange(id, event.target.value);
  
  }

  return (
    <li>
      <h4> Id Station : {id}</h4>
      <h5>name: {name} </h5>
      <h5>type: {type}</h5>
      <h5>Status: {status}</h5>
      <h5>Location: {ubication}</h5>
      <label>
        Correct User:
        <select defaultValue={user} onChange={handleUserChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete station</button>
      
    </li>
  );
 }

export default StationItem;
