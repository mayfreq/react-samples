import React from 'react';
import './App.css';

const App = () => {

  return (
    <React.Fragment>
      <div className="form">
        <input type="text" name="" placeholder="Search" />
      </div>
      <div className="list">
        <ul>
          <li><img src="https://picsum.photos/id/240/1920/1080" alt="" /></li>
          <li><img src="https://picsum.photos/id/241/900/600" alt="" /></li>
          <li><img src="https://picsum.photos/id/242/1920/1080" alt="" /></li>
          <li><img src="https://picsum.photos/id/243/1024/768" alt="" /></li>
          <li><img src="https://picsum.photos/id/244/1400/768" alt="" /></li>
          <li><img src="https://picsum.photos/id/250/1200/600" alt="" /></li>
          <li><img src="https://picsum.photos/id/251/1920/1080" alt="" /></li>
          <li><img src="https://picsum.photos/id/247/1024/900" alt="" /></li>
          <li><img src="https://picsum.photos/id/248/1354/1024" alt="" /></li>
          <li><img src="https://picsum.photos/id/249/1920/1080" alt="" /></li>
          <li></li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default App;
