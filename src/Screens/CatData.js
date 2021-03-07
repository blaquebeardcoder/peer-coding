import axios from 'axios';
import React, { useState, useEffect } from 'react';


const CatData = () => {
    const [catImage, setCatImage] = useState('Hello world');
//console.log(catImage);
console.log(catImage);

  const fetchCatData  = async () => {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search");

    setCatImage(response.data[0].url)
 };
 
 useEffect(() => {
   fetchCatData();     
 }, []);

    return (
        <div>
            <h1>🐱‍👤Catify Me</h1> 
                <img src={catImage} alt="" />
                    <button onClick={fetchCatData}>Catify Me!</button>
        </div>
    )
}

export default CatData;
