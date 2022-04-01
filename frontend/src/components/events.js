import styled from "styled-components";
// import eventDB from "./data/events.json";

const Events = () => {
    return(
        <div>
            getFetchUsers() {
            this.setState({
                loading: true
            }, () => {
                fetch("http://localhost:8000/events").then(res => res.json()).then(result => this.setState({
                    loading: false,
                    users: result
                })).catch(console.log);
            })
        }
            {/* <Event /> */}
           {/* fetch(eventDB)
          .then(function(response){
            return response.json();
          })
          .then(function(myJson){
            console.log(JSON.stringify(myJson));
          }); */}
        </div>
    )
}

const Event = styled.div`
  width: 15%;
  height: 300px;
`;

export default Event;