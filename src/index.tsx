import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.module.scss";
import Navbar from './components/navbar/navbar';
import Cv from './components/cv/cv';
import Projects from './components/projects/projects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <Navbar />
  <Routes>
    <Route path='/' element={<App />}></Route>
    <Route path='CV' element={<Cv />} />
    <Route path='Projects' element={<Projects />}/>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
