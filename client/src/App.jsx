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

function App() {

    const [showData, setShowData] = useState(ShowAPI);
    const [filteredData, setFilteredData] = useState(null);

    return (
        <>

            <Navbar/>
            <SearchByName showData={showData} setFilteredData={setFilteredData}/>
            <SearchByPrice showData={showData} setFilteredData={setFilteredData}/>
            <SearchByDate showData={showData} setShowData={setShowData} setFilteredData={setFilteredData}/>
            <Routes>
<<<<<<< HEAD
                <Route path="/" element={<ShowCard showData={showData} />} />
<<<<<<< HEAD
            </Routes>
            <Routes>

                <Route path="EventPage" element={<EventPage filteredData={filteredData} />} />
=======
                <Route path="EventPage" element={<EventPage />} />
=======
>>>>>>> a800ad34cb944f873a04d6b3c15d1423abdc4d56

                <Route path="/" element={<ShowCard showData={showData} />} />
<<<<<<< HEAD
                <Route path="EventPage" element={<EventPage />} />
                <Route path="AddressBox" element={<AddressBox />} />
>>>>>>> main
=======
            </Routes>
            <Routes>

                <Route path="EventPage" element={<EventPage filteredData={filteredData} />} />
=======
                {filteredData ?
                    (<Route path="/" element={<ShowCard showData={filteredData} />} />)
                    :
                    (<Route path="/" element={<ShowCard showData={showData} />} />)
                }
                <Route path="EventPage" element={<EventPage />} />
                <Route path="AddressBox" element={<AddressBox />} />
>>>>>>> a800ad34cb944f873a04d6b3c15d1423abdc4d56
            </Routes>

            <Footer/>

        </>

    )
}

export default App


