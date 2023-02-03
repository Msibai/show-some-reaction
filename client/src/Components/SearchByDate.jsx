import { useRef } from "react";
import showAPI from "../showAPI.jsx";

export default function (props) {
  const showList = Object.values(props.filteredData);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  const sortByDate = () => {
    props.setFilteredData(
      showList.sort((a, b) => new Date(a.date) - new Date(b.date))
    );
  };

  const getAllShow = () => {
    props.setFilteredData(showAPI);
  };

  const getTodaysShow = () => {
    const today = new Date().toDateString();
    props.setFilteredData(
      showAPI.filter((show) => {
        if (new Date(show.date).toDateString() === today) {
          return show;
        }
      })
    );
  };

  const getShowByDateRange = () => {
    const from = new Date(fromRef.current.value).valueOf();
    const to = new Date(toRef.current.value).valueOf();

    if (from && to) {
      props.setFilteredData(
        showList.filter((show) => {
          if (
            new Date(show.date).valueOf() >= from &&
            new Date(show.date).valueOf() <= to
          ) {
            return show;
          }
        })
      );
    }
  };

  function handleReset() {
    fromRef.current.value = null;
    toRef.current.value = null;
    props.setFilteredData(null);
  }

  return (
    <div className="search-by-date">
      <div className="container">
        <p className="date">Which date is best for you?</p>
        <div className="inner-container">
          <button onClick={sortByDate}>Sort by date</button>
          <button onClick={getTodaysShow}>Today's shows</button>
          <button onClick={getAllShow}>All Shows</button>
        </div>
        <div className="datepicker">
          <label htmlFor="from">From</label>
          <div className="input-container">
            <input ref={fromRef} id="from" type="date" max="9999-12-31" />
          </div>
          <label htmlFor="to">To</label>
          <div className="input-container">
            <input ref={toRef} id="to" type="date" max="9999-12-31" />
          </div>
          <button onClick={getShowByDateRange}>Get shows</button>
          <button onClick={handleReset}>Clear dates</button>
        </div>
      </div>
    </div>
  );
}
