import {useLocation} from "react-router-dom";
import AddressBox from "./AddressBox.jsx";
import {useState} from "react";
import SelectNumberOfTickets from "./SelectNumberOfTickets.jsx";

export default function SelectAShow() {
    const [numberOfTickets, setNumberOfTickets] = useState(false);


    return <div className="select-a-show-container">
        <div className="booking-information">
            <p>Information about show</p> <p>Artist</p> <p>Date and time</p> <p>Price from</p></div>
        <div>
            <div className="number-of-seats"><p className="choose-number-of-seats">Choose number of seats</p>
            <button className="drop-down-seat-button"
                    onClick={() => setNumberOfTickets(!numberOfTickets)}> {numberOfTickets === false ? ' > ' : ' v '} </button>
            {numberOfTickets && <SelectNumberOfTickets />}
        </div>
    </div>

    </div>

}

