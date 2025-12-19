import { useEffect, useState } from "react";
import API from "../services/api";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    API.get("/clients")
      .then(res => setClients(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="clients" style={{ background: "white" }}>
      <h2>Happy Clients</h2>
      <div style={grid}>
        {clients.map(c => (
          <div key={c._id} style={card}>
            <img src={c.image} style={img} />
            <p>{c.description}</p>
            <h4>{c.name}</h4>
            <span>{c.designation}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const grid = { display: "flex", gap: "25px", flexWrap: "wrap", justifyContent: "center" };
const card = { width: 260, padding: 20, borderRadius: 15, background: "#f6f8fc", textAlign: "center" };
const img = { width: 80, borderRadius: "50%" };
