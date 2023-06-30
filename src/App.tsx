import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from './components/Layout';
import routes from './pages/routes';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ element, path, ...rest }) => {
          return <Route element={<Layout>{element}</Layout>} key={path} path={path} {...rest}/>
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
