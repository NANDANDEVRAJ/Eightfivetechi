import React from 'react'
import "../App.css"
import Dashdata from "../Data/Dashdata"
export default function Dashboard() {
    return (
        <div className="left">
            <div>
           <div className="Topic">
        <h1>Dashboard</h1>
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
      <div className='container'>
          <div className='item i-one'>
              <div>
              <h1 class="bi bi-person-video2"></h1>
              </div>
              <div>
                  <div>{Dashdata.user_count}</div>
                  <div>Total</div>
              </div>
          </div>
          <div className='item i-two'>
              <div>
              <h1 class="bi bi-arrow-down-up"></h1>
              </div>
              <div>
                  <div>{Dashdata.deleted_count}</div>
                  <div>Deleted User</div>
              </div>
          </div>
          <div className='item i-three'>
              <div>
              <h1 class="bi bi-bar-chart-fill"></h1>
              </div>
              <div>
                  <div>{Dashdata.course_count}</div>
                  <div>Total Course</div>
              </div>
          </div>
          <div className='item i-four'>
              <div>
              <h1 class="bi bi-cart3"></h1>
              </div>
              <div>
                  <div>{Dashdata.sales_count}</div>
                  <div>Total Sales</div>
              </div>
          </div>
      </div>
      </div>
        </div>
    )
}
