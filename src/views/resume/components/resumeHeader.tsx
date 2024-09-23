import React from "react";

const ResumeHeader: React.FC = () => {
  return (
    <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1>Nickolas Mathew Whitman</h1>
      <p>
        <strong>Phone:</strong> (406) 890-0372
        <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:nick.whitman@gmail.com">nick.whitman@gmail.com</a>
        <br />
        <strong>LinkedIn:</strong>{" "}
        <a href="https://www.linkedin.com/in/nickolas-whitman">
          nickolas-whitman
        </a>
      </p>
    </header>
  );
};

export default ResumeHeader;
