import React from 'react';
import './Job.css';
import Design_1 from './DesignContent/Design-1'
import Design_2 from './DesignContent/Design-2';
import Design_3 from './DesignContent/Design-3'


const JobDesign = (props) => {


    return (
        props.show ? 

    
        <div className='Job-Design-Page'>
            <button className='Left' onClick={props.ClickLeft}> Back </button>
            <button className='Right'onClick={props.ClickSide}> Next </button>
            <Design_1 AnimationRight ={props.classActiveRight} 
            AnimationLeft={props.classActiveLeft}
            show={props.Show_1}/>
            <Design_2  AnimationRight ={props.classActiveRight} 
            AnimationLeft={props.classActiveLeft}
            show={props.Show_2}/>
            <Design_3  
            AnimationRight ={props.classActiveRight} 
            AnimationLeft={props.classActiveLeft}
            show={props.Show_3}/>
        
        </div> : null
    )
};

export default JobDesign;