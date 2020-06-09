import React from 'react'
import './DrawerToggler.css'

const drawertogler = (props) => (
    <div className='DrawerToggle' onClick={props.drawerToggleClicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawertogler;