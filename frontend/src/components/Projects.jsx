import { useEffect, useState } from "react";
import API from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="projects">
      <h2>Our Projects</h2>

      <div className="project-grid">
        {projects.map(p => (
          <div className="project-card" key={p._id}>
            <img src={p.image} alt={p.name} />
            <div className="overlay">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
