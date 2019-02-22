import React from 'react'
import './DashBoard.css'
import img1  from  '../../../src/assets/images/student2.jpg'
import img2 from '../../../src/assets/images/student1.png'
import AuthContext from '../context/auth-context' 

export default function DashbordPage() {
  return <AuthContext.Consumer>
    { value => {
      return (
        <React.Fragment>
        <div className="container my-5">
          <h1 className="text-center text-capitalize  welcome-text">welcome To Dashboard, <span className="text-capitalize">{value.name}</span> </h1>
            <h2 className="text-center text-capitalize">Below are some statistics data:</h2>
          <div className="row my-5">  
              <div className="col-md-10 mx-auto">
                <h2 className="text-center text-capitalize">Results of Ignite Nation partnering With Schools Since 1998</h2>
                <div className="img-container">
                  <img src={img1} alt="" className="image img-thumbnail"
                  />
                </div>
              </div>
             
          </div>
          </div>
          
         
       <div className="container my-5 p-5 second-section">
            <h2 className="text-center text-capitalize">The labor force participation rate</h2>
           <div className="row">
           
           
              <div className="col-md-6">
               
                <div className="img-container">
                  <img src={img2} alt="" className="image img-thumbnail"
                  />
                </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="content">
                   
                  <p>The labor force participation rate for recent high school graduates enrolled in college was 38.2 percent. 
                     Recent high school graduates enrolled as full-time college students were about half as likely to be in the labor
                      force (33.9 percent) as were their peers enrolled part time (69.2 percent).</p>
                   <p>Recent high school graduates not enrolled in college in the fall of 2012 were more likely to be in the labor force than their counterparts 
                    enrolled in college; 69.6 percent of high school graduates not enrolled in college were working or seeking employment.</p>
                  </div>
                  
   
                </div>
              
              
             
          </div>
       
          
       </div>
       </React.Fragment>   
     )
    } }
  </AuthContext.Consumer>
  
}
