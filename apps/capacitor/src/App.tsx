function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.2rem",
        padding: "2rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 620 }}>
        <h1 style={{ fontSize: "2.4rem", margin: 0 }}>
          React + Capacitor + Convex
        </h1>
        <p style={{ color: "#475569", marginTop: "0.6rem" }}>
          Minimal starter web app living in a pnpm/Turborepo workspace. Replace
          this page and add routes as needed.
        </p>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="https://capacitorjs.com" target="_blank" rel="noreferrer">
          Capacitor docs →
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          React docs →
        </a>
        <a href="https://docs.convex.dev" target="_blank" rel="noreferrer">
          Convex docs →
        </a>
      </div>
    </main>
  );
}

export default App;
