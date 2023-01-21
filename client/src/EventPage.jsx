import {useLocation} from "react-router-dom";
import ShowAPI from "./showAPI.jsx";

export default function EventPage () {
    const location = useLocation();
    console.log(location);
    return (
       <>
           <h1 className= "event-category"> {location.state.category} Event </h1>

           <div className="information-section">
               <div className="event-information-section">
               <h2 className="heading-general-info"> General Information about the event </h2>
               <p className="event-description"> {location.state.description} </p>
               </div>

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
               </div>


           </div>

       </>
    )
}