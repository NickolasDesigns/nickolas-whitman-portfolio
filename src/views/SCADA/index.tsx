import React from "react";

const SCADA = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      {/* Section 1: SCADA Engineering Overview */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "#000000ff" }}>SCADA Engineering Overview</h2>
        <p>
          SCADA (Supervisory Control and Data Acquisition) systems are used to monitor and control industrial processes
          such as power generation and distribution. In substations, SCADA enables remote control of breakers, transformers,
          and other equipment through RTUs, PLCs, and HMIs.
        </p>
        <ul>
          <li><strong>RTU:</strong> Remote Terminal Unit for data acquisition</li>
          <li><strong>PLC:</strong> Programmable Logic Controller for automation</li>
          <li><strong>HMI:</strong> Interface for operators to visualize and control systems</li>
        </ul>
      </section>

      {/* Section 2: OSI Model + Dummy HMI */}
      <section>
        <h2 style={{ color: "#000000ff" }}>OSI Model in SCADA Context</h2>
        <p>The OSI model helps describe how SCADA systems communicate across networks:</p>
        <ol>
          <li><strong>Physical:</strong> Ethernet cables, fiber optics</li>
          <li><strong>Data Link:</strong> MAC addressing, switches</li>
          <li><strong>Network:</strong> IP addressing, routing</li>
          <li><strong>Transport:</strong> TCP/UDP protocols</li>
          <li><strong>Session:</strong> Persistent connections for data exchange</li>
          <li><strong>Presentation:</strong> Data formatting (e.g., JSON, XML)</li>
          <li><strong>Application:</strong> SCADA software, HMIs</li>
        </ol>

        {/* Dummy HMI Panel */}
        <div style={{
          marginTop: "2rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9"
        }}>
          <h3>Substation HMI Panel</h3>
          <p><strong>Transformer 1:</strong> 138kV → 13.8kV | Status: <span style={{ color: "green" }}>Online</span></p>
          <p><strong>Breaker A:</strong> Position: <span style={{ color: "red" }}>Open</span></p>
          <p><strong>Voltage Level:</strong> 13.6kV</p>
          <p><strong>Temperature Sensor:</strong> 45°C</p>
        </div>
      </section>
    </div>
  );
};

export default SCADA;
