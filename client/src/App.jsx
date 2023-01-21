import './App.css'
import Footer from "./Footer.jsx";
import React from "react";
import Navbar from './Navbar';
import ShowAPI from "./ShowAPI.jsx";
import ShowCard from "./ShowCard.jsx";
import {useState} from "react";
import SearchByName from "./SearchByName.jsx";
import SearchByPrice from "./SearchByPrice.jsx";
import { Routes, Route } from "react-router-dom";
import EventPage from "./EventPage.jsx";

function App() {

    const [showData, setShowData] = useState(ShowAPI);
    const [filteredData, setFilteredData] = useState(null);

    return (
        <>

            <Navbar/>
            {/*<SearchByName showData={showData} setFilteredData={setFilteredData}/>*/}
            {/*<SearchByPrice showData={showData} setFilteredData={setFilteredData}/>*/}
            {/*{filteredData ?*/}
            {/*    (*/}
            {/*        <ShowCard showData={filteredData} />*/}
            {/*    ) :*/}
            {/*    (*/}
            {/*        <ShowCard showData={showData} />*/}

            {/*    )*/}
            {/*}*/}
            <Routes>
                <Route path="/" element={<ShowCard showData={showData} />} />
            </Routes>
            <Routes>

                <Route path="EventPage" element={<EventPage filteredData={filteredData} />} />
            </Routes>

            <Footer/>

        </>

    )
}

export default App


