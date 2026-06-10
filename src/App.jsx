import { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import NewQuote from "./pages/NewQuote";
import History from "./pages/History";
import Settings from "./pages/Settings";

function App() {
  const [page, setPage] = useState("new");

  const renderPage = () => {
    switch (page) {
      case "history":
        return <History />;

      case "settings":
        return <Settings />;

      default:
        return <NewQuote />;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f172a",
      }}
    >
      <Sidebar setPage={setPage} />

      <div
        style={{
          flex: 1,
        }}
      >
        <Header />

        <div
          style={{
            padding: "30px",
          }}
        >
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;