import React,{useState} from 'react';
import axios from 'axios';
// import Example from "./modal.js";
// import React , { useState } from "react";
import {Button,Modal} from "react-bootstrap";
import { MDBIcon} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import "../LandingPage/style.css";

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      show: false
    }
  }
  // const [show, setShow] = useState(false);
  handleSubmit(e){
    e.preventDefault();
    
    axios.post('/api/contacts/addContact',this.state)
      .then((response)=>{
        console.log(response.data.success);
        if (response.data.success) {
          // alert("Message Submitted.");
          
          this.resetForm()
          // const handleClose = () => setShow(false);
          // const handleShow = () => setShow(true);
        } else {
          alert("Message failed to send.")
        }
    })
  }

  resetForm(){
    this.setState({show: true})
    this.setState({name: "", email: "", message: ""})

    return ;
  }

  render() {
    return(
      // <Example></Example>
      <div className="App">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <br></br>
          <button type="submit" className="btn " style={{backgroundColor: "black", color:"white"}}>Submit</button>
        </form>

        <div style={{outline:'none'}}>
      <Modal
      
        show={this.state.show}
        onHide={()=> this.setState({show: false})}
        backdrop="static"
        keyboard={false}
        size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <div class="text-center">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title class="modal-title w-100"><b style={{fontSize:"3rem"}}>Thanks!</b></Modal.Title>
        </Modal.Header>
      </div>
          
      <div class="text-center">
        <Modal.Body className="modal-body">
        <b class="modal-title w-100" style={{fontSize:"1.5rem"}}>You will recieve a response shortly.</b>
        </Modal.Body>
      </div>

      <div class="text-center">
        <Modal.Footer className="modal-footer">
          <Button class="text-center foor modal-title w-100" href="/" style={{backgroundColor: "black", color: "white"}} onClick={()=> this.setState({show: false})}>
            Home <MDBIcon icon="arrow-right" />
          </Button>
        </Modal.Footer>
      </div>

      </Modal>
      </div>

      </div>

      );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default Form;