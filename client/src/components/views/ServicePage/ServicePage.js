import React from 'react'
import Left from "./Subsections/Left.js"
import Right from "./Subsections/Right.js"
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import "./styleser.css"
function LandingPage() {
    return (
        <>
        <div style={{background:"#F8F8F8", paddingTop:"1rem"}}>
        <div  style={{width:"80%",margin:"auto",marginTop:"2rem"}}>
          <Row>
          <Col md="3">
          <div class="Leftsec">
           <Left />
           </div>
           </Col>
           <Col md="6">
               <Right />
               </Col>
           </Row>
           </div>
           </div>
        </>
    )
}

export default LandingPage
