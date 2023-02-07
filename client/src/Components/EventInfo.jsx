import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import VenueLocationBox from "./VenueLocationBox.jsx";
import globalContext from "../context/GlobalContext.jsx";

export default function () {
  const [selectedShow, setSelectedShow] = useState();
  const data = useContext(globalContext);
  const showList = data.showList;
  const [isLess, setIsLess] = useState(false);
  const name = useParams().name;

  useEffect(() => {
    setSelectedShow(showList.find((event) => event.name === name));
  }, [showList]);

  if (!selectedShow) {
    return <div>Loading...</div>;
  }

  return (
    <div className="full-event-container">
      <div className="trailer-component">
        <div className="trailer">
          <img src={selectedShow.trailer} className="trailer-photo" />
        </div>

        <div className="trailer-buttons">
          <Link to={"/bookingpage"} state={{ data: selectedShow.name }}>
            <button className="buy-tickets">Buy Tickets</button>
          </Link>
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
          <p className="event-description"> {selectedShow.description} </p>
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
              <img src={selectedShow.artist} className="artist-pic" />
              <h2 className="artist-name"> {selectedShow.name}</h2>
            </div>

            <div className="artist-info-section">
              <h2> About: </h2>
              <p> {selectedShow.about}</p>
              <h2> Life: </h2>
              <p> {selectedShow.life}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
