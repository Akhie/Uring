import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import "../style.css";
import mid1 from '../Images/mid1.jpeg'
import mid2 from '../Images/pro.png'
function SubSec3(){
    return <div class="suba">

<p class="explore">Our catch phrase and moto here probably of two lines.....</p>
<div class="m-5">
<Row className="rowa" >
  <Col md="6" sm="6" xs="12" data-aos="zoom-in-right" >
      <p class="subp1">Find every kind of service near you.</p>
      <h3 class="subp2">Services Near Me</h3>
      <p class="subp3">We know sometimes finding a right guy near you for
      even a basic work becomes a really difficult task we make that thing really easy.
      Now getting details of service providers near you is just an click away.</p>
  </Col>
  <Col  md="6" sm="6" xs="12">
  <div data-aos="zoom-in-left">
     <img class="subimg" style={{marginTop:"4rem", width:"100%"}} src={mid1}></img>
     </div>
  </Col>
</Row>

<Row className="rowa">
<Col md="6" sm="6" xs="12" data-aos="zoom-in-right" >
  <img class="subimg" style={{margin:"0", marginBottom:"5px"}}  src={mid2}></img>
  </Col>
  <Col sm="6" data-aos="zoom-in-left">
  <p class="subp1">It is now easy for customers to find you.</p>
      <h3 class="subp2">Customers for me</h3>
      <p class="subp3">We know sometimes you are not able to reach lot of potential customers, but now you have 
      a platform where the customers can easily reach you and you get work easily and all the time according to your potential .</p>
  </Col>
</Row>

<Row className="rowa">
<Col md="6" sm="6" xs="12" data-aos="zoom-in-right" >
  <p class="subp1">Find every kind of service near you.</p>
      <h3 class="subp2">Services Near Me</h3>
      <p class="subp3">We know sometimes finding a right guy near you for
      even a basic work becomes a really difficult task we make that thing really easy.
      Now getting details of service providers near you is just an click away.</p>
  </Col>
  <Col sm="6" data-aos="zoom-in-left">
  <img class="subimg" src={mid1}></img>
  </Col>
</Row>
</div>

    </div>
}
export default SubSec3;