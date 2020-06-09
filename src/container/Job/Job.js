import React, { Component } from 'react';
import './Job.css';
import JobInitialPage from './JobInitialPage.js'
import JobContent from './DesignContent/JobContent'
import WebDesign from './DesignContent/WebApp'
import BackEnd from './DesignContent/BackEnd'

class Job extends Component {

    state={
    showJobPageInitial: true,
    showJobPageDesign: false,
    showJobPageWeb: false,
    showJobPageBE: false,
     }

    DesignHandle= () => {
        this.setState({
            showJobPageInitial: false,
            showJobPageBE: false,
            showJobPageWeb: false,
            showJobPageDesign: true
        })
    }

    WebAppHandle= () => {
        this.setState({
            showJobPageInitial: false,
             showJobPageBE: false,
             showJobPageDesign: false,
             showJobPageWeb: true})
            
    }

    BEAppHandle= () => {
        this.setState({
            showJobPageInitial: false,
             showJobPageBE: true,
             showJobPageDesign: false,
             showJobPageWeb: false})
            
    }



    

    render() { 
      

        return (  
    <div className="Main-Job" >
      <div className='Menu-Job'>
          <nav>
       
          <ul>
              <li><button onClick={this.DesignHandle}>Design</button></li>
              <li><button onClick={this.WebAppHandle}>Web-App</button></li>
              <li><button onClick={this.BEAppHandle}>Back-End</button></li>
          </ul>
          </nav>
      </div>
      <div className='Job-First-Page'>
      <JobInitialPage show={this.state.showJobPageInitial}/>
      <JobContent open={this.state.showJobPageDesign}/>
      <WebDesign show={this.state.showJobPageWeb}/>
      <BackEnd show={this.state.showJobPageBE}/>
      
    </div>
     
    </div>
        );
    }
}
 
export default Job;