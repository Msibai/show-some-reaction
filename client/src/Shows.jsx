import React from 'react';
import ShowAPI from "./ShowAPI.jsx";
import ShowCard from "./ShowCard.jsx";

function Shows() {
    const [showData, setShowData]= React.useState(ShowAPI);

    return (
        <>
            <h1> Show your REACTion </h1>
            <nav className="navbar">
                <div className="btn-group">
                </div>
            </nav>
            <ShowCard showData={showData}/>
        </>
    );
}

export default Shows;