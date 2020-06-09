import React from 'react';
import './DesignContent.css';
import BE_1 from "../../../assest/image/git-hub.jpg"

let BrowserBE_1 = () => {
    window.open('https://github.com/gabimartini/DropBox-Node.js')
}

let BrowserBE_2 = () => {
    window.open('https://github.com/gabimartini/XBar-Chart-backend-node')
}

const BE = (props) => (
    props.show ? 
    <div className='Job-BE-Page'>
    <div className='BE_1'>
    <img src={BE_1} onClick={BrowserBE_1}></img>
    </div>
    <div className='BE_2'>
    <img src={BE_1} onClick={BrowserBE_2}></img>
    </div>
   </div> : null
);

export default BE;