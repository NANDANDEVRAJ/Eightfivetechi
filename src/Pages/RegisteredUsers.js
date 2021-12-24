import React from 'react'
import Userdata from "../Data/Userdata"

export default function RegisteredUsers() {
    console.log(Userdata);
    return (
        <div className="left">
            <div>
             <div className="Topic">
        <h1>Registered Users</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </nav>
      </div>
      <div>
          <h2>List of Users</h2>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Email ID</th>
      <th scope="col">Contact Number</th>
      <th scope="col">address</th>
      <th scope="col">Registration Date</th>
    </tr>
  </thead>
  <tbody>
      {Userdata.map((item)=>(
          <tr>
          <td>{item.username}</td>
          <td>lastname</td>
          <td>{item.email}</td>
          <td>{item.contact}</td>
          <td>{item.address}</td>
          <td>{item.created_at}</td>
        </tr>
      ))
      }
  </tbody>
    </table>
      </div>
      </div>
        </div>
    )
}
