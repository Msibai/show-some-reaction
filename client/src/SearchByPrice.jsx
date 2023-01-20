import {useEffect, useRef, useState} from "react";

export default function SearchByPrice(props) {
    const [price, setPrice] = useState("");
    const showList = Object.values(props)[0];
    const rangeRef = useRef();

    const handleChange = (e) => {
        setPrice(e.target.value);
    };

    const handleReset = () => {
        props.setFilteredData(null)
        setPrice(null);
        rangeRef.current.value = 0;

    }

    useEffect(() => {
        if (price) {
            props.setFilteredData(showList.filter(show => {
                if (parseInt(show.price, 10) < parseInt(price, 10)) {
                    return show
                }
            }));
        }
    }, [price])

    return (
        <>
            <div className="searchByPrice">
                <div className="container">
                    <p className="budget">What is your budget?</p>
                    <div className="innerContainer">
                        <output htmlFor="range" className="output">{price}</output>
                        <div className="inputContainer">
                            <input ref={rangeRef} type="range" name="range" id="range" min="0" max="1000" step="50"
                                   onInput={handleChange}/>
                        </div>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}
