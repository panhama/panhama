import { useState,useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ButtonGlow from "../../components/Buttons/Button";
import logo from "../../assets/img/logo-small.png";
import twitter from "..//../assets/img/twitter.svg";
import instagram from "..//../assets/img/instagram.svg";
import linkedin from "..//../assets/img/linkedin.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' ;// <-- import styles to be used

// import {faYoutube} from '@fortawesome/free-brands-svg-icons'; 
import "./Navbar.css";



export const Navigation = ()=>{

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (<Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" width="120rem"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Skills</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Projects</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Photography</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={twitter} alt=""/></a>
                <a href="#"><img src={linkedin} alt=""/></a>
                <a href="#"><img src={instagram} alt=""/></a>
              </div>
              {/* <button className="vvd"><span>Let’s Connect</span></button> */}
            </span>
            <ButtonGlow text={"CONTACT ME"}></ButtonGlow>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )};
{/* //  return <div>
//  <Navbar bg="light" variant="light">
//    <Container>
//      <Navbar.Brand href="#home"> <img src={logo} width="120rem" alt=""/> </Navbar.Brand>
//      <Nav className="me-auto">
//        <Nav.Link href="#home">Home</Nav.Link>
//        <Nav.Link href="#features">Features</Nav.Link>
//        <Nav.Link href="#pricing">Pricing</Nav.Link>
//      </Nav>
//    </Container>
//  </Navbar>
// </div> */}

