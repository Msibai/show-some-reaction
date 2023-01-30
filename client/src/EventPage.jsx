import {useLocation, useNavigate} from "react-router-dom";
import ShowAPI from "./showAPI.jsx";
import {useState} from "react";
import AddressBox from "./AddressBox.jsx";

export default function EventPage () {
    const location = useLocation();
    const navigate = useNavigate()

    const [isLess, setIsLess] = useState(false);

    function goToBooking(){
        navigate("/BookingPage")
    }

    return (
       <div className="full-event-container">
           <div className="trailer-component">
           <div className="trailer">
               <img src= {location.state.trailer} className="trailer-photo"/>
           </div>

           <div className="trailer-buttons">
               <button className="buy-button" onClick={ () => goToBooking()}>Buy tickets</button>
               <button className="share-button">Share event</button>
           </div>

           </div>

<AddressBox/>

           <div className="information-section">
               <div className="event-information-section">
               <h2 className="heading-general-info"> General Information about the event </h2>
               <p className="event-description"> {location.state.description} </p>
               </div>
               <button className="hide-show-button" type="button" onClick={ ()=> setIsLess(!isLess)}> {isLess === false ? 'More about Artist' : 'Hide'}</button>
               { isLess &&
               <div className="artist-information-section">
               <div className="artist-details">
                   <h2 className= "artist"> Artist</h2>
                   <img src={location.state.artist} className="artist-pic"/>
                   <h2 className="artist-name"> {location.state.name}</h2>
               </div>

               <div className="artist-info-section">
                   <h2 > About: </h2>
                   <p > {location.state.about}</p>
                   <h2> Life: </h2>
                   <p> {location.state.life}</p>
               </div>

               </div>  }



           </div>

       </div>
    )
}