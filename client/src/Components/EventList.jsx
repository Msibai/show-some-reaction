import "../css/home.css";
import { Link } from "react-router-dom";
import globalContext from "../context/GlobalContext.jsx";
import { useContext } from "react";
import "../css/eventList.css";

export default function EventList(props) {
  const { showList } = useContext(globalContext);
  let len = props.unique.length;
  return (
    <section className="main-event-container">
      {len === 0 ? (
        <div className="no-data-found">
          {" "}
          <p>No event for your selected criteria available.</p>{" "}
          <button
            onClick={() => {
              props.setFilteredData(showList);
            }}
          >
            {" "}
            All shows{" "}
          </button>{" "}
        </div>
      ) : (
        <EventCards />
      )}
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
          <h2>{details.name}</h2>
          <Link to={`${details.name}`}>
            <img src={details.image} alt="event image" className="card-image" />
          </Link>
        </div>
        <p>Opening: {details.date}</p>
        <Link to={"eventselection"} state={{ data: details.name }}>
          <button className="buy-tickets">Buy Tickets</button>
        </Link>
      </div>
    );
  }
}
