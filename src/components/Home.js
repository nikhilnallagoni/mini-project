import React from "react";
import { NavLink } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import { Route } from "react-router-dom";

function Home() {
  function HandleRegister() {
    <Route path="register" element={<RegisterPage />}></Route>;
  }
  function HandleLogin() {
    <Route path="login" element={<LoginPage />} />;
  }
  return (
    // <>
    //   <button onClick={HandleRegister}> register</button>
    //   <button onClick={HandleLogin}> login</button>
    // </>
    <>
      <div>Home</div>
      <div>
        <NavLink to={"register"}>register</NavLink>
        <NavLink to={"login"}>login</NavLink>
      </div>
    </>
  );
}

export default Home;
