import './App.css'
import Navbar from './Navbar';

import ShowAPI from "./ShowAPI.jsx";
import ShowCard from "./ShowCard.jsx";
import {useState} from "react";

function App() {

  const [showData, setShowData]= useState(ShowAPI);
  return (
    <>
        <Navbar />
        <ShowCard showData={showData}/>
      </>
  )
}

export default App


