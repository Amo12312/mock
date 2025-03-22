import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPassword from "../src/Component/AddPassword";
import PasswordList from "../src/Component/PasswordList";

function App() {
  const [entries, setEntries] = useState([]);

  const addPassword = (entry) => {
    setEntries([...entries, entry]);
  };

  const deletePassword = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddPassword addPassword={addPassword} />} />
        <Route path="/passwords" element={<PasswordList entries={entries} deletePassword={deletePassword} />} />
      </Routes>
    </Router>
  );
}

export default App;
