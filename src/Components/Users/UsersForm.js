import React from "react";

function UsersForm() {
    const addUserHandler=(e)=>{
        e.preventDefault();
        console.log("form submited")
    }
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" />
      <button type="submit">Add Users</button>
    </form>
  );
}

export default UsersForm;
