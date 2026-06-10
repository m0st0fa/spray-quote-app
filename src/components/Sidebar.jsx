export default function Sidebar({ setPage }) {
    return (
      <div
        style={{
          width: "220px",
          minHeight: "100vh",
          background: "#111827",
          padding: "25px",
          color: "white",
        }}
      >
        <h2
          style={{
            marginBottom: "40px",
            color: "#60a5fa",
          }}
        >
          Spray Quote
        </h2>
  
        <button
          onClick={() => setPage("new")}
          style={btnStyle}
        >
          📋 New Quote
        </button>
  
        <button
          onClick={() => setPage("history")}
          style={btnStyle}
        >
          📜 History
        </button>
  
        <button
          onClick={() => setPage("settings")}
          style={btnStyle}
        >
          ⚙️ Settings
        </button>
      </div>
    );
  }
  
  const btnStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    background: "#1e293b",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    textAlign: "left",
  };