import React from 'react';
import './DesignContent.css';
import Ilustration_1 from '../../../assest/image/Design/ilustração-1.jpg'
import Ilustration_2 from '../../../assest/image/Design/ilustração-2.jpg'
import Ilustration_3 from '../../../assest/image/Design/ilustração-3.jpg'
import Ilustration_4 from '../../../assest/image/Design/ilustração-4.jpg'



const Design_3 = (props) => {

    let AnimationClasses = ['Ilustration-Page'];
    if (props.AnimationRight) {
        AnimationClasses = ['Ilustration-Page', 'AnimationRight'];
    }
    else if((props.AnimationLeft)){
        AnimationClasses = ['Ilustration-Page', 'AnimationLeft'];
    }

    return(
        props.show ? 
        <div className={AnimationClasses.join(' ')}>
        <div className='Ilustration_1'>
        <img src={Ilustration_1}></img>
        </div>
        <div className='Ilustration_2'>
        <img src={Ilustration_2}></img>
        </div>
        <div className='Ilustration_3'>
        <img src={Ilustration_3}></img>
        </div>
        <div className='Ilustration_4'>
        <img src={Ilustration_4}></img>
        </div>
        </div> : null
    )
}
   

export default Design_3;