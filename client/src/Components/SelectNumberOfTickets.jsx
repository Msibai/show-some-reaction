import {useState} from "react";

export default function () {
    const [seats, setSeats] = useState(2);

    function NumberOfSeats() {

        return (
            <form>
                <input className="seat-input"
                       type="number"
                       min="1"
                       max="99"
                       value={seats}
                       onChange={() => setSeats}
                />

                <input className="submit-seats-button"
                       type="submit"
                value="OK"/>
            </form>
        )
    }

    return <div className="choose-number-of-tickets"><p className="seat-paragraph">Seats</p>
        <button className="more-or-less-button" onClick={() => setSeats(prevSeats => prevSeats < 1 ? prevSeats === 1 : prevSeats - 1)}>-</button>
        <NumberOfSeats/>
        <button className="more-or-less-button" onClick={() => setSeats(prevSeats => prevSeats + 1)} >+</button>
    </div>

}

