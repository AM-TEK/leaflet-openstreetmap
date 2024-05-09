"use client";
import React, { useState } from "react";
import Search from "../components/Search";
import Map from "../components/Map";

function App() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ width: "50vw", height: "100%" }}>
        <Map selectPosition={selectPosition} />
      </div>
      <div style={{ width: "50vw" }}>
        <Search selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
      </div>
    </div>
  );
}

export default App;