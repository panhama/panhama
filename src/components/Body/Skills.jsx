import "./Skills.css";
import CardStack from "../Buttons/CardStack";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UX2 from "../../assets/img/UX2.png";
import UX3 from "../../assets/img/UX3.png";
import UX4 from "../../assets/img/UX4.png";
import UX5 from "../../assets/img/UX5.png";
import UX6 from "../../assets/img/UX6.png";
import HiFi from "../../assets/img/HIGH FI.png";
import { Container } from "react-bootstrap";

export default function Skills(params) {
    return <div className="skills">
    <Container>
    <Row>
    <Col md={3}>
    <img src={UX2} style={{width:"75%"}} alt=""></img>
    </Col>
    <Col md={3}>
    <img src={UX3} style={{width:"78%"}} alt=""></img>
    </Col>
    <Col md={3}>
    <img src={UX4} style={{width:"76%"}} alt=""></img>
    </Col>
    <Col md={3}>
    <img src={UX5} style={{width:"75%"}} alt=""></img>
    </Col>
    <Col md={3}>
    <img src={UX5} style={{width:"75%"}} alt=""></img>
    </Col>
    <Col md={3}>
    <img src={UX6} style={{width:"83%",marginTop:"-9px"}} alt=""></img>
    </Col>
    <Col md={3}>
    
    <iframe title="Figma" style={{border:"1px solid rgba(0, 0, 0, 0.1);"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNyzuMnvOmegJfpVBeBwzwX%2FHIGH-FI%3Fpage-id%3D0%253A1%26node-id%3D2%253A282%26viewport%3D540%252C259%252C0.38%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A282" allowfullscreen></iframe>
    </Col>
      </Row> 
      </Container>  
    </div>
}