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
import SortByDate from "./SearchByDate.jsx";

function App() {

    const [showData, setShowData] = useState(ShowAPI);
    const [filteredData, setFilteredData] = useState(null);

    return (
        <>

            <Navbar/>
            <SearchByName showData={showData} setFilteredData={setFilteredData}/>
            <SortByDate showData={showData} setShowData={setShowData} stFilteredData={setFilteredData} />
            <SearchByPrice showData={showData} setFilteredData={setFilteredData}/>
            {filteredData ?
                (
                    <ShowCard showData={filteredData} />
                ) :
                (
                    <ShowCard showData={showData} />

                )
            }
            {/*<Routes>*/}
            {/*    <Route path="/" element={<ShowCard showData={showData} />} />*/}
            {/*    <Route path="EventPage" element={<EventPage />} />*/}
            {/*</Routes>*/}
            {/*<Routes>*/}
            {/*    <Route path="/" element={<ShowCard showData={showData} />} />*/}
            {/*    <Route path="EventPage" element={<EventPage />} />*/}
            {/*</Routes>*/}

            <Footer/>

        </>

    )
}

export default App


