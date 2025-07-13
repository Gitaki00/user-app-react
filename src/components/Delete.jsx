import React from 'react'
import Navbar from './Navbar'

const Delete = () => {
  return (
    <div>
        <Navbar /><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <input type="text" className="form-control" placeholder='Enter the name to delete'/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <button className="btn btn-danger">Danger</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete