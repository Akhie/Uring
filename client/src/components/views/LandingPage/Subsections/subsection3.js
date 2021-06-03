import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import "../style.css";
import mid1 from '../Images/mid1.jpeg'

function SubSec3(){
    return <div class="suba">

<p class="explore">Our catch phrase and moto here probably of two lines.....</p>
<div class="m-5">
<Row className="rowa" >
  <Col md="6" sm="12" data-aos="zoom-in-right" >
      <p class="subp1">Find every kind of service near you.</p>
      <h3 class="subp2">Services Near Me</h3>
      <p class="subp3">We know sometimes finding a right guy near you for
      even a basic work becomes a really difficult task we make that thing really easy.
      Now getting details of service providers near you is just an click away.</p>
  </Col>
  <Col  md="6" sm="12">
  <div data-aos="zoom-in-left">
     <img class="subimg" style={{marginTop:"4rem", width:"100%"}} src={mid1}></img>
     </div>
  </Col>
</Row>

<Row className="rowa">
<Col md="6" sm="12" data-aos="zoom-in-right" >
  <img class="subimg"  src={mid1}></img>
  </Col>
  <Col data-aos="zoom-in-left">
  <p class="subp1">Find every kind of service near you.</p>
      <h3 class="subp2">Services Near Me</h3>
      <p class="subp3">We know sometimes finding a right guy near you for
      even a basic work becomes a really difficult task we make that thing really easy.
      Now getting details of service providers near you is just an click away.</p>
  </Col>
</Row>

<Row className="rowa">
<Col md="6" sm="12" data-aos="zoom-in-right" >
  <p class="subp1">Find every kind of service near you.</p>
      <h3 class="subp2">Services Near Me</h3>
      <p class="subp3">We know sometimes finding a right guy near you for
      even a basic work becomes a really difficult task we make that thing really easy.
      Now getting details of service providers near you is just an click away.</p>
  </Col>
  <Col data-aos="zoom-in-left">
  <img class="subimg" src={mid1}></img>
  </Col>
</Row>
</div>

    </div>
}
export default SubSec3;