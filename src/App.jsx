import React from 'react';
import Main from './pages/main/Main';
import Error404 from './pages/error404/Error404';
import ProjectsMain from './pages/projects/projectsMain';
import Bart from './pages/projects/components/bartAPI/bartAPI';
import Stock from './pages/projects/components/stocks/stockAPI';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //do not remove "Router". Not sure why but even though it isnt being used here, if removed site dont work :/. Massive confusion.
import Contact from './pages/contact/Contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Main/>} />
      <Route path='/projects' exact element={<ProjectsMain/>} />
      <Route path='/bart' exact element={<Bart/>} />
      <Route path='stock' exact element={<Stock/>} />
      <Route path='/contact' exact element={<Contact/>} />
      <Route path="*" exact element={<Error404/>} />
    </Routes>
  );
};

export default App;
