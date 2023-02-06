import "../css/app.css";
import { useContext, useEffect, useState } from "react";
import Filter from "./Filter.jsx";
import DropDownSearch from "./DropDownSearch.jsx";
import EventList from "./EventList.jsx";
import globalContext from "../context/GlobalContext.jsx";

export default function () {
  const data = useContext(globalContext);
  const showList = data.showList;
  const [filteredData, setFilteredData] = useState(showList);

  return (
    <div className="home-main-wrapper">
      <div className="search-wrapper">
        <Filter filteredData={filteredData} setFilteredData={setFilteredData} />
      </div>
      <div className="show-wrapper">
        <DropDownSearch
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      </div>
      <EventList filteredData={filteredData} />
    </div>
  );
}
