import { useRef } from "react";


export default function IFrameParents(params) {

const iFrameRef = useRef(null);    

const sendMessage = ()=>{
    if(!iFrameRef.current)
    return;
    else { iFrameRef.current.contentWidow.postMessage("this is child","https://localhost:3000"); }
console.log("message click");
}
return(
    <div>
    <h1>Iframe</h1>
    <button onClick={sendMessage}> send a message </button>
    {/* <iframe
     ref={iFrameRef} 
     src="iframe-child/" 
     width="600" 
     height="300" 
     title="Child iFrame">  
    </iframe> */}

    <iframe title="Figma" style={{border:"1px solid rgba(0, 0, 0, 0.1);"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNyzuMnvOmegJfpVBeBwzwX%2FHIGH-FI%3Fpage-id%3D0%253A1%26node-id%3D2%253A282%26viewport%3D540%252C259%252C0.38%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A282" allowfullscreen></iframe>
    </div>) 
} 