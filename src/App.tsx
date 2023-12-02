import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './pages/shop';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default App;
