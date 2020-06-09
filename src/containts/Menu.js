import React, { Component } from 'react';
import './menu.css';
import SideDrawer from './SideDrawer'
import DrawerToggle from './DrawerToggler'



class Menu extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

      
    render() { 
      

        return (  
            <section >
             <SideDrawer open={this.state.showSideDrawer} 
             closed={this.sideDrawerClosedHandler}
             />
            <div className="Menu">
            <DrawerToggle drawerToggleClicked={this.sideDrawerToggleHandler}/>
                 <nav className='Menu-Container DesktopOnly'>
                                 
                    <ul className= "Menu-Fixo">
                        <li><a href='#About'>About</a></li>
                        <li><a href='#Portfolio'>Portfolio</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                    </ul>
                    
                    
                </nav>
            </div>
    
           
            </section>
        );
    }
}
 
export default Menu;