import React, { useState } from "react";

const RegistrationForm = () => {
  const [userRegistration, setUserRegistration] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...userRegistration,
      id: new Date.getTime().toString(),
    };
    setRecords([...records, newRecord]);
    setUserRegistration({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      address: "",
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">FirstName</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            autoComplete="off"
            placeholder="Enter Your First Name"
            required
            value={userRegistration.firstname}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            autoComplete="off"
            placeholder="Enter Your Last Name"
            required
            value={userRegistration.lastname}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter Your E_mail"
            required
            value={userRegistration.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            autoComplete="off"
            placeholder="Enter Your Phone No"
            required
            value={userRegistration.phone}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Enter Your Password"
            required
            value={userRegistration.password}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            autoComplete="off"
            placeholder="Enter Your Address"
            required
            value={userRegistration.address}
            onChange={handleInput}
          />
        </div>
        <button type="submit">Register Now</button>
      </form>
      <div>
        {records.map((cuurElm) => {
          return (
            <div className="showDataStyle" key={cuurElm.id}>
              <p>{cuurElm.firstname}</p>
              <p>{cuurElm.lastname}</p>
              <p>{cuurElm.email}</p>
              <p>{cuurElm.phone}</p>
              <p>{cuurElm.password}</p>
              <p>{cuurElm.address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RegistrationForm;
