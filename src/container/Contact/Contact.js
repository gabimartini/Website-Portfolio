import React, { Component } from 'react';
import './Contact.css';
import * as emailjs from 'emailjs-com'

class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    
  handleSubmit(e){
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'gabimartinii@gmail.com',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_NRGzppO6',
       templateParams,
      'user_4ybcu36BMuNk1A5tb3OjL'
     )
     .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
     this.resetForm()
 }

        resetForm(){
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: '',
              })
            }
          handleChange = (param, e) => {
              this.setState({ [param]: e.target.value })
            }
       render() { 
      

        return (  
<div className='Main-Contact' >
<div className='Title'><p>Get in Touch</p></div>

<form onSubmit={this.handleSubmit.bind(this)}>
<input className='InputSubject' name ='subject' 
type='text' placeholder='Subject'
value={this.state.subject}
onChange={this.handleChange.bind(this, 'subject')}>
</input>

<input className='InputName' name='nome' type='text' 
placeholder='Name'
value={this.state.name}
onChange={this.handleChange.bind(this, 'name')}>
</input>

<input className='InputEmail' name='email' type='text' 
placeholder='Email'
value={this.state.email}
onChange={this.handleChange.bind(this, 'email')}>
</input>

<textarea className='InputMessage' name='mensagem' type='text' 
placeholder='Type your message here'
value={this.state.message}
onChange={this.handleChange.bind(this, 'message')}>
</textarea>

<button className='InputBtn'
type='submit' value='Submit'>Submit</button>

</form>

<a href="https://www.linkedin.com/in/gabriela-martini-556a7282/" target="_blank" className="fa fa-linkedin"></a>
<a href="https://instagram.com/amordeciranda" target="_blank" className="fa fa-instagram"></a>
<div className='CopyWrite'><p>Copyright ©2019 All rights reserved by Gabriela Martini</p></div>
    </div>
        );
    }
}
 
export default Contact;