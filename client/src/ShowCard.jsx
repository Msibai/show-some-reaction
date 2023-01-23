import React from 'react';
import './App.css';
import { useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
function ShowCard({showData}) {
    const navigate = useNavigate()
    function goToEvent(curElem){
        const data = curElem;
        navigate("/EventPage" , {state: { id: data.id , description: data.description, artist: data.artist , name: data.name , about: data.about  , life: data.life , category: data.category }})
    }
    return (
            <section className="main-card-container">
                {
                    showData.map( (curElem) => {
                        return (
                                <div className="card-container" key={curElem.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="artist-hidden-info" style={{ display: "none"}}>
                                                <img src={curElem.artist} alt="artistPhoto"/>
                                                <p> {curElem.about}</p>
                                                <p> {curElem.life}</p>
                                                <p> {curElem.location}</p>
                                                <p> {curElem.category}</p>
                                            </div>

                                            <h2 className="card-title">{curElem.name}</h2>

                                                <img src={curElem.image} alt="images" onClick={ () => goToEvent(curElem)} className="card-image"/>
                                        </div>
                                        <h4 className="show-date">  {curElem.date}
                                             <button className="buy-tickets" onClick="/"> Buy Tickets </button> </h4>
                                        <div className="card-info">
                                            <span className="card-description"> {curElem.description}</span>
                                        </div>

                                    </div>
                                </div>
                        );
                    })
                }
            </section>
    );
}

export default ShowCard;