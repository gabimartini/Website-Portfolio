import React from 'react';
import './Job.css';
import Fashion from '../../assest/image/Ciranda-1.jpg'
import Ilustration from '../../assest/image/meninas_noite.jpg'
import WebDesign from '../../assest/image/Juliana.jpg'
import BackEnd from '../../assest/image/git-hub.jpg'


const JobInitialPage = (props) => (
    props.show ? 
    <div className='Job-Initial-Page'>
    <div className='Job-Fashion'>
    <img src={Fashion}></img>
    </div>
    <div className='Job-Design'>
    <img src={Ilustration}></img>
    </div>
    <div className='Job-Web'>
    <img src={WebDesign}></img>
    </div>
    <div className='Job-Back-End'>
    <img src={BackEnd}></img>
    </div>
    </div> : null
);

export default JobInitialPage;
