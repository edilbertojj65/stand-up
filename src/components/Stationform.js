import React, { useState } from "react";

function Stationform(props) {

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        ubication: "",
        type: "",
        status: "",
        user: "",
      });
  
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:4000/station", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: formData.id,
            name: formData.name,
            ubication :  formData.ubication,
            type :  formData.type,
            status :  formData.status,
            user: formData.user,
          }),
        });
      }
    
      return (
        <section>
          <h1>Add New station</h1>
          <form onSubmit={handleSubmit}>
            <label>
              id Station:
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
            </label>
            <label>
              name Station:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label>
              ubication station:
              <input
                type="text"
                name="ubication"
                value={formData.ubication}
                onChange={handleChange}
              />
            </label>

            <label>
              Type Station:
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
              />
            </label>

            <label>
              Status:
              <input
               type ="text"
               name="status"
               value={formData.status}
               onChange={handleChange}
               />
                                      
            </label>

            <label>
              User:
              <input
                type="text"
                name="user"
                value={formData.user}
                defaultValue=" "
                onChange={handleChange}
              />
                     
            </label>

            <button type="submit">Add Station</button>
          </form>
        </section>
      );

    
}
export default Stationform ;