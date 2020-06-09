import React from 'react';
import './DesignContent.css';
import Ciranda_2 from '../../../assest/image/Design/Ciranda-2.jpg'
import Ciranda_3 from '../../../assest/image/Design/Ciranda-3.jpg'
import Ciranda_4 from '../../../assest/image/Design/Ciranda-4.jpg'
import Ciranda_5 from '../../../assest/image/Design/Ciranda-5.jpg'



const Design_1 = (props) => {
    let AnimationClasses = ['Fashion'];
    if (props.AnimationRight) {
        AnimationClasses = ['Fashion', 'AnimationRight'];
    }
    else if((props.AnimationLeft)){
        AnimationClasses = ['Fashion', 'AnimationLeft'];
    }
    return(

   

    props.show ? 
    <div className={AnimationClasses.join(' ')}>
    <div className='Ciranda_2'>
    <img src={Ciranda_2}></img>
    </div>
    <div className='Ciranda_3'>
    <img src={Ciranda_3}></img>
    </div>
    <div className='Ciranda_4'>
    <img src={Ciranda_4}></img>
    </div>
    <div className='Ciranda_5'>
    <img src={Ciranda_5}></img>
    </div>
    </div> : null
     )
};

export default Design_1;