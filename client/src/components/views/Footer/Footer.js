import React from 'react'
import {Icon} from 'antd';

function Footer() {

    return (

        <div>
            <div style={{ paddingTop:"70px", paddingBottom:"50px" }} className='container'>
                <div className='row'>
                    <div className='col-md-6 p-5' >
                            <h2>LOGO</h2>
                            <p> From custom web design to content writing and search engine optimization (SEO), our range of creative digital services will help your business stand out online</p>
                    </div>
                    <div className='col-md-6 p-5'>
                            <b>Connect With Us</b> <hr/>
                            <div className='row'>
                                <div className='col-6'>
                                    <i className="fa fa-envelope-o fa-lg"></i> &nbsp; <a href="mailto:service@gmail.com">service@gmail.com</a><br/>
                                    <i className="fa fa-phone"></i> &nbsp; +91 99999 00000
                                </div>
                                <div className='col-6'>
                                    <div className="text-center">
                                        <a className="btn btn-social-icon btn-google" href="http://google.com/"><i className="fa fa-google"></i></a>
                                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                    </div>
                                </div>  
                            </div>      
                    </div>
                </div>
            </div>

            <div className='row' style={{backgroundColor:"#1c1c1c"}}>
                <div className='text-center text-white pt-3 pb-1'>
                    <p> © Services 2021  /  All Rights Reserved </p>
                </div>
            </div>
        </div>  

    )
}

export default Footer
