import React, { Component } from 'react';
import classes from'./Body.module.css';

import About from '../container/About/About'
import Job from '../container/Job/Job'
import Contact from '../container/Contact/Contact'

class Body extends Component {

       
    render() { 
      

        return (  
<div className={classes.BodyContent}>

<div className={classes.AboutContent} id='About'>
<About/>
</div>

<div className={classes.TopBotton}></div>
<div className={classes.JobContent} id='Portfolio'>
<Job/>
</div>

<div className={classes.Botton}></div>

<div className={classes.ContactContent} id='Contact'>
    <Contact/>
</div>


       </div>
        );
    }
}
 
export default Body;