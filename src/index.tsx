import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./index.module.scss";
import Navbar from './components/navbar/navbar';
import Cv from './components/cv/cv';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import AboutMe from './components/aboutMe';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
   

const Index: React.FC = () => {

  const isProduction = window.location.href.includes('valentynzakhozhyi.github.io');

  return (
    <React.StrictMode>
      <BrowserRouter basename={isProduction ? 'portfoliozakhozhyi' : ''}>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='AboutMe' element={<AboutMe />} /> 
          <Route path='CV' element={<Cv />} />
          <Route path='Projects' element={<Projects />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}
root.render(<Index />);



reportWebVitals();