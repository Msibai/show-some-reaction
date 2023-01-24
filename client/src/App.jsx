import "./App.css";
import React, { useState } from "react";
import ShowAPI from "./ShowAPI.jsx";
import Filter from "./Filter.jsx";
import ShowCard from "./ShowCard.jsx";
import DropDownSearch from "./DropDownSearch.jsx";

function App() {
  const [showData, setShowData] = useState(ShowAPI);
  const [filteredData, setFilteredData] = useState(null);

  return (
    <div className="home-main-wrapper">
      <div className="search-wrapper">
        <Filter
          showData={showData}
          setShowData={setShowData}
          setFilteredData={setFilteredData}
        />
      </div>
      <div className="show-wrapper">
        <DropDownSearch
          showData={showData}
          setShowData={setShowData}
          setFilteredData={setFilteredData}
        />
      </div>
      {filteredData ? (
        <ShowCard showData={filteredData} />
      ) : (
        <ShowCard showData={showData} />
      )}
    </div>
  );
}

export default App;
