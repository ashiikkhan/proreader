import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <Header></Header>
      {/* outlet is a placeholder component (eta actually jayga dokhol kore rakhbe component er jonno)*/}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
