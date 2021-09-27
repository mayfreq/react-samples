import React from 'react';
const Image = ({ photoUrl }) => {
  return (
    <li>
      <img src={photoUrl} alt="" />
    </li>
  );
};

export default Image;
