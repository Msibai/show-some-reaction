import React from 'react';

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
                                        <span className="card-description"> {curElem.description}</span>
                                    </div>
                                    <img src={curElem.image} alt="images" className="card-image"/>
                                    <span> <button className="buy-tickets" onClick="/"> Buy Tickets </button></span>
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