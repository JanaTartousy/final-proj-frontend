import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tours from './pages/ToursPage/ToursPage';
import Contact from './pages/ContactPage/ContactPage';
import Profile from './pages/ProfilePage/ProfilePage';
import TourDetails from './pages/TourDetailsPage/TourDetailsPage.js' 
import PostPage from './pages/PostPage/PostPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Dashboard from './pages/Dashboard/dashboard';
import DashAdmin from './pages/DashAdmin/DashAdmin';
import DashUser from './pages/DashUser/DashUser';
import DashTour from './pages/DashTour/DashTour';
import DashPost from './pages/DashPost/DashPost';
import DashFeedback from './pages/DashFeedback/DashFeedback';
import AdminRoute from './pages/AdminRoute/AdminRoute';


const App = () => {
  return (
    
      <div className="App">
        <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashtour" element={<DashTour/>} />
          <Route path="/dashpost" element={<DashPost/>} />
          <Route path="/DashAdmin" element={<DashAdmin/>} />
          <Route path="/dashuser" element={<DashUser/>} />
          <Route path="/dashfeedback" element={<DashFeedback/>} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tour-details" element={<TourDetails />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/adminroute" element={<AdminRoute/>} >
            
          </Route>
        </Routes>
      </div>
   
  );
};

export default App;