import './App.css';
import Sidebar from './ProjectComp/Sidebar';
import {Routes, Route} from "react-router-dom"
import  Dashboard  from './Pages/Dashboard';
import Allcoursers from "./Pages/Allcourses"
import Addcourses from "./Pages/Addcourses"
import RegisteredUsers from "./Pages/RegisteredUsers"
import Header from './ProjectComp/Header';

function App() {
  return (
    <div className = "App">
      <div className='stack'>
      <Sidebar/>
      <Header/>
      </div>
      {/* <Header/> */}
      <Routes>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Registered" element={<RegisteredUsers/>}/>
      <Route path="/AddCourse" element={<Addcourses/>}/>
      <Route path="/Courses" element={<Allcoursers/>}/>
      </Routes>
      {/* <Dashboard/> */}
    </div>
  );
}
export default App;



// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Reports from './pages/Reports';
// import Products from './pages/Products';

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Switch>
//           <Route path='/' exact component={Home} />
//           <Route path='/reports' component={Reports} />
//           <Route path='/products' component={Products} />
//         </Switch>
//       </Router>
//     </>
//   );
// }

// export default App;