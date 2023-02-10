import { useContext, useEffect, useState } from "react";
import "../css/home.css";
import globalContext from "../context/GlobalContext.jsx";

export default function (props) {
  const [query, setQuery] = useState(null);
  const { showList } = useContext(globalContext);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query === "") {
      props.setFilteredData(showList);
    } else if (query) {
      props.setFilteredData(
        showList.filter((show) => {
          if (show.name.toLowerCase().includes(query.toLowerCase())) {
            return show;
          } else {
            return null;
          }
        })
      );
    }
  }, [query]);

  return (
    <div className="search-by-name">
      <p>Search</p>
      <input
        type="search"
        placeholder="Find your favourite show..."
        onChange={handleChange}
      />
    </div>
  );
}
