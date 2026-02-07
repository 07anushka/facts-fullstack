import { useEffect, useState } from "react";
import "./index.css";

function App() {

  const [facts, setFacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/facts/")
      .then(response => response.json())
      .then(data => setFacts(data))
      .catch(error => console.log("ERROR:", error));
  }, []);

  // SEARCH BY FACT TEXT + ID
  const filteredFacts = facts.filter(f =>
    f.fact.toLowerCase().includes(search.toLowerCase()) ||
    String(f.id).includes(search)
  );

  return (
    <div className="container">

      <h2 className="title">Facts from Django</h2>

      <input
        className="search-box"
        type="text"
        placeholder="Search by fact or ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredFacts.length === 0 && (
        <p className="loading">No facts found...</p>
      )}

      {filteredFacts.map(f => (
        <div className="fact-card" key={f.id}>
          <p className="fact-text">
            <b>ID {f.id}:</b> {f.fact}
          </p>
        </div>
      ))}

    </div>
  );
}

export default App;
