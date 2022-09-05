import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'  
import ResizeWidth from "./components/Body/Resize";
import {Navigation} from "./components/Navbar/Navbar";
import {Banner} from "./components/Body/Banner";
import Carousels from "./components/Body/Carousel";
import Skills from "./components/Body/Skills";
import PolaroidBase from "./components/Polaroid/PolaroidBase";
import Photography from "./components/Body/Photography";

import Portfolio from "./components/Body/Portfolio";
// import CardStack from "./components/Buttons/CardStack";
// import Button from "././components/Buttons/Button";
// import IFrameParents from "./components/Body/IframeParents";
// import IFrameChild from './components/Body/IframeChilds';

import "./App.css";
function App() {
    return (
    <Router>
        <Routes>
    <Route 
    exact path="/" element={<div>   <Navigation/> <Banner/> <Skills/> <PolaroidBase/> <Photography/>  <Carousels/>  </div>}/>
  
    <Route exact path="/photography" element={<div><Photography/><Carousels/></div> }/>

    <Route exact path="/portfolio" element={<Portfolio/>}/>
   
    
    {/* <Portfolio/> */}
    
    {/* <ResizeWidth/> */}
    </Routes>
    </Router>
    );
}


export default App;