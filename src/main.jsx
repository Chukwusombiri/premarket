import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import Confirmation from './Pages/Confirmation.jsx';
import Error from './Pages/Error.jsx';
import './index.css';
import { loader as emailLoader } from './Pages/Confirmation.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,    
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/confirmation',
        element: <Confirmation />,
        loader: emailLoader,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);