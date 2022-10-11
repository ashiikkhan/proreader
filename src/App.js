import React from 'react';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';

// create router with createBrowserRouter hook
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // index: true or, path: "/" will render the home component at first rendering.
      { index: true, element: <Home></Home> },
      { path: 'home', element: <Home></Home> },
      { path: 'about', element: <About></About> },
    ],
  },
]);

function App() {
  return (
    <div>
      {/* send router in RouterProvider as props */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
