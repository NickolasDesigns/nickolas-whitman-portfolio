import React from "react";

const ResumeHeader: React.FC = () => {
  return (
    <header
  style={{
    margin: "32px auto 24px auto",
    maxWidth: 480,
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    padding: "32px 24px",
    textAlign: "center",
    border: "1px solid #e0e0e0"
  }}
>
  <h1 style={{
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: 8,
    color: "#1976d2"
  }}>
    Nickolas Mathew Whitman
  </h1>
  <p style={{ fontSize: "1.1rem", marginBottom: 16 }}>
    <span style={{ marginRight: 16 }}>
      <img src="https://img.icons8.com/ios-filled/24/1976d2/phone.png" alt="Phone" style={{ marginRight: 8 }} />
      <a href="tel:4068900372" style={{ color: "#1976d2", textDecoration: "none" }}>(406) 890-0372</a>
    </span>
    <span style={{ marginRight: 16 }}>
      <img src="https://img.icons8.com/ios-filled/24/1976d2/email.png" alt="Email" style={{ marginRight: 8 }} />
      <a href="mailto:nick.whitman@gmail.com" style={{ color: "#1976d2", textDecoration: "none" }}>nick.whitman@gmail.com</a>
    </span>
    <span>
      <img src="https://img.icons8.com/ios-filled/24/1976d2/linkedin.png" alt="LinkedIn" style={{ marginRight: 8 }} />
      <a href="https://www.linkedin.com/in/nickolas-whitman" style={{ color: "#1976d2", textDecoration: "none" }}>nickolas-whitman</a>
    </span>
  </p>
</header>
  );
};

export default ResumeHeader;
