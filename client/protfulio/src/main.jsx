import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import About from './page/About/About';
import Contact from './page/contact/Contact';
import Blog from './page/Skill/Skill';
import Portfolio from './page/Skilss/Skills';
import Resume from './page/idea/Idea';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,         // Default route for "/"
        element: <About />   // This will render /home content
      },
      {
        path: 'home',
        element: <About />
      },
      {
        path: 'Resume',
        element: <Resume />
      },
      {
        path: 'Portfolio',
        element: <Portfolio />
      },
      {
        path: 'Blog',
        element: <Blog />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
