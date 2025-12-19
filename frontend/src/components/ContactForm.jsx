import { useState } from "react";
import API from "../services/api";

export default function ContactForm() {
  const [form, setForm] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/contact", form);
      alert("Contact form submitted successfully");
      setForm({});
    } catch (err) {
      console.error(err);
      alert("Backend not connected");
    }
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form style={formStyle} onSubmit={submit}>
        <input placeholder="Full Name" onChange={e => setForm({...form, fullName:e.target.value})} />
        <input placeholder="Email Address" onChange={e => setForm({...form, email:e.target.value})} />
        <input placeholder="Mobile Number" onChange={e => setForm({...form, mobile:e.target.value})} />
        <input placeholder="City" onChange={e => setForm({...form, city:e.target.value})} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

const formStyle = {
  maxWidth: 500,
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gap: 15,
};
