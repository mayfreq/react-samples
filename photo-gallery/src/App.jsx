import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import Gallery from './components/Gallery';
import getDefaultPhotos,{searchPhotos} from './api';
import IMAGE_RESULT_COUNT from './constants';

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(async () => {
    setPhotos(await getDefaultPhotos(IMAGE_RESULT_COUNT));
  }, []);

  const search = async (searchText) => {
    setPhotos(await searchPhotos(searchText,IMAGE_RESULT_COUNT));
  };

  return (
    <React.Fragment>
      <Search searchPhotos={search} />
      <Gallery photos={photos} />
    </React.Fragment>
  );
};

export default App;
