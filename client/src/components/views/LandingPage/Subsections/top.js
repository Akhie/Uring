import React,{useEffect} from 'react';
import bulb from '../Images/bulb.png'
import pic1 from '../Images/c1.png'
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import "../style.css"
import {Helmet} from "react-helmet";

function Top(){

return <div class="top" >
 <Row>
  <p class="explore">Our catch phrase and moto here probably of two lines</p>
  <p class="exploresub">Our catch phrase and moto here probably of two lines</p>
  </Row>
  <Row>
    <div style={{width:"80%", margin:"auto"}}>
    <Row>
      <Col>
      <a class="toplink" href="#">
      <img style={{width:"1.9em"}} class="topicon" src="https://cdn.pixabay.com/photo/2016/08/07/14/59/the-light-bulb-1576399_960_720.png"></img>
        <p style={{color:"white"}}>Electrician</p></a>
      </Col>
      <Col>
      <a class="toplink" href="#">
      <img class="topicon" src="https://cdn.pixabay.com/photo/2014/04/03/10/40/water-311063_960_720.png"></img>
        <p style={{color:"white"}}>Plumber</p></a>
      </Col>
      <Col>
      <a class="toplink" href="#">
      <img style={{width:"1.2em"}} class="topicon" src="https://cdn.pixabay.com/photo/2012/04/26/19/00/chair-42857_960_720.png"></img>
        <p style={{color:"white"}}>Carpenter</p></a>
      </Col>
      <Col>
      <a class="toplink" href="#">
      <img style={{width:"2em"}} class="topicon" src="https://cdn.pixabay.com/photo/2012/05/02/20/18/screwdriver-46218_960_720.png"></img>
        <p style={{color:"white"}}>Electronics repair</p></a>
      </Col>
      <Col>
      <a class="toplink" href="#">
      <img  style={{width:"3.5em"}} class="topicon" src="https://cdn.pixabay.com/photo/2018/11/23/11/09/for-home-3833657_960_720.png"></img>
        <p style={{color:"white"}}>Ac repair</p></a>
      </Col>
  </Row>
    </div>
  </Row>

</div>


           
}
export default Top;