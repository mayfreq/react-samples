import React from 'react';
import Image from './Image';

const Gallery = ({ photos }) => {
  const listPhotos = () => {
    return photos.length != 0
      ? photos.map((val, index) => (
          <Image key={index} photoUrl={val.photoUrl} />
        ))
      : null;
  };

  return (
    <div className="list">
      <ul>
        {listPhotos()}
        <li></li>
      </ul>
    </div>
  );
};

export default Gallery;
