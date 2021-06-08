import React, { useState, useEffect, Component  } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'

function Right() {
    const { type } = useParams()
    const [Providers, setProviders] = useState([])
    const [Type, setType] = useState("")

    var service = {
        ser: type
    };
//  setType(type);

useEffect(() => {
    axios.post('/api/providers/getProvider',service)
        .then(response => {
            if (response.data.success) {
                // console.log(response.data.providers);
                setProviders(response.data.providers)
            } else {
                alert('Failed to get Providers');
            }
        })
},)     
    const render=Providers.map((Pro, index) =>{
        return(
            <div >
            <Row>
            <Col md="3" xs="3">
                <img class="proimg" style={{width:"75%", marginLeft:"1rem"}} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Profile pics"></img>
            </Col>
            <Col>
                <h5 class="rightf">{Pro.name}</h5>
                <span class="rightf">Mobile No. </span>{Pro.number}
                {/* <p><span>Address</span>{Pro.address}</p> */}
                {/* <p><span>Rating: </span>4.9 <i className="fa fa-star"></i></p> */}
                </Col>
                </Row>
                <hr />
            </div>
        )
    })
    return (
        <div class="Rsec">
           <h4 style={{marginLeft:"1rem" , fontWeight:"bold"}} class="rightf"> {type} service near you.</h4>
           <br />
            {render}
            

        </div>
    )
}

export default Right
