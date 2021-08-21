import React, { useEffect, useState } from 'react';
import './App.css';
import getDefaultPhoto from './api';

const App = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(async() => {
    setPhotos(await getDefaultPhoto());
  }, []);

  const listPhotos = () => {
    return photos.length!=0 ? photos.map((val,index)=>{return <li key={index}>
      <img src={val.photoUrl} alt="" />
    </li>}):null;
  };
  return (
    <React.Fragment>
      <div className="form">
        <input type="text" name="" placeholder="Search" />
      </div>
      <div className="list">
        <ul>
          {listPhotos()}
          <li></li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default App;
