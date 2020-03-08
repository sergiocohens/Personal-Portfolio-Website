import React from 'react'
import { Container, Form, Button} from 'react-bootstrap'

class Contact extends React.Component {
  state = {
    thanks: false
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
      <Container>
        <br/>
        <div className='right'>
          <h3 className='title'>Contact Form</h3>
        </div>
        <br/>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
              <Form.Label>Your Name</Form.Label>
              <Form.Control required type="text"/>
          </Form.Group>
          <Form.Group>
              <Form.Label>Your Email</Form.Label>
              <Form.Control required type="email" placeholder='example@domain.com'/>
          </Form.Group>
          <Form.Group>
              <Form.Label>Your Number</Form.Label>
              <Form.Control required type="tel" placeholder='123-456-7890' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
          </Form.Group>
          <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control required as='textarea' rows="5"/>
          </Form.Group>
          <Button type="submit" variant="primary">Send</Button>
        </Form>
        <br/>
        {(this.state.thanks ? <p>Thanks!</p> : <p></p>)}
      </Container>
    )
  }
}

export default Contact
