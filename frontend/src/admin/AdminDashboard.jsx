import AddProject from "./AddProject";
import AddClient from "./AddClient";
import ViewContacts from "./ViewContacts";
import ViewSubscribers from "./ViewSubscribers";

export default function AdminDashboard() {
  return (
    <section>
      <h2>Admin Panel</h2>
      <AddProject />
      <AddClient />
      <ViewContacts />
      <ViewSubscribers />
    </section>
  );
}
