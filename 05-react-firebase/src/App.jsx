import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h2>This is APP</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
