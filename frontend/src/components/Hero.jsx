export default function Hero() {
  return (
    <div style={hero}>
      <h1>We Build Digital Experiences</h1>
      <p>Creative solutions for modern businesses</p>
    </div>
  );
}

const hero = {
  height: "90vh",
  background: "linear-gradient(120deg,#667eea,#764ba2)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
