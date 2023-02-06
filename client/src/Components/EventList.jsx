import "../css/app.css";
import { Link } from "react-router-dom";
import "../css/showcard.css";

export default function EventList({ filteredData }) {
  return (
    <section className="main-event-container">
      <EventCards />
    </section>
  );

  function EventCards() {
    return filteredData.map((show) => (
      <EventCard key={show.id} details={show} />
    ));
  }

  function EventCard({ details }) {
    return (
      <div className="card-container">
        <div className="body">
          <h2 className="card-title">{details.name}</h2>
          <Link to={`${details.id}`}>
            <img src={details.image} alt="event image" className="card-image" />
          </Link>
        </div>
        <div>
          <h2 className="show-date">{details.date}</h2>
          <Link to={"/ArtistEventsPage"}>
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
