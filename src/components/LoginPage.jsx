// src/components/LoginPage.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      alert("Login Successful!");
      navigate("/profile");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="container">
      <h1>Login to PopX</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="primary" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
