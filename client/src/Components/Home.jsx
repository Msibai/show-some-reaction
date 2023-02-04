import "../css/app.css";
import { useState } from "react";
import Filter from "./Filter.jsx";
import DropDownSearch from "./DropDownSearch.jsx";
import showAPI from "../showAPI.jsx";
import EventList from "./EventList.jsx";


export default function () {
  const [filteredData, setFilteredData] = useState(showAPI);

  return (
    <div className="home-main-wrapper">
      <div className="search-wrapper">
        <Filter
            filteredData={filteredData}
            setFilteredData={setFilteredData}
        />
      </div>
      <div className="show-wrapper">
        <DropDownSearch
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      </div>
      <EventList filteredData={filteredData}/>
    </div>
  );
}


