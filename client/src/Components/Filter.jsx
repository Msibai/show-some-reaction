import SearchByName from "./SearchByName.jsx";
import SearchByPrice from "./SearchByPrice.jsx";
import SearchByDate from "./SearchByDate.jsx";

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
