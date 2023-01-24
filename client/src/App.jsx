import "./App.css";
import React, { useState } from "react";
import ShowAPI from "./ShowAPI.jsx";
import Filter from "./Filter.jsx";
import ShowCard from "./ShowCard.jsx";

function App() {
  const [showData, setShowData] = useState(ShowAPI);
  const [filteredData, setFilteredData] = useState(null);

  return (
    <>
      <Filter
        showData={showData}
        setShowData={setShowData}
        setFilteredData={setFilteredData}
      />
      gi
      {filteredData ? (
        <ShowCard showData={filteredData} />
      ) : (
        <ShowCard showData={showData} />
      )}
    </>
  );
}

export default App;
