import { useEffect, useState } from "react";
import API from "../services/api";

export default function ViewSubscribers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/subscribe").then(res => setData(res.data));
  }, []);

  return (
    <>
      <h3>Subscribers</h3>
      {data.map(s => (
        <p key={s._id}>{s.email}</p>
      ))}
    </>
  );
}
