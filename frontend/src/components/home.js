import React, {useState} from "react";
// import styled from "styled-components";
import "./styles/home.css";
// import Events from "./data/events.json";

// function Event(props){
//   // display event name, event Image, event description, event start/end Date, event age requirement
// };

const Event = (props) => {
  return(
    <div class="event">
      <img src={props.image} width="200px" height="300px" alt={props.eventName}/>
      <h2>{props.eventName}</h2>
      <p>{props.city}, {props.state} {props.zipcode}</p>
      <h3>{props.description}</h3>
    </div>
  );
}

const Home = () => {
  const [input,setInput] = useState('')
  const[events,setEvents] = useState([])
  const[ageOption,setAge] = useState('')
  // const eventList = events.map((ev) => <Events key={ev.id} events={ev}/>)
  const inputHandler = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)

    if(e.target.value.length === 5 && !isNaN(e.target.value)) {
      console.log("the input is " + e.target.value);
      fetch(`http://localhost:8080/events/?zipcode_like=${input}`)
      .then((res) => res.json()) 
      .then((data) => 
      {
        console.log(data)
        //not working?
        //appends to the array
        // setEvents(currentArray => [...currentArray,...data])
        setEvents([...data])
      })
      // .catch(err => {
      //   console.log("no results!")
      // })
      // console.log(events)
    }
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
      {/* <p>The current input is: {input}</p> */}
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
        Results:
        <div className="events">
          {events.map((entry,i) => <Event 
                                  data={entry}
                                  eventName={entry.eventName} 
                                  description={entry.description} 
                                  ageRequirement={entry.ageRequirement} 
                                  image={entry.image} 
                                  city={entry.city} 
                                  state={entry.state} 
                                  zipcode={entry.zipcode}/>)}
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
