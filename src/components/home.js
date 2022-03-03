import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="search">
        <h2>Search for events through either Zip Code or City, State</h2>
        <input placeholder="'10002' or 'Brooklyn, New York'"></input>
      </div>
      <div className="filter">Filter:</div>
      <div className="results">Display Results Here</div>
    </div>
  );
}

export default Home;
