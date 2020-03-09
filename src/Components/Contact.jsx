import React from 'react'
import { Container, Form, Button} from 'react-bootstrap'

class Contact extends React.Component {
  state = {
    thanks: false,
    theme: this.props.theme
  }

  componentDidUpdate = () => {
    if (this.state.theme !== this.props.theme) {
      this.setState({
        theme: this.props.theme
      })
    }
  }

  handleSubmit = async (event) => {
   const form = event.currentTarget;
   if (form.checkValidity() === false) {
    event.preventDefault()
   }
   await this.setState({
     thanks: true
   })
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
              <Form.Control required type="text"/>
          </Form.Group>
          <Form.Group>
              <div className='left'>
                <Form.Label><h6>Your Email</h6></Form.Label>
              </div>
              <Form.Control required type="email" placeholder='example@domain.com'/>
          </Form.Group>
          <Form.Group>
              <div className='left'>
                <Form.Label><h6>Your Number</h6></Form.Label>
              </div>
              <Form.Control required type="tel" placeholder='123-456-7890' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
          </Form.Group>
          <Form.Group>
              <div className='left'>
                <Form.Label><h6>Message</h6></Form.Label>
              </div>
              <Form.Control required as='textarea' rows="5"/>
          </Form.Group>
          <div className='right'>
            <style type='text/css'>
            {`

            `}
            </style>
            <Button variant='theme' type="submit">Send</Button>
          </div>
        </Form>
        <br/>
        {(this.state.thanks ? <p>Thanks!</p> : <p></p>)}
      </Container>
      </>
    )
  }
}

export default Contact
