export default function Navbar() {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={nav}>
      <h2>CreativeStudio</h2>
      <div style={links}>
        <span onClick={() => go("projects")}>Projects</span>
        <span onClick={() => go("clients")}>Clients</span>
        <span onClick={() => go("contact")}>Contact</span>
        <span onClick={() => go("newsletter")}>Newsletter</span>
      </div>
    </nav>
  );
}

const nav = {
  position: "sticky",
  top: 0,
  background: "white",
  padding: "15px 60px",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  zIndex: 1000,
};

const links = {
  display: "flex",
  gap: "25px",
  cursor: "pointer",
};
