import { useEffect, useState } from "react";
import API from "../services/api";

export default function ViewContacts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/contact").then(res => setData(res.data));
  }, []);

  return (
    <>
      <h3>Contact Forms</h3>
      {data.map(d => (
        <p key={d._id}>{d.fullName} - {d.email}</p>
      ))}
    </>
  );
}
