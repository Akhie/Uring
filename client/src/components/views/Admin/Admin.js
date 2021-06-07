import React from 'react'
import AddProvider from './form.js'

export default function admin() {
    return (
        <div>
            <div style={{ paddingTop:"70px", paddingBottom:"50px" }} className='container'>
                <div className='row'>
                    <div className='col-md-6 p-5'>
                            <b style={{fontSize:"3rem"}}>Add Service Provider</b>
                            <br></br>
                            <br></br>
                            <p>If you have any questions or queries a member of staff will always be happy to help. Feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible.</p>
                                
                    </div>
                    <div className='col-md-6 p-5' >
                        <AddProvider></AddProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}
