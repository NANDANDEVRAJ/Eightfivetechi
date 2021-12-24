import React from "react";

export default function Addcourses() {
  return (
    <div className="left">
        <div>
      <div className="Topic">
        <h1>Add Courses</h1>
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
        <h3>Add New Courses</h3>
        <form>
  <div className="form-group">
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Course"/>
    <br/>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Course Description"/>
  </div><br/>
  
          <div className="form-group">
            <label for="exampleFormControlFile1">Course Image</label><br/>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div><br/>
          <button type="submit" class="btn btn-danger">Add Course</button>

        </form>
      </div>
      </div>
    </div>
  );
}
