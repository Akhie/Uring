import React from 'react'
import Left from "./Subsections/Left.js"
import Right from "./Subsections/Right.js"
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import "./styleser.css"
function LandingPage() {
    return (
        <>
        <div  style={{width:"80%",margin:"auto",marginTop:"2rem"}}>
          <Row>
          <Col md="3">
          <div style={{background:""}} class="Leftsec">
           <Left />
           </div>
           </Col>
           <Col md="6">
               <Right />
               </Col>
           </Row>
           </div>
        </>
    )
}

export default LandingPage
