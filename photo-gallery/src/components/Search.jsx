import React, { useState } from 'react';

const Search = ({ searchPhotos }) => {
  const [value, setValue] = useState('');

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') searchPhotos(value);
        }}
      />
    </div>
  );
};

export default Search;
