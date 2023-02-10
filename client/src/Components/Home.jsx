import "../css/home.css";
import { useContext, useEffect, useState } from "react";
import Filter from "./Filter.jsx";
import DropDownSearch from "./DropDownSearch.jsx";
import EventList from "./EventList.jsx";
import globalContext from "../context/GlobalContext.jsx";

export default function () {
  const { showList } = useContext(globalContext);

  const [filteredData, setFilteredData] = useState(showList);
  const unique = [
    ...new Map(filteredData.map((show) => [show["name"], show])).values(),
  ];

  useEffect(() => {
    setFilteredData(showList);
  }, [showList]);

  return (
    <>
      <div className="search-bar">
        <Filter filteredData={unique} setFilteredData={setFilteredData} />
      </div>
      <div className="dropdown">
        <DropDownSearch
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      </div>
      <EventList unique={unique} setFilteredData={setFilteredData} />
    </>
  );
}
