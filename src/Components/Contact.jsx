import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import * as emailjs from 'emailjs-com'
import hihat from '../assets/hihat.mp3'
import snare from '../assets/snare.mp3'
import clap from '../assets/clap.mp3'
import kick from '../assets/kick.mp3'

class Contact extends React.Component {
  state = {
    thanks: false,
    name: '',
    email: '',
    number: '',
    message: '',
    theme: this.props.theme
  }

  componentDidUpdate = () => {
    if (this.state.theme !== this.props.theme) {
      this.setState({
        theme: this.props.theme
      })
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async (event) => {
   const form = event.currentTarget;
   if (form.checkValidity() === false) {
    event.preventDefault()
   } else {
   event.preventDefault()
   this.setState({
     thanks: true
   })
   let message = this.state.message + ' (sent by: ' + this.state.name + ')'
   let templateParams = {
      from_name: this.state.email,
      to_name: 'sergiocohensalama@gmail.com',
      subject: this.state.number,
      message_html: message
     }
    await emailjs.send(
      'gmail',
      'template_ddK7p339',
       templateParams,
      'user_44ARKH3bzAp2r3YX8iHgr'
     )
    this.setState({
      thanks: false,
      name: '',
      email: '',
      number: '',
      message: ''
    })
   }
  }

  playHiHat = () => {
    let hihat = document.getElementsByClassName('audio-element')[0]
    hihat.play()
    setTimeout(() => hihat.load(), 200)
  }

  playSnare = () => {
    let snare = document.getElementsByClassName('audio-element')[1]
    snare.play()
    setTimeout(() => snare.load(), 250)
  }

  playClap = () => {
    let clap = document.getElementsByClassName('audio-element')[2]
    clap.play()
    setTimeout(() => clap.load(), 450)
  }

  playKick = () => {
    let kick = document.getElementsByClassName('audio-element')[3]
    kick.play()
    setTimeout(() => kick.load(), 200)
  }

  render() {
    return (
      <>
      <Container>
        <br/>
        <div className='right'>
          <h3 className='title'>Contact Form</h3>
        </div>
        <br/>
        <style type="text/css">
          {`
            .form-control {
              color: ${this.state.theme[0]};
              background-color: ${this.state.theme[1]}
            }

            .form-control:focus {
              color: ${this.state.theme[0]};
              background-color: ${this.state.theme[1]};
              border-color: ${this.state.theme[4]};
              box-shadow: 0px 0px 1px ${this.state.theme[4]} inset, 0px 0px 8px ${this.state.theme[4]}
            }

            ::placeholder {
              color: lightgray
            }

            .btn-theme {
              background-color:${this.state.theme[2]}
            }

            .btn-theme {
              color:${this.state.theme[0]}
            }

            .btn-theme:hover {
              background-color: ${this.state.theme[3]}
            }

            .btn-theme:hover {
              color:${this.state.theme[0]}
            }
          `}
        </style>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
              <div className='left'>
                <Form.Label><h6>Your Name</h6></Form.Label>
              </div>
              <Form.Control name='name' value={this.state.name} onChange={this.handleChange} required type="text"/>
          </Form.Group>
          <Form.Group>
              <div className='left'>
                <Form.Label><h6>Your Email</h6></Form.Label>
              </div>
              <Form.Control name='email' value={this.state.email} onChange={this.handleChange} required type="email" placeholder='example@domain.com'/>
          </Form.Group>
          <Form.Group>
              <div className='left'>
                <Form.Label><h6>Your Number</h6></Form.Label>
              </div>
              <Form.Control name='number' value={this.state.number} onChange={this.handleChange} type="tel" placeholder='123-456-7890' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
          </Form.Group>
          <Form.Group>
              <div className='left'>
                <Form.Label><h6>Message</h6></Form.Label>
              </div>
              <Form.Control name='message' value={this.state.message} message={this.state.message} onChange={this.handleChange} required as='textarea' rows="5"/>
          </Form.Group>
          <Container style={{display: 'flex', justifyContent: 'space-between'}}>
            {(this.state.thanks ? <h3 style={{alignSelf: 'left'}}>Thanks!</h3> : <p></p>)}
            <Button variant='theme' type="submit">Send</Button>
          </Container>
        </Form>
        <br/>
        <br/>
        <div className='right'>
          <h3 className='title'>Drum Machine</h3>
        </div>
        <br/>
        <Container style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
          <Button onClick={this.playHiHat} style={{width:'120px', height:'120px', margin:'5px'}} variant='theme'>HIHAT</Button>
          <Button onClick={this.playSnare} style={{width:'120px', height:'120px', margin:'5px'}} variant='theme'>SNARE</Button>
          <Button onClick={this.playClap} style={{width:'120px', height:'120px', margin:'5px'}} variant='theme'>CLAP</Button>
          <Button onClick={this.playKick} style={{width:'120px', height:'120px', margin:'5px'}} variant='theme'>KICK</Button>
        </Container>
      </Container>
      <audio className='audio-element'><source src={hihat}></source></audio>
      <audio className='audio-element'><source src={snare}></source></audio>
      <audio className='audio-element'><source src={clap}></source></audio>
      <audio className='audio-element'><source src={kick}></source></audio>
      </>
    )
  }
}

export default Contact
