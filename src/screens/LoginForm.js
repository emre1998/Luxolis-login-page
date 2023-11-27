import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);

  const handleLogin = () => {
    if (username === "test@luxpmsoft.com" && password === "test1234!") {
      // Başarılı giriş durumu, DashboardLogin.js bileşeninde kullanılacak
      toast.success("Login successful!");
      setShowPasswordAlert(false);
    } else {
      // Hatalı şifre uyarısı
      toast.error("The provided password is wrong. Please enter the correct combination of letters, numbers, and special characters.");
      setShowPasswordAlert(true);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]+$/;
    const newPassword = event.target.value;

    if (!passwordRegex.test(newPassword)) {
      // Şifre kombinasyonu hatası uyarısı
      toast.error("Wrong combination. Please enter a password with letters, numbers, and special characters.");
      setShowPasswordAlert(true);
    } else {
      setPassword(newPassword);
      setShowPasswordAlert(false);
    }
  };
  const handlePasswordClear = () => {
    setPassword("");
    setShowPasswordAlert(false);
  };

  return (
    <div className="form">
      <div className="username">
        <div className="overlap-group-2">
          <img className="img" alt="User" src="https://c.animaapp.com/ftrrP91T/img/user.svg" />
        </div>
        <input className = "text-wrapper" type="text" value={username} onChange={handleUsernameChange} placeholder = "USERNAME" />
      </div>
      <div className="password">
        <div className="overlap-group-2">
          <img className="img" alt="Lock" src="https://c.animaapp.com/ftrrP91T/img/lock.svg" />
        </div>
        <input className= "text-wrapper"type="password" value={password} onChange={handlePasswordChange} placeholder = "PASSWORD" />
        <button className="clear-btn" onClick={handlePasswordClear}>Clear</button>
      </div>
      <button className="login-btn" onClick={handleLogin}>
        <div className="login-wrapper">
          <div className="login">LOGIN</div>
        </div>
      </button>
      <div className="text-wrapper-2">Forgot password?</div>
      <img className="group" alt="Group" src="https://c.animaapp.com/ftrrP91T/img/group@2x.png" />
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
