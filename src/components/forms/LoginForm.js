import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setNemEntry] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = { email: email, password: password };
      setNemEntry([...allEntry, newEntry]);

      setEmail("");
      setPassword("");
    } else {
      alert("Please fill all fields before login");
    }
  };

  return (
    <div>
      <form method="" onSubmit={formSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        {allEntry.map((curElm) => {
          return (
            <div className="showDataStyle">
              <p>{curElm.email}</p>
              <p>{curElm.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoginForm;
