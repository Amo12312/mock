// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./style.css";

// export default function AddPassword({ addPassword }) {
//   const [website, setWebsite] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleAdd = () => {
//     if (website && username && password) {
//       addPassword({ website, username, password });
//       setWebsite("");
//       setUsername("");
//       setPassword("");
//       navigate("/passwords"); // Navigate to password list
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="header">🔑 Add Password</h1>
//       <div className="card">
//         <input type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} className="input-field" />
//         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field" />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
//         <button onClick={handleAdd} className="add-button">➕ Add Password</button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function AddPassword({ addPassword }) {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state for validation
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!website || !username || !password) {
      setError("⚠️ Please fill in all fields before adding!");
      return;
    }

    addPassword({ website, username, password });
    setWebsite("");
    setUsername("");
    setPassword("");
    setError(""); // Clear error after successful add
    navigate("/passwords"); // Navigate to password list
  };

  return (
    <div className="container">
      <h1 className="header">🔑 Add Password</h1>
      <div className="card">
        {error && <p className="error-message">{error}</p>} {/* Error message */}
        <input type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} className="input-field" />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
        <button onClick={handleAdd} className="add-button">➕ Add Password</button>
      </div>
    </div>
  );
}
