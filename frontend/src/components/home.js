import React, {useState} from "react";
import styled from "styled-components";
import "./styles/home.css";
// import Events from "./data/events.json";

// function Event(props){
//   // display event name, event Image, event description, event start/end Date, event age requirement
// };

const Events = (props) => {
  return(
    <div>
      <img src= "{props.image}" alt="{props.Eventname}"/>
      <h2>Event name</h2>
      <h3>city,state,zipcode</h3>
      <h3>event description</h3>
    </div>
  );
}
function stringContainsNumber(string) {
  return /\d/.test(string);
}

const Home = () => {
  const [input,setInput] = useState('')
  const[events,setEvents] = useState([])
  const inputHandler = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
    // if(e.target.value.isDigit && e.target.value.indexOf(5)===null) {
    //   console.log("zipcode");
    //   fetch('http://localhost:8000/events')
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   //check zipcodes
    // }
    // else if(stringContainsNumber(e.target.value)===false){
    //   console.log("city,state");
    //   fetch('http://localhost:8000/events')
    //   //check city/state
    // }

    fetch('http://localhost:8000/events')
    .then((res) => res.json())
    .then((data) => console.log(data),
    //set events as data
    setEvents(e.target.value.data)
    )
  }
  return (
    <div className="home">
    <div className="search">
        <h2>Search for events through either Zip Code or City, State</h2>
        <input
        type="text"
        placeholder="'10002' or 'Brooklyn, New York'"
        onChange={inputHandler}
        value={input}/>
      </div>
      <p>The current input is: {input}</p>
    <div className="filter">
        <button onClick={ToggleFilters}>Filters: </button>
        <div id="filters">
          <label htmlFor="age">| Age Requirement(s)</label>
          <select name="age">
            <option href="#/all-ages" value="all-ages">All-Ages</option>
            <option href="#/teens" value="teens">Teens</option>
            <option href="#/18" value="18up">18+</option>
            <option href="#/21" value="21up">21+</option>
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
          {/* error */}
          {events.map((event) => <Events/>)}
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



export default Home;
