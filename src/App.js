import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function Input() {
  /* STEP 1 */
  const [inputValue, setInputValue] = useState("")
  const changeInput = evt => {
    
    const value = evt.target.value;
     setInputValue(value);
  };
  const reset = () => {
     setInputValue("")
  }
}
function App() {
  return (
    <div className="App">
      <h1>Traverse The Heavens Below...</h1>
      <img src="https://apod.nasa.gov/apod/image/2102/MeteorStreak_Kuszaj_5341.jpg" alt="Nasa-image"/>
       <div className ="flex-container">
      <button className ='search'>Search</button>
      <button className='surprise'>Surprise Me!</button>
      </div>
    </div>
  );
}

export default App;
