import React from "react";

function AdminNavBar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New Station</button>
      <button onClick={() => onChangePage("List")}>View Stations</button>
      
    </nav>
  );
}

export default AdminNavBar;