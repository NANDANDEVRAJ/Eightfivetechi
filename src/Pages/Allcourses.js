import React from 'react'
import Coursedata from "../Data/Coursedata"

export default function Allcourses() {
    const course = Coursedata.courses;
    console.log(course);
    return (
        <div className="left" >
            <div>
            <div className="Topic">
        <h1>All Courses</h1>
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
          <h3>List of Courses</h3>
          <table className="table table-striped">
          <thead>
            <tr>
            <th>Course</th>
            <th>Course Description</th>
            <th>Course Img</th>
            </tr>
        </thead>
        <tbody>
          {course.map((item)=>(
            <tr>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td><img src={item.course_image} alt="img"/></td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
      </div>
        </div>
    )
}
