import { useEffect, useState } from "react";
import showAPI from "../showAPI.jsx";

export default function (props) {
  const [query, setQuery] = useState(null);
  const showList = Object.values(props.filteredData);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query === "") {
      props.setFilteredData(null);
    } else if (query) {
      props.setFilteredData(
        showAPI.filter((show) => {
          if (show.name.toLowerCase().includes(query.toLowerCase())) {
            return show;
          }
        })
      );
    }
  }, [query]);

  return (
    <>
      <div className="search-by-name">
        <div className="container">
          <label>Search a show by name</label>
          <div className="inner-container">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#657789"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className="input-container">
              <input
                type="search"
                placeholder="Find your favourite show..."
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
