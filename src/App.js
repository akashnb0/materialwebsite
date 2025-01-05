// Import necessary libraries
import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data.json";
import dropdownIcon from "./dropdown.png";
import downloadIcon from "./download.png";
import linkedinIcon from "./linkedin.png";
import whatsappIcon from "./whatsapp.png";
import gmailIcon from "./gmail.png";

const App = () => {
  const [materials, setMaterials] = useState({ software: [], embedded: [], hardware: [], vlsi: [] });
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState(null); // Store the currently opened section

  useEffect(() => {
    // Simulate fetching data from JSON file
    setMaterials(data);
    setLoading(false);
  }, []);

  const toggleSection = (category) => {
    setExpandedSections((prev) => (prev === category ? null : category)); // Close if open, otherwise open the clicked section
  };

  const Card = ({ thumbnail, title, link }) => (
    <div className="card">
      <img src={thumbnail} alt={title} className="card-thumbnail" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-actions">
          <a href={link} download className="card-button download">
            <img src={downloadIcon} alt="Download" />
          </a>
          <a href="https://www.linkedin.com/in/akashnb" target="_blank" rel="noopener noreferrer" className="card-button linkedin">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );

  const Section = ({ title, materials, category }) => (
    <section className="section">
      <div className="section-header" onClick={() => toggleSection(category)}>
        <h2 className="section-title">{title}</h2>
        <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon" />
      </div>
      {expandedSections === category && (
        <div className="cards-container">
          {materials.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      )}
    </section>
  );

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="app">
      <header className="header">
        <h1>Materials to Land in Your Dream Job!</h1>
        <p>Akash Satheesh Kumar</p>
        <div className="header-icons">
          <a href="https://www.linkedin.com/in/akashnb" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="mailto:akashsweb@gmail.com">
            <img src={gmailIcon} alt="Gmail" />
          </a>
          <a href="https://whatsapp.com/channel/0029Vaz2guF4dTnNgFOtiq0q" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
        </div>
      </header>

      <main>
        <Section title="Software" materials={materials.software} category="software" />
        <Section title="Embedded" materials={materials.embedded} category="embedded" />
        <Section title="Hardware" materials={materials.hardware} category="hardware" />
        <Section title="VLSI" materials={materials.vlsi} category="vlsi" />
      </main>

      <footer className="footer">
        <p>Good things take time.</p>
        <p>Akash Satheesh Kumar</p>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/akashnb" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="mailto:akashsweb@gmail.com">
            <img src={gmailIcon} alt="Gmail" />
          </a>
          <a href="https://whatsapp.com/channel/0029Vaz2guF4dTnNgFOtiq0q" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
