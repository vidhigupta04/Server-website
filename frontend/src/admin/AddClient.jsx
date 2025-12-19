import API from "../services/api";

export default function AddClient() {
  const submit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await API.post("/clients", formData);
    alert("Client Added");
  };

  return (
    <form onSubmit={submit}>
      <h3>Add Client</h3>
      <input name="name" placeholder="Name" />
      <input name="designation" placeholder="Designation" />
      <input name="description" placeholder="Description" />
      <input name="image" type="file" />
      <button>Add</button>
    </form>
  );
}
