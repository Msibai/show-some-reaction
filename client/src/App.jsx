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
import AddressBox from "./AddressBox.jsx";
import SearchByDate from "./SearchByDate.jsx";

import DropDownSearch from "./DropDownSearch.jsx";

import BookingPage from "./BookingPage";


function App() {

    const [showData, setShowData] = useState(ShowAPI);
    const [filteredData, setFilteredData] = useState(null);

    return (
        <>
            <Navbar/>



            <Routes>
                <Route path="/" element={
                    <div className="home-main-wrapper"><div className="search-wrapper">
                    <DropDownSearch />
                    <SearchByName showData={showData} setFilteredData={setFilteredData}/>
                    <SearchByPrice showData={showData} setFilteredData={setFilteredData}/>
                    <SearchByDate showData={showData} setShowData={setShowData} setFilteredData={setFilteredData}/></div>{
                        filteredData ?
                    (<ShowCard showData={filteredData} />)
                    :
                    (<ShowCard showData={showData} />)
                }</div>}/>

                <Route path="EventPage" element={<EventPage />} />
                <Route path="AddressBox" element={<AddressBox />} />
                <Route path="BookingPage" element={<BookingPage/>} />
            </Routes>

            <Footer/>

        </>

    )
}

export default App


