// src/components/WelcomePage.js
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to PopX</h1>
      <p>"Welcome to our project, where innovation meets real-world solutions."</p>
      <button className="primary" onClick={() => navigate("/create-account")}>
        Create Account
      </button>
      <button className="secondary" onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>
    </div>
  );
}

export default WelcomePage;
