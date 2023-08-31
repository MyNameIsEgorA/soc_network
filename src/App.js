import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="app_wrapper">

      <BrowserRouter>
        <Header />

        <Navbar />

        <div class='content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs/*' element={<Dialogs messages={props.messages} people={props.people} sendMessage={props.sendMessage} />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App;