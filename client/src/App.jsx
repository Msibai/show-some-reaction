
import './App.css'
import ShowAPI from "./ShowAPI.jsx";
import ShowCard from "./ShowCard.jsx";
import {useState} from "react";


function App() {

  const [showData, setShowData]= useState(ShowAPI);

  return (
      <>

        <ShowCard showData={showData}/>

      </>
  )
}

export default App


