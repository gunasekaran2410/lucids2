import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Row, Col, Container, Image} from 'react-bootstrap';
import logo from '../src/assets/img/logo.png'
import twitter from '../src/assets/img/twitter.png'
import instagram from '../src/assets/img/instagram.png'
import pinterest from '../src/assets/img/pinterest.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Faq from './Faq';
// import { BrowserRouter } from 'react-router-dom';
import RoadMap from './Road';
import Lunch from './Lunch'
import pupa from '../src/assets/img/Pupa Labs Logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
       <Container>
          <Row>
          <Col className='list' md={2} sm={0} xs={0}>
             
    </Col>
    <Col className='list text-center' md={2} sm={6} xs={12}>
            
            <Link to="/RoadMap">ROAD MAP</Link>
    </Col>
   
    <Col className='list' md={2} sm={6} xs={12}>
            <div className='text-center'>
            <Link to="/">
              <Image className='logo'  src={logo} alt='Lucids Logo.png' /></Link>
  </div>
            </Col>
            <Col className='list text-center' md={2} sm={6} xs={12}>
             <Link to="/Faq">FAQs</Link>
            </Col>
            <Col className='list' md={3} sm={6} xs={12}>
              <ul className='list-inline'>
                <li className='list-inline-item'>
               <Image src={twitter} alt='twitter' />
                </li>
                <li className='list-inline-item'>
               <Image src={instagram} alt='instagram' />
                </li>
                <li className='list-inline-item'>
               <Image src={pinterest} alt='pinterest' />
                </li>
             </ul>
    </Col>
  </Row>
        </Container>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/RoadMap" element={<RoadMap />} /> 
        <Route path="/Faq" element={<Faq />} /> 
        <Route path="/Lunch" element={<Lunch />} /> 
      </Routes>
      <Container>
        <Row>
       
          <Col className='footer second_footer' sm={12} md={12} xs={12}>
          <a href="#" > Conceptualised and executed by
            </a><br></br>
            <Image src={pupa} /><br></br>
            <a  href="#"> Lucids.io 2021
</a>
          </Col>
        
        </Row>
      </Container>

   </Router>
      </div>
    )
  }
}

export default App
