import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

// First page includes  Main statement in <h1></h1>
// Then, random image from Nasa Photo of the day
// Then search bar which searches dates and returns the image corresponding the date. 
// Search button which runs the function
// Surprise me! button which generates a random image. (Same as random NASA image)


function App() {
  const [searchImage, setSearchImage] = useState('')
  const [nasaImage, setNasaImage] = useState('')
  const [baseUrl] = useState(`https://api.nasa.gov/planetary/apod?api_key=Uncg5dOg9lyQK4LLYQ8WZ9AZGJuHL91iLjvKQQWQ&date=`) 
  
  const changeInput = e => {
    const value = e.target.value;
      setSearchImage(value);
      
  };

  // const openDetails = 


  useEffect(() => {
    axios.get(`${baseUrl}${searchImage}`)  
    .then((response) =>{
    setNasaImage(response.data)
    })
    .catch((error) => {
    console.log(error)
    }, [searchImage])
  })

  
  return (
    <div className="App">
      <h1>Traverse The Heavens Below...</h1>
      <h4>Title: {nasaImage.title}</h4>
      <img src={nasaImage.url} alt="nasa"/>
      <div className = 'description'>
        <h4>Description</h4>
        <p>{nasaImage.explanation}</p>
      </div>
       
         <div>
        <input type='date' onChange={changeInput} value={searchImage}/> 
        </div>
      {/* <Details /> */}
      </div>
  );
  
}

export default App;
