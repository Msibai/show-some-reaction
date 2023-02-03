import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import VenueLocationBox from "./VenueLocationBox.jsx";
import showAPI from "../showAPI.jsx";


export default function () {
  const [filteredData, setFilteredData] = useState(showAPI)
  const location = useLocation();
  const navigate = useNavigate();
  const event = filteredData.find(event=> event.id === parseInt(useParams().id))
  const [isLess, setIsLess] = useState(false);

  function goToBooking() {
    navigate("/BookingPage");
  }

  return (
    <div className="full-event-container">
      <div className="trailer-component">
        <div className="trailer">
          <img src={event.trailer} className="trailer-photo" />
        </div>

        <div className="trailer-buttons">
          <button className="buy-button" onClick={() => goToBooking()}>
            Buy tickets
          </button>
          <button className="share-button">Share event</button>
        </div>
      </div>

      <VenueLocationBox />

      <div className="information-section">
        <div className="event-information-section">
          <h2 className="heading-general-info">
            {" "}
            General Information about the event{" "}
          </h2>
          <p className="event-description"> {event.description} </p>
        </div>
        <button
          className="hide-show-button"
          type="button"
          onClick={() => setIsLess(!isLess)}
        >
          {" "}
          {isLess === false ? "More about Artist" : "Hide"}
        </button>
        {isLess && (
          <div className="artist-information-section">
            <div className="artist-details">
              <h2 className="artist"> Artist</h2>
              <img src={event.artist} className="artist-pic" />
              <h2 className="artist-name"> {event.name}</h2>
            </div>

            <div className="artist-info-section">
              <h2> About: </h2>
              <p> {event.about}</p>
              <h2> Life: </h2>
              <p> {event.life}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}