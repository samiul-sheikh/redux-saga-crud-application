import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import AddEditUser from './pages/AddEditUser';
import UserInformation from './pages/UserInformation';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <div className="mb-5">
        <Header />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addUser" element={<AddEditUser />} />
        <Route path="/editUser/:id" element={<AddEditUser />} />
        <Route path="/userInfo/:id" element={<UserInformation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
