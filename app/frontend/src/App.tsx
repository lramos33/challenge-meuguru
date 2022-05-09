import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './pages/Register';
import Data from './pages/Data';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/data" element={<Data />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
