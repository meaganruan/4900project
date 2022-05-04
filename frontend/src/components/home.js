import React, {useState} from "react";
import "../styles/home.css";

const Event = (props) => {
  return(
    <div className="eventCards">
          <img src={props.image} width="200px" height="200px" alt={props.eventName}/>
          <h2>{props.eventName}</h2>
          <h3>{props.city}, {props.state} {props.zipcode}</h3>
          <h4>From {props.startDate} to {props.endDate}</h4>
          <p>{props.description}</p>
          <p>Age Requirement: {props.ageRequirement}</p>
          <button>Register</button>
    </div>
  );
}

const Home = () => {
  const [input,setInput] = useState('')
  const [events,setEvents] = useState([])
  const [ageOption,setAge] = useState('')
  const [startDate, setStart] = useState('')
  const [endDate, setEnd] = useState('')
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
    else{
      console.log("no results")
    }
  }
  return (
    <div className="home">
    <div className="search">
        <h2>Search for events through either Zip Code or City, State</h2>
        <input
        type="text"
        placeholder="'11205' or 'Brooklyn, New York'"
        onChange={inputHandler}
        value={input}/>
      </div>
    <div className="filter">
        <button onClick={ToggleFilters}>Filters: </button>
        <div id="filters">
          <label htmlFor="age">| Age Requirement(s)</label>
          <select className="age" onChange={(e)=>{setAge(e.target.value); 
            console.log("age selected:" + e.target.value);
            fetch(`http://localhost:8080/events/?zipcode_like=${input}&ageRequirement_like=${e.target.value}`)
            .then((res) => res.json()) 
            .then((data) => 
            {
              console.log(data)
              setEvents([...data])
            })
    
          }
          }>
            <option value="">All-Ages</option>
            <option value="13">Teens</option>
            <option value="18">18+</option>
            <option value="21">21+</option>
          </select>
          <label htmlFor="start-date-time">| Event Start Date</label>
          <input type="date" onChange={(e)=>{setStart(e.target.value); 
          console.log("start date:" + e.target.value);
          fetch(`http://localhost:8080/events/?zipcode_like=${input}&ageRequirement_like=${ageOption}&startDate_like=${e.target.value}`)
            .then((res) => res.json()) 
            .then((data) => 
            {
              console.log(data)
              setEvents([...data])
            })
        }
        }/>
          <label htmlFor="end-date-time">| Event End Date</label>
          <input type="date" onChange={(e)=>{setEnd(e.target.value); 
            console.log("end date:" + e.target.value);
            fetch(`http://localhost:8080/events/?zipcode_like=${input}&ageRequirement_like=${ageOption}&startDate_like=${startDate}&endDate_like=${e.target.value}`)
            .then((res) => res.json()) 
            .then((data) => 
            {
              console.log(data)
              setEvents([...data])
            })
          }}/>
        </div>
      </div>
      <div className="results">
        Results:
        <div className="events">
          {events.map((entry,i) => 
          <Event 
          key={entry.id}
          data={entry}
          eventName={entry.eventName} 
          description={entry.description} 
          ageRequirement={entry.ageRequirement} 
          image={entry.image} 
          city={entry.city} 
          state={entry.state} 
          zipcode={entry.zipcode}
          startDate={entry.startDate}
          endDate={entry.endDate}
          />)}
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
