import React from 'react';

import './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className='Backdrop'><button onClick={props.clicked}>X</button></div> : null
);

export default backdrop;