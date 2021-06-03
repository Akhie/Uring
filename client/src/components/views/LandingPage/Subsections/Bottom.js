import React from 'react';
import {Icon} from 'antd';
import "../style.css";

import img1 from '../Images/1.jpeg';
import img2 from '../Images/2.jpeg';
import img3 from '../Images/3.jpeg';
import img4 from '../Images/4.jpeg';
import img5 from '../Images/5.jpeg';
import img6 from '../Images/6.jpeg';


export default function Bottom() {
    return (
        <div style={{backgroundColor:"#080808"}}>

            <div style={{marginBottom:"50px", paddingTop:"100px"}}>
                <h2 className='text-center text-white'>Services Available</h2>
            </div>
            <div className='container mt-3'>

                <div className='row'>

                    <div className='col-md-4 p-4'>
                        <div class="card botcard text-white">
                            <img src={img6} className="card-img imgsize" alt="..." />
                        </div>
                    </div>
                    <div className='col-md-4 p-4'>
                        <div class="card botcard text-white">
                            <img src={img5} className="card-img imgsize" alt="..." />
                        </div>
                    </div>
                    <div className='col-md-4 p-4'>
                        <div class="card botcard text-white">
                            <img src={img3} className="card-img imgsize" alt="..." />
                        </div>
                    </div>

                </div>

                <div className='row'>

                    <div className='col-md-4 p-4'>
                        <div class="card botcard text-white">
                            <img src={img4} className="card-img imgsize" alt="..." />
                        </div>
                    </div>
                    <div className='col-md-4 p-4'>
                        <div class="card botcard text-white">
                            <img src={img2} className="card-img imgsize" alt="..." />
                        </div>
                    </div>
                    <div className='col-md-4 p-4'>
                        <div class="card botcard text-white">
                            <img src={img1} className="card-img imgsize" alt="..." />
                        </div>
                    </div>

                </div>

            </div>
            <div style={{paddingBottom:"50px", paddingTop:"100px"}}>
                <h2 className='text-center text-white'>Let us know what services you want</h2>
                <div className='d-flex justify-content-center'>
                    <button className='contactbutton' onClick={()=> window.open("/contacts", "_blank")} ><span> Contact <Icon type="phone" /></span> </button>
                </div>
            </div>
        </div>    
    )
}
