import React from 'react';
import Header from './Components/Header/Header';
import GrandParent from './Components/GrandParent/GrandParent';
import Parent from './Components/Parent/Parent';
import CousinFather from './Components/CousinFather/CousinFather';

const App = () => {
  return (
    <div className='px-10'>
      <Header></Header>
      <GrandParent></GrandParent>
      </div>
  );
};

export default App;