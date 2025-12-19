import { useState } from "react";
import API from "../services/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const subscribe = async () => {
    try {
      await API.post("/subscribe", { email });
      alert("Subscribed successfully");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Backend not connected");
    }
  };

  return (
    <section id="newsletter" style={{ background: "#667eea", color: "white", textAlign: "center" }}>
      <h2>Subscribe Newsletter</h2>
      <input value={email} placeholder="Enter your email" onChange={e => setEmail(e.target.value)} />
      <br /><br />
      <button onClick={subscribe}>Subscribe</button>
    </section>
  );
}
