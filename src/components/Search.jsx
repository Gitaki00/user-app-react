import React from 'react'
import Navbar from './Navbar'

const Search = () => {
  return (
    <div>
        <Navbar /><br></br>
        <div className="conatiner">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-lg-6">
                                <input type="text" className="form-control" placeholder="Enter the Name to search"/>
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6">
                               <button className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search