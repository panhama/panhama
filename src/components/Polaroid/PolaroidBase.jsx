import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Polaroid from './Polaroid';

import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpg";

export default function PolaroidBase() {
    return (
        <Container>
        <Row>
         <Polaroid  img={img3} location="ARIZONA" style={{transform:"rotate(10deg)"}}/>
         <Polaroid  img={img2} location="ARIZONA" style={{transform:"rotate(-10deg)"}}/>
         <Polaroid  img={img4} location="ARIZONA" style={{transform:"rotate(20deg)"}}/>
         <Polaroid  img={img1} location="ARIZONA" style={{transform:"rotate(-20deg)"}}/>
        </Row>
      </Container>
      );
    }
