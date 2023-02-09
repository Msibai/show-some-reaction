import SearchByName from "./SearchByName.jsx";
import SearchByPrice from "./SearchByPrice.jsx";
import SearchByDate from "./SearchByDate.jsx";
import "../css/filter.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Filter(props) {
  return (
    <div className="filter">
      <SearchByName
        filteredData={props.filteredData}
        setFilteredData={props.setFilteredData}
      />
      <SearchByPrice
        filteredData={props.filteredData}
        setFilteredData={props.setFilteredData}
      />
      <SearchByDate
        filteredData={props.filteredData}
        setFilteredData={props.setFilteredData}
      />
    </div>
  );
}
