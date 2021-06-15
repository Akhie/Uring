import React from 'react'
import {Icon} from 'antd';
{/* <div className='col-md-6 p-5' >
                            <h2 style={{fontFamily:"Pacifico , cursive", fontWeight:"bold"}}>URing</h2>
                            <p> All Rights Reserved</p>
                    </div> */}
function Footer() {

    return (

        <div>
            <div style={{ paddingTop:"70px", paddingBottom:"10px" }} className='container'>
                <div className='row'>
                    <div className='col-md-3 p-1' >
                            <h2 style={{fontFamily:"Pacifico , cursive", fontWeight:"bold"}}><a href="/" style={{textDecoration: "none", color:"black"}}>URing</a></h2>
                            <p> All Rights Reserved</p>
                    </div>
                    <div className='col-md-2 p-1'>
                            <b><a href="/about-us" style={{textDecoration: "none", color:"black"}}>About Us</a></b>
                    </div>
                    <div className='col-md-3 p-1'>
                            <b><a href="/terms" style={{textDecoration: "none", color:"black"}}>Terms & Conditions</a></b>
                    </div>
                    <div className='col-md-2 p-1'>
                            <b><a href="/privacy" style={{textDecoration: "none", color:"black"}}>Privacy Policy</a></b>
                    </div>
                    <div className='col-md-2 p-1'>
                            <b><a href="/contacts" style={{textDecoration: "none", color:"black"}}>Contact Us</a></b>      
                    </div>
                </div>
            </div>
            <div className="text-center">
                                        <a className="btn btn-social-icon btn-google" href="https://uring.herokuapp.com/"><i className="fa fa-google"></i></a>
                                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/URing-112324574415806"><i className="fa fa-facebook"></i></a>
                                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                        <a className="btn btn-social-icon btn-google" href="mailto: team@uring.tech"><i className="fa fa-envelope"></i></a>
                                    </div>
                                    <br></br>
            <div className='row' style={{backgroundColor:"#080808"}}>
                <div className='text-center text-white pt-3 pb-1'>
                    <p> © URing 2021  /  All Rights Reserved </p>
                </div>
            </div>









            {/* <div class="Footer__basicRow1--1vBy2"><ul><li><a href="https://www.urbancompany.com/about" target="_blank">About Us</a></li><li><a href="https://www.urbancompany.com/terms" target="_blank">Terms &amp; Conditions</a></li><li><a href="https://www.urbancompany.com/privacy-policy" target="_blank">Privacy Policy</a></li><li><a href="https://www.urbancompany.com/anti-discrimination-policy" target="_blank">Anti Discrimination Policy</a></li><li><a href="https://www.urbancompany.com/blog" target="_blank">Blog</a></li><li><a href="https://www.urbancompany.com/reviews" target="_blank">Reviews</a></li><li><a href="https://www.urbancompany.com/near-me" target="_blank">Near Me</a></li><li><a href="https://careers.urbanclap.com/" target="_blank">Careers</a></li><li><a href="https://www.urbancompany.com/purchase-giftcards" target="_blank">Gift Cards</a></li><li><a href="https://www.urbancompany.com/contact-us" target="_blank">Contact Us</a></li></ul></div> */}





            
        </div>  

    )
}

export default Footer
