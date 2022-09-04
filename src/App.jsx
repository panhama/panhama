import React from "react";
import ResizeWidth from "./components/Body/Resize";
import {Navigation} from "./components/Navbar/Navbar";
import {Banner} from "./components/Body/Banner";
import CardStack from "./components/Body/CardStack";
import PolaroidBase from "./components/Polaroid/PolaroidBase";
import  Button from "././components/Buttons/Button";
import "./App.css";
function App() {
    return (<div>
     <Navigation/>
    <Banner/>
    <PolaroidBase/>
    <Button text={"hello"}/>
    <ResizeWidth/>
  
    {/* <CardStack/>
    <CardStack/> */}
    </div>);
}


export default App;