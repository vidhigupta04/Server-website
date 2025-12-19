import { useState } from "react";
import API from "../services/api";

export default function AddProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await API.post("/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Project added successfully");
    } catch (err) {
      alert("Error adding project");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Add Project</h2>
      <input placeholder="Project Name" onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button>Add</button>
    </form>
  );
}
