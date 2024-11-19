import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Payment from './Components/payment';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/subscription" element={
        <>
        <Nav nav={true} bar={false}/>
        <Payment/>
        </>
        } />
    </Routes>
  </Router>
);

export default App;