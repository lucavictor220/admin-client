import React from 'react';
import Button from '@material-ui/core/Button';
import Header from './Header';


const App = () => {
  return (
    <div>
      <Header />
      <Button variant="raised" color="primary">
        Hello World
      </Button>
    </div>
  );
};

export default App;
