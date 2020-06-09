import React from 'react';
import './DesignContent.css';
import Ciranda_6 from '../../../assest/image/Design/Ciranda-6.jpg'
import Logo_1 from '../../../assest/image/Design/logo-1.jpg'
import Logo_2 from '../../../assest/image/Design/logo-2.jpg'
import Logo_3 from '../../../assest/image/Design/logo-3.jpg'



const Design_2 = (props) => {
    let AnimationClasses = ['Graphic'];
    if (props.AnimationRight) {
        AnimationClasses = ['Graphic', 'AnimationRight'];
    }
    else if((props.AnimationLeft)){
        AnimationClasses = ['Graphic', 'AnimationLeft'];
    }

    return(
        props.show ? 
    <div className={AnimationClasses.join(' ')}>
    <div className='Ciranda_6'>
    <img src={Ciranda_6}></img>
    </div>
    <div className='Logo_1'>
    <img src={Logo_1}></img>
    </div>
    <div className='Logo_2'>
    <img src={Logo_2}></img>
    </div>
    <div className='Logo_3'>
    <img src={Logo_3}></img>
    </div>
    </div> : null

    )
}
    


export default Design_2;