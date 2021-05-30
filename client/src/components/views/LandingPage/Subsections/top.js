import React from 'react';
import pic1 from "../Images/pic4.png";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import "../style.css"

function Top(){
    return <div class="top">

<Row>
<Col lg="6" sm="12">
  <p class="explore">Our catch phrase and moto here probably of two lines.....</p>
  <Row className="TopBut">
  <Col  className="TopBut1">
   <a class="soci" href="#"><Button style={{background:"#ffffff",color:"black"}} size="lg">Download App</Button></a>
   </Col>
   <Col className="TopBut2">
    <a class="soci" href="#"><Button style={{background:"#333333"}} size="lg">Find Service</Button></a>
    </Col>
    </Row>
</Col>
<Col>
  <img class="pisa" src={pic1} alt=""></img>
</Col>
</Row>

    </div>
}
export default Top;