import React, { useState } from "react";
//import "./Contact.css"; // optional styling file

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container" style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}>
        Contact Us
      </h1>
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        
        {/* Left side Contact Info */}
        <div style={{ flex: "1", background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
          <h2 style={{ marginBottom: "15px" }}>Our Contact Info</h2>
          <p><strong>Address:</strong> LNCT Campus, Bhopal, India</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> campusconnect@lnct.ac.in</p>
        </div>

        {/* Right side Contact Form */}
        <div style={{ flex: "2", background: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
              />
            </div>
            <button type="submit" style={{ background: "#2c3e50", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
