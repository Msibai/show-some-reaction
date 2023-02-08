import BookingCard from "./BookingCard.jsx";
import "../css/EventSelectionPage.css";
import { useContext } from "react";
import globalContext from "../context/GlobalContext.jsx";
import { useLocation, useParams } from "react-router-dom";

export default function EventSelectionPage() {
  const { showList } = useContext(globalContext);
  const location = useLocation();
  const selectedShow = showList.filter(
    (show) => show.name === location.state.data
  );
  const ShowLocations = [...new Set(selectedShow.map((show) => show.location))];
  const grouped = groupBy(selectedShow, (show) => show.location);

  return (
    <div className="booking">
      <h2>Please select a show</h2>
      <div className="cards-by-location">
        {ShowLocations.map((location) => {
          const showByLocation = grouped.get(location);
          return (
            <div key={location} className="locations">
              <h3>{location}</h3>
              <div className="cards-container">
                {showByLocation.map((show) => (
                  <BookingCard key={show.id} {...show} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  function groupBy(showList, keyGetter) {
    const map = new Map();
    showList.forEach((show) => {
      const key = keyGetter(show);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [show]);
      } else {
        collection.push(show);
      }
    });
    return map;
  }
}
