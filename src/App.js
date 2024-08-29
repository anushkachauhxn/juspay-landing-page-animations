import React from "react";
import Navbar from "./Components/Navbar";
import GlobalOutcomes from "./Components/GlobalOutcomes";

const App = () => {
  return (
    <div className="app">
      <div className="section">
        <div className="container">
          <Navbar />
          <GlobalOutcomes />
        </div>
      </div>
    </div>
  )
}

export default App