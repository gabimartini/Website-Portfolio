import React, { Component } from 'react';
import JobDesign from '../JobDesign'

class JobContent extends Component {

    state={
        ShowDesign_1 : true,
        ShowDesign_2 : false,
        ShowDesign_3 : false,
        ActiveRight : false,
        ActiveLeft : false
    }

    HandleClickSide = () => {
        
if( this.state.ShowDesign_1){
    this.setState({ShowDesign_1: false,
        ShowDesign_2 : true})
}

if( this.state.ShowDesign_2){
    this.setState({ShowDesign_2: false,
        ShowDesign_3 : true})
}

if( this.state.ShowDesign_3){
    this.setState({ShowDesign_3: false,
        ShowDesign_1 : true})
}
this.setState({ActiveRight: true,
    ActiveLeft: false,
    })

}


HandleClickLeft = () => {
    if( this.state.ShowDesign_3){
        this.setState({ShowDesign_3: false,
             ShowDesign_2 : true})
        }
        
    if( this.state.ShowDesign_2){
        this.setState({ShowDesign_2: false,
            ShowDesign_1 : true})
        }
        
    if( this.state.ShowDesign_1){
        this.setState({ShowDesign_1: false,
                ShowDesign_3 : true})
        }

        this.setState({ActiveRight: false,
            ActiveLeft: true })
    }
  
    render() { 
      
       

        return (  
   
      
     <JobDesign show = {this.props.open}
     Show_1={this.state.ShowDesign_1}
     Show_2={this.state.ShowDesign_2}
     Show_3={this.state.ShowDesign_3}
     classActiveLeft={this.state.ActiveLeft}
     classActiveRight={this.state.ActiveRight}
    ClickSide={this.HandleClickSide}
    ClickLeft={this.HandleClickLeft}/>
   
        );
    }
}
 
export default JobContent;