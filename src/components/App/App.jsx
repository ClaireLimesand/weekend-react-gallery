import React from 'react';   
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {

  const [galleryList, setGalleryList] = useState([]);
  
  useEffect(() => {
    fetchGallery();
  }, []);

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
  
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
      </header>
        <GalleryList galleryList={galleryList} />
    </div>
  );
}

export default App;

