import React from "react";
import  LoginForm  from "../LoginForm"; 
import "./style.css";

export const DashboardLogin = () => {
  return (
    <div className="dashboard-login">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="BG">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="div" />
            </div>
            <img className="vector" alt="Vector" src="https://c.animaapp.com/ftrrP91T/img/vector.svg" />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
