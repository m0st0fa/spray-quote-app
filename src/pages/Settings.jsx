export default function Settings() {
    return (
      <div>
        <h1
          style={{
            color: "white",
            marginBottom: "20px",
          }}
        >
          Settings
        </h1>
  
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "15px",
            color: "white",
            maxWidth: "600px",
          }}
        >
          <h3>Allowed Emails</h3>
  
          <input
            type="email"
            placeholder="uncle@gmail.com"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
              borderRadius: "8px",
              border: "none",
            }}
          />
  
          <button
            style={{
              marginTop: "15px",
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "8px",
            }}
          >
            Add Email
          </button>
  
          <div style={{ marginTop: "25px" }}>
            <p>✓ mostofa@gmail.com</p>
            <p>✓ uncle@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }