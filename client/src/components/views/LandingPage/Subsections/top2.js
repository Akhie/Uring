import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import "../style.css"

function Top2(){
    return <div >
    <div style={{textAlign:"center"}}>
    <Row>
    <div class="topbox2" style={{width:"80%", background:"#080808", margin:"auto"}}>
    <Row>
      <Col md="2" xs="4">
      <a href="./service/RO repair" class="toplink" href="./service/RO repair">
      <img style={{width:"1.9em"}} class="topicon" src="https://cdn.pixabay.com/photo/2012/04/03/13/36/water-25169_960_720.png"></img>
        <p style={{color:"white"}}>RO repair</p></a>
      </Col>
      <Col md="2" xs="4"> 
      <a class="toplink" href="#">
      <img class="topicon" src="https://cdn.pixabay.com/photo/2014/04/03/10/40/water-311063_960_720.png"></img>
        <p style={{color:"white"}}>Plumber</p></a>
      </Col>
      <Col md="2" xs="4">
      <a class="toplink" href="#">
      <img style={{width:"1.2em"}} class="topicon" src="https://cdn.pixabay.com/photo/2012/04/26/19/00/chair-42857_960_720.png"></img>
        <p style={{color:"white"}}>Carpenter</p></a>
      </Col>
      <Col md="2" xs="4">
      <a class="toplink" href="#">
      <img style={{width:"2em"}} class="topicon" src="https://cdn.pixabay.com/photo/2012/05/02/20/18/screwdriver-46218_960_720.png"></img>
        <p style={{color:"white"}}>Electronics repair</p></a>
      </Col>
      <Col md="2" xs="4">
      <a class="toplink" href="#">
      <img  style={{width:"3.5em"}} class="topicon" src="https://cdn.pixabay.com/photo/2018/11/23/11/09/for-home-3833657_960_720.png"></img>
        <p style={{color:"white"}}>Ac repair</p></a>
      </Col>
      <Col md="2" xs="4">
      <a class="toplink" href="#">
      <img  style={{width:"3.5em"}} class="topicon" src="https://cdn.pixabay.com/photo/2017/01/31/21/44/electronics-2027497__340.png"></img>
        <p style={{color:"white"}}>Electric repair</p></a>
      </Col>
  </Row>
    </div>
  </Row>
  </div>
    <div class="top2">
     

<br /><br />
<Row>
<Col md="6" sm="12">
  <p class="explore2">We help you find details of all the services available near you hastlefree. </p>
  <div class="explore3">
  <ul>
  <li>Find service providers active near you.</li>
  <li>Read reviews of them and choose one which suits you.</li>
  <li>No extra fees.</li>
  <li>No tension of searching different service at differnt place.</li>
</ul>
</div>
</Col>

<Col className="phone1" data-aos="flip-left" >

  <img class="pisa2" src="https://cdn.pixabay.com/photo/2017/10/07/21/37/iphone-2828016_960_720.png" alt=""></img>

</Col>
<Col  data-aos="flip-right">
  <img class="pisa2" src="https://cdn.pixabay.com/photo/2017/10/07/21/37/iphone-2828016_960_720.png" alt=""></img>
</Col>

</Row>
<br /><br />
    </div>
    </div>
}
export default Top2;