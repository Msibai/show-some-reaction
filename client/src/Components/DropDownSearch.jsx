import { useState } from "react";
import Filter from "./Filter.jsx";
import "../css/app.css";
import { FaSearch } from "react-icons/fa";

export default function (props) {
  const [searchFilterIsVisible, setSearchFilterIsVisible] = useState(false);

  return (
    <>
      <div
        className="search"
        onClick={() => {
          setSearchFilterIsVisible(!searchFilterIsVisible);
        }}
      >
        <p>Search for a specific show</p>
        <FaSearch />
      </div>
      {searchFilterIsVisible && (
        <Filter
          filteredData={props.filteredData}
          setFilteredData={props.filteredData}
        />
      )}
    </>
  );
}
