import { useState, useEffect } from "react";
import { getItemsFromSheet } from "../services/googleSheets";

export default function NewQuote() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItemsFromSheet().then((data) => {
      const loadedItems = data.map((item) => ({
        ...item,
        qty: 0,
      }));

      setItems(loadedItems);
    });
  }, []);

  const updateQty = (id, value) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, qty: Number(value) || 0 }
          : item
      )
    );
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        name: "Custom Item",
        price: 1,
        qty: 1,
      },
    ]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "25px" }}>
        <h1
          style={{
            fontSize: "38px",
            fontWeight: "700",
            color: "white",
            marginBottom: "10px",
          }}
        >
          New Quote
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "16px",
          }}
        >
          Create and manage spray job quotations
        </p>
      </div>

      {/* Main Layout */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            flex: 1,
            minWidth: "650px",
          }}
        >
          {/* Banner */}
          <div
            style={{
              background: "#dbeafe",
              color: "#1e40af",
              padding: "16px",
              borderRadius: "12px",
              marginBottom: "20px",
              fontWeight: "500",
            }}
          >
            📊 Prices are loaded from Google Sheet
          </div>

          {/* Table */}
          <div
            style={{
              background: "#1e293b",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <table
              style={{
                width: "100%",
                color: "white",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {items.map((item, index) => (
                  <tr key={item.id}>
                    <td style={{ padding: "12px" }}>
                      {index + 1}
                    </td>

                    <td>{item.name}</td>

                    <td>${item.price}</td>

                    <td>
                      <input
                        type="number"
                        value={item.qty}
                        onChange={(e) =>
                          updateQty(
                            item.id,
                            e.target.value
                          )
                        }
                        style={{
                          width: "70px",
                          padding: "8px",
                          borderRadius: "8px",
                          border: "none",
                        }}
                      />
                    </td>

                    <td>
                      $
                      {(
                        item.price * item.qty
                      ).toFixed(2)}
                    </td>

                    <td>
                      <button
                        onClick={() =>
                          deleteItem(item.id)
                        }
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "#ef4444",
                          fontSize: "16px",
                        }}
                      >
                        ❌
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              onClick={addItem}
              style={{
                marginTop: "20px",
                padding: "12px 18px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              ➕ Add Item
            </button>
          </div>
        </div>

        {/* Right Summary */}
        <div
          style={{
            width: "320px",
          }}
        >
          <div
            style={{
              background: "#111827",
              padding: "25px",
              borderRadius: "16px",
              color: "#fff",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Quote Summary
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>Subtotal</span>
              <span>
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px",
              }}
            >
              <span>Tax</span>
              <span>$0.00</span>
            </div>

            <hr
              style={{
                borderColor: "#374151",
                marginBottom: "15px",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "24px",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              <span>Total</span>

              <span
                style={{
                  color: "#22c55e",
                }}
              >
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <button
              style={{
                width: "100%",
                padding: "14px",
                background: "#16a34a",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              💾 Save Quote
            </button>
          </div>

          <div
            style={{
              background: "#1e293b",
              color: "white",
              padding: "20px",
              borderRadius: "16px",
              marginTop: "20px",
            }}
          >
            <h3>Recent Quotes</h3>

            <p>Quote #001 - $850</p>
            <p>Quote #002 - $420</p>
            <p>Quote #003 - $1200</p>
          </div>
        </div>
      </div>
    </div>
  );
}