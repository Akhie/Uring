import React from 'react';
import AddCon from "./form.js";

function ContactPage() {
    return (
        <div>

            {/* <div className='row'>
                <div className='text-center text-white pt-3 pb-1'>
                    <p style={{color:"red"}}>Please get in touch and our expert support team will answer all your questions.</p>
                </div>
            </div> */}

            <div style={{ paddingTop:"70px", paddingBottom:"50px" }} className='container'>
                <div className='row'>
                    <div className='col-md-6 p-5'>
                            <b style={{fontSize:"3rem"}}>Connect With Us</b>
                            <br></br>
                            <br></br>
                            <p>If you have any questions or queries a member of staff will always be happy to help. Feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible.</p>
                            <br></br>
                            <div>
                                        <a className="btn btn-social-icon btn-google" href="http://google.com/"><i className="fa fa-google"></i></a>
                                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                    </div>   
                    </div>
                    <div className='col-md-6 p-5' >
                        <AddCon></AddCon>
                    </div>
                </div>
            </div>

            
        </div>  
    )
}

export default ContactPage





