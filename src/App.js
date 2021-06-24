import React, { useState } from "react";
import './App.css';
import Stationform from './components/Stationform'; 
import AdminNavBar from './components/Admnavbar';
import StationList from "./components/StationList";


function App() {
  
  const [page, setPage] = useState("List");
  return (
    <main>
     <h1>Management Work Stations</h1> 
     <p>App to create Work station</p>
     <AdminNavBar onChangePage={setPage} />
     
     {page === "Form" ? <Stationform /> : <StationList /> }

     
     </main>
  );
}

export default App;
