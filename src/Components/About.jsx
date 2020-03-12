import React from 'react'
import { Container, Card, Image, Nav } from 'react-bootstrap'
import pic from '../assets/c-s.jpg'

const About = (props) => {
  return (
    <>
    <Container>
      <br/>
      <div className='right'>
        <h3 className='title'>About Me</h3>
      </div>
      <br/>
      <Card style={{ borderColor: props.theme[4], borderWidth: '3px',  backgroundColor: props.theme[1] }}>
        <br/>
        <Image style={{ width:'50%', height:'auto' }} className='mx-auto d-block' roundedCircle src={pic}/>
        <Card.Body>
          <br/>
          <p>Hey, I'm Sergio!</p>
          <p>Soon after moving to the US from my beloved Argentina, started this coding journey that I'm actually really enjoying.</p>
          <p>In seek of guidance, found Pursuit, a non-profit organization based in Queens, NY, that provided me with awesome support for this experience which has been such a challenging one!</p>
          <p>Now ready to join the coding community and keep thriving for more user inclusive and earth-committed applications that take advantage of the incredibly powerful tools that internet and cellphone technologies represent.</p>
        </Card.Body>
      </Card>
      <br/>
      <div className='right'>
        <h3 className='title'>Technologies</h3>
      </div>
      <br/>
      <Container style={{display:'flex', flexWrap:'wrap', justifyContent: 'space-around', width: '100%'}}>
        <Image style={{ width:'90px', padding:'10px'}} src='https://cdn.iconscout.com/icon/free/png-512/react-4-1175110.png'/>
        <Image style={{ width:'90px', padding:'10px'}} src='https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png'/>
        <Image style={{ width:'90px', padding:'10px'}} src='https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png'/>
        <Image style={{ width:'90px', padding:'10px'}} src='https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png'/>
        <Image style={{ width:'90px', padding:'10px'}} src='https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png'/>
      </Container>
      <br/>
      <div className='right'>
        <h3 className='title'>Links</h3>
      </div>
      <br/>
      <Container style={{display:'flex', flexWrap:'wrap', justifyContent: 'space-between', width: '75%'}}>
        <Nav.Link href='https://github.com/sergiocohens' target='_blank'>
          <Image style={{width: '220px', padding:'10px'}} src='https://pngimg.com/uploads/github/github_PNG65.png'/>
        </Nav.Link>
        <Nav.Link href='https://www.linkedin.com/in/sergio-cohen-salama/' target='blank'>
          <Image style={{width: '220px', padding:'10px'}} src='https://cdn.worldvectorlogo.com/logos/linkedin.svg'/>
        </Nav.Link>
      </Container>
    </Container>
    </>
  )
}

export default About
