import React from "react";
import { Routes, Route } from 'react-router-dom';

//pages
import BrowseProject from './pages/BrowseProject';
import SearchProject from './pages/SearchProject';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchProject />} />
        <Route path="/browse" element={<BrowseProject />} />
        {/* Add other routes here */}
      </Routes>
    </>
  );
}

export default App;
