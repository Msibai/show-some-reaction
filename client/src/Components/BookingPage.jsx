import SelectAShow from "./SelectAShow.jsx";
import "../css/bookingpage.css"

export default function BookingPage({showData}) {


    return (
        <div>
            <h2 className="choose-a-show-headline">Please select a show</h2>
            < SelectAShow />
        </div>
    );
}
