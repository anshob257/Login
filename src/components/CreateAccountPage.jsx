// src/components/CreateAccountPage.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccountPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "No",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.password) {
      alert("Please fill required fields!");
      return;
    }
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Account Created Successfully!");
    navigate("/login");
  };

  return (
    <div className="container">
      <h1>Create your PopX account</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullname" placeholder="Full Name*" value={formData.fullname} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address*" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password*" value={formData.password} onChange={handleChange} />
        <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} />
        
        <div className="radio-group">
          <label>Are you an Agency?*</label>
          <label>
            <input type="radio" name="isAgency" value="Yes" onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name="isAgency" value="No" onChange={handleChange} /> No
          </label>
        </div>

        <button className="primary" type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccountPage;
