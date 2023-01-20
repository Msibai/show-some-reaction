import './App.css'
import Footer from "./Footer.jsx";
import React from "react";
import Navbar from './Navbar';
import ShowAPI from "./ShowAPI.jsx";
import ShowCard from "./ShowCard.jsx";
import {useState} from "react";
import SearchByName from "./SearchByName.jsx";

function App() {

    const [showData, setShowData] = useState(ShowAPI);
    const [filteredData, setFilteredData] = useState(null);

    return (
        <>

            <Navbar/>
            <SearchByName showData={showData} setFilteredData={setFilteredData}/>
            {filteredData ?
                (
                    <ShowCard showData={filteredData} />
                ) :
                (
                    <ShowCard showData={showData} />

                )
            }
            <Footer/>

        </>

    )
}

export default App


