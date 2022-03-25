import React from "react";
import styled from "styled-components";
import "./home.css";

const event = (props) => {
  // display event name, event Image, event description, event start/end Date, event age requirement
};
const Home = () => {
  return (
    <div className="home">
      <div className="search">
        <h2>Search for events through either Zip Code or City, State</h2>
        <input
          type="text"
          placeholder="'10002' or 'Brooklyn, New York'"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        ></input>
      </div>

      <div className="filter">
        <button onClick={ToggleFilters}>Filters: </button>
        <div id="filters">
          <label htmlFor="age">| Age Requirement(s)</label>
          <select name="age">
            <option value="all-ages">All-Ages</option>
            <option value="teens">Teens</option>
            <option value="18up">18+</option>
            <option value="21up">21+</option>
          </select>
          <label htmlFor="start-date-time">| Event Start Date</label>
          <input type="date"></input>
          <label htmlFor="end-date-time">| Event End Date</label>
          <input type="date"></input>
        </div>
      </div>
      <div className="results">
        <h2>Display Results Here</h2>
        <div className="events">
          <Event />
        </div>
      </div>
    </div>
  );
};

const ToggleFilters = () => {
  var x = document.getElementById("filters");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

const Event = styled.div`
  width: 15%;
  height: 150px;
`;

export default Home;
