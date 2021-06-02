import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import "../style.css"

function Top2(){
    return <div class="top2">
<br /><br />
<Row>
<Col lg="6" sm="12">
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
}
export default Top2;