import React from 'react';
import Button from '@material-ui/core/Button';
import Header from './Header';
import img from '../assets/images/react_logo_512x512.png';


const App = () => {
  return (
    <div>
      <Header />
      <h2 id="heading">Hello ReactJS!!!</h2>
      <img
        className="image"
        style={{ margin: '0.5em' }}
        height="40"
        width="40"
        src={img}
        alt="React Logo"
      />
      <Button variant="raised" color="primary">
        Hello World
      </Button>
    </div>
  );
};

export default App;
