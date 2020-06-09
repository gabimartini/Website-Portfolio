import React from 'react';
import Backdrop from './Backdrop'
import './menu.css'
import classes from'./SideDrawer.module.css'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

  
    return (

        <div >
      <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
                 
        <nav className='Menu-Container' >
                                 
             <ul className= "Menu-Fixo">
                <li ><a href='#About' onClick={props.closed} >About</a></li>
                <li><a href='#Portfolio' onClick={props.closed}>Portfolio</a></li>
                <li><a href='#Contact' onClick={props.closed}>Contact</a></li>
            </ul>          
        </nav>

        </div>

        

         </div> 
       
    );
};

export default sideDrawer;

