import React from 'react'
import Navbar from './Navbar'

const Add = () => {
  return (
    <div>
        <Navbar /><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-lg-6">
                            <div className="label form-label">Id</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6">
                            <div className="label form-label">Name</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6">
                            <div className="label form-label">Username</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6">
                            <div className="label form-label">Email</div>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-lg-12">
                            <div className="label form-label">Address</div></div>
                            <div className="col col-12 col-sm-6 col-lg-6">
                            <input type="text" className="form-control" placeholder="Street" /><br></br></div>
                            <div className="col col-12 col-sm-6 col-lg-6">
                            <input type="text" className="form-control" placeholder="Suite" /><br></br></div>
                            <div className="col col-12 col-sm-6 col-lg-6">
                            <input type="text" className="form-control" placeholder="City" /><br></br></div>
                            <div className="col col-12 col-sm-6 col-lg-6">
                            <input type="text" className="form-control" placeholder="Zipcode" /><br></br></div>
                            <div className="col col-12 col-sm-6 col-lg-6">
                            <input type="text" className="form-control" placeholder="Longtitude" /><br></br></div>
                            <div className="col col-12 col-sm-6 col-lg-6">
                            <input type="text" className="form-control" placeholder="Latitute" /></div>
                        
                        <div className="col col-12 col-sm-6 col-lg-6">
                            <div className="label form-label">Phone no.</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6">
                            <div className="label form-label">Website</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-lg-12">
                            <div className="label form-label">Company</div></div>
                            <div className="col col-12 col-sm-6 col-lg-6">
                            <input type="text" className="form-control" placeholder='Name' /><br></br></div>
                            <div className="col col-12 col-sm-6 col-lg-6">
                            <input type="text" className="form-control" placeholder='catchPhrase' /><br></br></div>
                            <div className="col col-12 col-sm-6 col-lg-6">
                            <input type="text" className="form-control" placeholder='bs' /></div>
                        <div className="col col-12 col-sm-6 col-lg-6">
                            <button className="btn btn-success">Add</button>
                        </div>
                        <div className="col col-12 col-sm-6 col-lg-6">.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add