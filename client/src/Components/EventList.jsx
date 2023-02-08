import "../css/app.css";
import {Link, NavLink} from "react-router-dom";
import "../css/showcard.css";
import globalContext from "../context/GlobalContext.jsx";
import { useContext } from "react";

export default function EventList(props) {
    const {showList} = useContext(globalContext);
    let len = props.unique.length;
  return (
    <section className="main-event-container">
        {
            (len === 0 ) ?
                <div className="no-data-found"> No event for your selected criteria available. <button onClick= { ()=> { props.setFilteredData(showList)}} > Go Back  </button> </div>
                :

      <EventCards />


        }
    </section>
  );

  function EventCards() {
    return props.unique.map((show) => (
      <EventCard key={show.name} details={show} />
    ));
  }

  function EventCard({ details }) {
    return (
      <div className="card-container">
        <div className="body">
          <h2 className="card-title">{details.name}</h2>
          <Link to={`${details.name}`}>
            <img src={details.image} alt="event image" className="card-image" />
          </Link>
        </div>
        <div>
          <h2 className="show-date">{details.date}</h2>
          <Link to={"bookingpage"} state={{ data: details.name }}>
            <button className="buy-tickets">Buy Tickets</button>
          </Link>
        </div>
        <div className="info">
          <span className="card-description">{details.description}</span>
        </div>
      </div>
    );
  }
}
