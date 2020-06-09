import React from 'react';
import './DesignContent.css';
import Web_1 from "../../../assest/image/Web/Web-1.jpg"
import Web_2 from '../../../assest/image/Web/Web-2.jpg'
import Web_3 from '../../../assest/image/Web/Web-3.jpg'


let BrowserWeb_1 = () => {
    window.open('https://store-rent.herokuapp.com/')
}

let BrowserWeb_2 = () => {
    window.open('https://juliana-theodora.herokuapp.com/')
}

let BrowserWeb_3 = () => {
    window.open('http://equipemultidisciplinar.herokuapp.com/')
}

const WebApp = (props) => (
    
    props.show ? 
    <div className='Job-WebApp-Page'>
    <div className='Web_1'>
    <img src={Web_1} onClick={BrowserWeb_1}></img>
    </div>
    <div className='Web_2'>
    <img src={Web_2} onClick={BrowserWeb_2}></img>
    </div>
    <div className='Web_3'>
    <img src={Web_3} onClick={BrowserWeb_3}></img>
    </div>
   </div> : null
);

export default WebApp;

