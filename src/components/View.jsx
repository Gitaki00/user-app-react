import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [userData,changeUserData] = useState(
       [ ]
    )
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/users").then(
        (response)=>{
            changeUserData(response.data)
        }
      ).catch()
    }
    useEffect(()=>{fetchData()},{})
  return (
    <div>
        <Navbar /><br></br>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="table-responsive">
                    <table class="table table-striped table-dark  ">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">email</th>
      <th scope="col">Address</th>
      <th scope="col">Phone no.</th>
      <th scope="col">Website</th>
      <th scope="col">Company</th>
    </tr>
  </thead>
  <tbody>
                            {userData.map(
                                (value,index)=>{
                                    return (
                                        
    <tr>
      <th scope="row">{value.id}</th>
      <td>{value.name}</td>
      <td>{value.username}</td>
      <td>{value.email}</td>
      <td>{value.address.street}<br></br>{value.address.suite}<br></br>{value.address.city}<br></br>{value.address.zipcode}
      <br></br>Latitutde:{value.address.geo.lat}<br></br>Longtitude:{value.address.geo.lng}</td>
      <td>{value.phone}</td>
      <td>{value.website}</td>
      <td>{value.company.name}<br></br>{value.company.catchPhrase}<br></br>{value.company.bs}</td>
    </tr>
 
                                        
                                    )
                                }
                            )}
                             </tbody>
</table>
        </div>                
                </div>
            </div>
        </div>
    </div>
  )
}

export default View