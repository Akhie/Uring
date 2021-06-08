import React from 'react';
import Geocode from "react-geocode";
import Select from 'react-select';
import axios from 'axios';

const serviceOption = [
  { value: 0, label: "Electrician" },
    { value: 1, label: "Plumber" },
    { value: 2, label: "RO repair" },
    { value: 3, label: "Carpenter" },
    { value: 4, label: "TV repair" },
    { value: 5, label: "AC repair" },
    { value: 6, label: "Electronics repair" }
];

class Form extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contact: null,
      minCharge: null,
      service: [],
      address: '',
      longitude: null,
      lattitude: null,
    }
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);

    axios.post('/api/providers/addProvider',this.state)
      .then((response)=>{
        console.log(response.data.success);
        if (response.data.success) {
          alert("Service Provider Added.");
          this.resetForm()
        } else {
          alert("Failed to Add service provider.");
        }
    }) 
   

  }

  resetForm() {
    this.setState({
      name: '',
      contact: null,
      minCharge: null,
      service: [],
      address: '',
      longitude: null,
      lattitude: null 
    })
  }

  render() {
    return(
      <div className="App">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input type="number" className="form-control" id="contact" aria-describedby="contactHelp" value={this.state.contact} onChange={this.onContactChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="minCharge">Minimum Charge</label>
              <input type="number" className="form-control" id="minCharge" value={this.state.minCharge} onChange={this.onMinChargeChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="service">Services</label>
              <Select isMulti className="form-control" id="service" options={serviceOption} onChange={this.onServiceChange.bind(this)} ></Select>
          </div>
          <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea className="form-control" rows="5" id="address" value={this.state.message} onChange={this.onAddressChange.bind(this)} />
          </div>
          <br></br>
          <button type="submit" className="btn " style={{backgroundColor: "black", color:"white"}}>Submit</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onContactChange(event) {
	  this.setState({contact: event.target.value})
  }

  onMinChargeChange(event) {
	  this.setState({minCharge: event.target.value})
  }

  onAddressChange(event) {
	  this.setState({address: event.target.value})
  }

  onServiceChange(event) {
	  this.setState({service: event.map(x=>x.label)})
  }
}

export default Form;