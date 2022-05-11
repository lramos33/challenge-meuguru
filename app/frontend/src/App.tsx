import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import EditUser from './pages/EditUser';
import '../public/styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/users"
          element={<Users />}
        />
        <Route
          path="/users/:id"
          element={<EditUser />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
