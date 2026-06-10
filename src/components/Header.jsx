export default function Header() {
    return (
      <div
        style={{
          height: "70px",
          background: "#0f172a",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 30px",
          borderBottom: "1px solid #1e293b",
        }}
      >
        <h2>Spray Job Quote Calculator</h2>
  
        <div>
          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "8px",
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }