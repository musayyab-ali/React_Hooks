//import { useState } from "react";
import "./App.css";
//import "./user.css";
import RulesHook from "./components/RulesHook";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";
import ShortCircuitEvaluation from "./components/ShortCircuitEvaluation";
import LoginForm from "./components/forms/LoginForm";
import RegistrationForm from "./components/forms/RegistrationForm";
import UseEffect from "./components/UseEffects/UseEffect";
import UseEffectCleanUp from "./components/UseEffects/UseEffectCleanUp";
import UseEffectGithubAPI from "./components/UseEffects/UseEffectGithubAPI";
import UseRef from "./components/UseRef";

function App() {
  return (
    <div>
      {/* <RulesHook /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <ShortCircuitEvaluation /> */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectCleanUp /> */}
      {/* <UseEffectGithubAPI /> */}
      <UseRef />
    </div>
  );
}

export default App;
