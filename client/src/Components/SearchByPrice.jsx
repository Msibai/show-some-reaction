import { useEffect, useRef, useState } from "react";
import showAPI from "../showAPI.jsx";

export default function (props) {
  const [price, setPrice] = useState("");
  const showList = Object.values(props.filteredData);
  const rangeRef = useRef();

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const handleReset = () => {
    props.setFilteredData(showAPI);
    setPrice(null);
    rangeRef.current.value = 0;
  };

  useEffect(() => {
    if (price) {
      props.setFilteredData(
        showAPI.filter((show) => {
          if (parseInt(show.price, 10) < parseInt(price, 10)) {
            return show;
          }
        })
      );
    }
  }, [price]);

  return (
    <>
      <div className="search-by-price">
        <div className="container">
          <p className="budget">What is your budget?</p>
          <div className="inner-container">
            <output htmlFor="range" className="output">
              {price}
            </output>
            <div className="input-container">
              <input
                ref={rangeRef}
                type="range"
                name="range"
                id="range"
                min="0"
                max="1000"
                step="50"
                onInput={handleChange}
              />
            </div>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}
