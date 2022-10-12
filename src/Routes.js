import Root from './components/Root';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import BookDetails from './components/BookDetails';
import { createBrowserRouter } from 'react-router-dom';
import Books from './components/Books';

// create router with createBrowserRouter hook
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // index: true or, path: "/" will render
      //the home component at first rendering.
      { index: true, element: <Home></Home> },
      { path: 'home', element: <Home></Home> },
      { path: 'about', element: <About></About> },
      {
        path: 'books',
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.bookId}`),
      },
    ],
  },
]);

export default router;

/**
 * export default na kore
 * export const router" - evabe export korle import korte hobe
 * object akare .. => {router }
 */
