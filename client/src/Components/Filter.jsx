import SearchByName from "./SearchByName.jsx";
import SearchByPrice from "./SearchByPrice.jsx";
import SearchByDate from "./SearchByDate.jsx";

export default function Filter(props) {
  return (
    <div className="filter">
      <SearchByName
        showData={props.showData}
        setFilteredData={props.setFilteredData}
      />
      <SearchByPrice
        showData={props.showData}
        setFilteredData={props.setFilteredData}
      />
      <SearchByDate
        showData={props.showData}
        setShowData={props.setShowData}
        setFilteredData={props.setFilteredData}
      />
    </div>
  );
}
