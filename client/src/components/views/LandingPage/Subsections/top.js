import React,{useEffect} from 'react';
import bulb from '../Images/bulb.png'
import pic1 from '../Images/c1.png'
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import "../style.css"
import {Helmet} from "react-helmet";

function Top(){

return <div class="top" >
 <Row>
  <p class="explore" style={{fontSize: "5rem"}}>Home services, on demand</p>
  <p class="exploresub" style={{fontSize: "2rem"}}>You Ring, We are here to help!</p>
  </Row>
  <Row>
    <div class="topbox topbox1" style={{width:"80%", background:"#080808", margin:"auto"}}>
    <Row>
      <Col  md="2" xs="4">
      <a href="./service/Electrician" class="toplink">
      <img style={{width:"1.9em"}} class="topicon" src="https://cdn.pixabay.com/photo/2016/08/07/14/59/the-light-bulb-1576399_960_720.png"></img>
        <p style={{color:"white"}}>Electrician</p></a>
      </Col>
      <Col  md="2" xs="4">
      <a class="toplink" href="./service/Plumber">
      <img class="topicon" src="https://cdn.pixabay.com/photo/2014/04/03/10/40/water-311063_960_720.png"></img>
        <p style={{color:"white"}}>Plumber</p></a>
      </Col>
      <Col md="2" xs="4">
      <a class="toplink" href="./service/Carpenter">
      <img style={{width:"1.2em"}} class="topicon" src="https://cdn.pixabay.com/photo/2012/04/26/19/00/chair-42857_960_720.png"></img>
        <p style={{color:"white"}}>Carpenter</p></a>
      </Col>
      <Col md="2" xs="4">
      <a class="toplink" href="./service/Electronics repair">
      <img style={{width:"2em"}} class="topicon" src="https://cdn.pixabay.com/photo/2012/05/02/20/18/screwdriver-46218_960_720.png"></img>
        <p style={{color:"white"}}>Electronics repair</p></a>
      </Col>
      <Col md="2" xs="4">
      <a class="toplink" href="./service/AC repair">
      <img  style={{width:"3.5em"}} class="topicon" src="https://cdn.pixabay.com/photo/2018/11/23/11/09/for-home-3833657_960_720.png"></img>
        <p style={{color:"white"}}>Ac repair</p></a>
      </Col>
      <Col md="2" xs="4">
      <a class="toplink" href="./service/Electric Repair">
      <img  style={{width:"3.5em"}} class="topicon" src="https://cdn.pixabay.com/photo/2017/01/31/21/44/electronics-2027497__340.png"></img>
        <p style={{color:"white"}}>Electric repair</p></a>
      </Col>
  </Row>
    </div>
  </Row>

</div>


           
}
export default Top;