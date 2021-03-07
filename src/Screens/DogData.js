import React, {useState, useEffect } from 'react';
import axios from 'axios';


const DogData = () => {
    const [ dogImage, setDogImage ] = useState('');
    //console.log(dogImage);

    const fetchDogData = async () => {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        
        setDogImage(response.data.message);
    };

    useEffect(()=> {
        fetchDogData();
    }, [])
    return (
        <div>
            <h1>🐶Dogify Me!</h1>
            <img src={dogImage} alt="" />
            <button onClick={fetchDogData}>Dogify Me!</button>
        </div>
    )
};

export default DogData;
