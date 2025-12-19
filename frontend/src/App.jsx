import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./admin/AdminDashboard";

export default function App() {
  const isAdmin = false; // change to true for admin panel
  return isAdmin ? <AdminDashboard /> : <LandingPage />;
}
