import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function PasswordList({ entries, deletePassword }) {
  const [showPasswords, setShowPasswords] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="header">🔒 Saved Passwords</h1>
      <button onClick={() => navigate("/")} className="back-button">➕ Add More</button>

      <div className="card">
        <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field" />
        <label className="checkbox-container">
          <input type="checkbox" checked={showPasswords} onChange={() => setShowPasswords(!showPasswords)} />
          Show Passwords
        </label>

        {entries.length === 0 ? (
          <p className="empty-state">No Passwords Saved</p>
        ) : (
          <ul className="password-list">
            {entries.filter(entry => entry.website.includes(search)).map((entry, index) => (
              <li key={index} className="password-item">
                <span>{entry.website}</span>
                <span>{entry.username}</span>
                <span>{showPasswords ? entry.password : "••••••"}</span>
                <button onClick={() => deletePassword(index)} className="delete-button">🗑️ Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
