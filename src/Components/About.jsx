import React from 'react'
import { Container, Card, Image } from 'react-bootstrap'
import pic from '../assets/c-s.jpg'

const About = () => {
  return (
    <Container>
      <br/>
      <div className='right'>
        <h3 className='title'>About Me</h3>
      </div>
      <br/>
      <Card>
        <br/>
        <Image style={{width:'50%', height:'auto'}} className='mx-auto d-block' roundedCircle src={pic}/>
        <Card.Body>
          <br/>
          <p>Hey, I'm Sergio!</p>
          <p>Soon after moving to the US from my beloved Argentina, started this coding journey that I'm actually really enjoying.</p>
          <p>In seek of guidance, found Pursuit, a non-profit organization based in Queens, NY, that provided me with awesome support for this experience which has been such a challenging one!</p>
          <p>Now ready to join the coding community and keep thriving for more user inclusive and earth-committed applications that take advantage of the incredibly powerful tools that internet and cellphone technologies represent.</p>
        </Card.Body>
      </Card>
      <br/>
    </Container>
  )
}

export default About
