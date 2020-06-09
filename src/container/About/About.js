import React, { Component } from 'react';
import './About.css';
import Image from '../../assest/image/Foto-Gabriela.jpg'
import CV from '../../assest/image/Gabriela_Martini.pdf'


class About extends Component {

    OpenCvHandler(){
        window.open(CV)
    }   

    render() { 
      

        return (  
    <div className="Main-About" >
        <img src={Image} className='Gabriela-img' ></img>
        <div className='Apresentation'>
        <div className='About-Head-Name'><p>I'm <br></br>Gabriela</p></div>
        <div className='About-Description'>
        <p>Junior JavaScript <br></br>Developer <span>And Designer</span></p>
        </div>
            
        </div>
        <button className='Button-CV' onClick={this.OpenCvHandler}>My CV</button>


    </div>
        );
    }
}
 
export default About;