import { useContext, useEffect, useRef, useState } from "react";
import "../css/home.css";
import globalContext from "../context/GlobalContext.jsx";

export default function (props) {
  const [price, setPrice] = useState("");
  const { showList } = useContext(globalContext);
  const rangeRef = useRef();

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const handleReset = () => {
    props.setFilteredData(showList);
    setPrice(null);
    rangeRef.current.value = 0;
  };

  useEffect(() => {
    if (price) {
      props.setFilteredData(
        showList.filter((show) => {
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
        <p className="budget">What is your budget?</p>
        <div className="inner-container">
          <output htmlFor="range" className="output">
            {price}
          </output>
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
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}
