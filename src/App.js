import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

// First page includes  Main statement in <h1></h1>
// Then, random image from Nasa Photo of the day
// Then search bar which searches dates and returns the image corresponding the date. 
// Search button which runs the function
// Surprise me! button which generates a random image. (Same as random NASA image)


function App() {
    const [inputValue, setInputValue] = useState("")
    const changeInput = e => {
      
      const value = e.target.value;
       setInputValue(value);
    };

  const [nasaImage, setNasaImage] = useState('')
useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-02-01')  
  .then((response) =>{
   setNasaImage(response.data.url)
   console.log(response.data.url)
  })
  .catch((error) => {
  console.log(error)
  }, [])
})
  return (
    <div className="App">
      <h1>Traverse The Heavens Below...</h1>
      <img src={nasaImage} alt=""/>
       <div className ="flex-container">
         <div>
        <input id='input' type='text' onChange={changeInput} value = {inputValue}/> 
        </div>
        <button className ='search'>Search</button>
      <button className='surprise'>Surprise Me!</button>
      </div>
    </div>
  );

}

export default App;
