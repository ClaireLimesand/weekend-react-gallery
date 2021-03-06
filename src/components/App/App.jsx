// importing react, useState, useEffect, axios and CSS file
import React from 'react';   
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
// importing GalleryList
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryList, setGalleryList] = useState([]);
  // runs fetchGallery after render
  useEffect(() => {
    fetchGallery();
  }, []);
  // request out data from the gallery router. updates galleryList
  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('got a response. Here\'s the data', response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('GET /gallery failed', error);
    });
  };
  //returns html and takes galleryList and fetchGallery
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
      </header>
        <GalleryList galleryList={galleryList} fetchGallery={fetchGallery}/>
    </div>
  );
}

export default App;

