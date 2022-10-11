import React from 'react';
import Header from './Header';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  //get error from useRouteError() hook
  const error = useRouteError();
  //error we get is an object
  console.log(error);
  return (
    <>
      <Header />
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
        <br />
        {/* conditional rendering with && operator: jodi true hoy tahole dekhabe */}
        {error && (
          <div className='text-center text-red-600'>
            <p>{error.status}</p>
            <p>Page {error.statusText} !!!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ErrorPage;
