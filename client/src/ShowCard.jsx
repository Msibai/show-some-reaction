import React from 'react';
import './App.css';

function ShowCard({showData}) {
    return (
        <>
            <section className="main-card-container">
                {
                    showData.map( (curElem) => {
                        return (
                            <>
                                <div className="card-container" key={curElem.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="card-title">{curElem.name}</h2>
                                            <img src={curElem.image} alt="images" className="card-image"/>
                                        </div>
                                        <h4 className="show-date">  {curElem.date}
                                            <span > <button className="buy-tickets" onClick="/"> Buy Tickets </button></span> </h4>
                                        <div className="card-info">
                                            <span className="card-description"> {curElem.description}</span>
                                        </div>

                                    </div>
                                </div>


                            </>
                        );
                    })
                }
            </section>
        </>

    );
}

export default ShowCard;