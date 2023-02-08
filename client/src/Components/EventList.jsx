import "../css/app.css";
import { Link } from "react-router-dom";
import "../css/eventList.css";

export default function EventList(props) {
  return (
    <section className="main-event-container">
      <EventCards />
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
          <h2 className="show-date">Opening: {details.date}</h2>
          <Link to={"eventselection"} state={{ data: details.name }}>

            <button className="buy-tickets">Buy Tickets</button>
          </Link>
        </div>
      </div>
    );
  }
}
