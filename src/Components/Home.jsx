import React from 'react'
import { Jumbotron, Media, Container, Nav, Image } from 'react-bootstrap'
import projects from '../assets/projects.js'

const Home = (props) => {
  return (
    <Container>
      <br/>
      <div className='right'>
        <h3 className='title'>Projects</h3>
      </div>
      <br/>
      {projects.map((project) => {
        return (
          <Jumbotron style={{backgroundColor: props.theme[2]}} key={project.name}>
            <Media>
              <Image
                style={{width:'50%', height:'auto'}}
                src={project.image}
                alt={project.name}
              />
              <Media.Body>
                <h4 style={{color: props.theme[0]}}>{project.name}</h4>
                <p className='project-body'>{project.body}</p>
                <Nav.Link href={project.github} target='_blank'>Github</Nav.Link>
                <Nav.Link href={project.live} target='_blank'>Live Version</Nav.Link>
              </Media.Body>
            </Media>
          </Jumbotron>
        )
      })}
    </Container>
  )
}

export default Home
