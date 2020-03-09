import React from 'react'
import { Jumbotron, Media, Container, Nav, Image } from 'react-bootstrap'

const Home = (props) => {
  return (
    <>
    <style type='text/css'>
    {`
      .jumbotron {
        background-color: ${props.theme[2]}
      }
    `}
    </style>
    <Container>
      <br/>
      <div className='right'>
        <h3 className='title'>Projects</h3>
      </div>
      <br/>
      <Jumbotron>
        <Media>
          <Image
            style={{width:'50%', height:'auto'}}
            src='https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081'
            alt='placeholder'
          />
          <Media.Body>
            <h5>Project Name</h5>
            <p>this project is about this and that</p>
            <Nav.Link>Github</Nav.Link>
            <Nav.Link>Heroku</Nav.Link>
          </Media.Body>
        </Media>
      </Jumbotron>
      <Jumbotron>
        <Media>
          <Image
            style={{width:'50%', height:'auto'}}
            src='https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081'
            alt='placeholder'
          />
          <Media.Body>
            <h5>Project Name</h5>
            <p>this project is about this and that</p>
            <Nav.Link>Github</Nav.Link>
            <Nav.Link>Heroku</Nav.Link>
          </Media.Body>
        </Media>
      </Jumbotron>
      <Jumbotron>
        <Media>
          <Image
            style={{width:'50%', height:'auto'}}
            src='https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081'
            alt='placeholder'
          />
          <Media.Body>
            <h5>Project Name</h5>
            <p>this project is about this and that</p>
            <Nav.Link>Github</Nav.Link>
            <Nav.Link>Heroku</Nav.Link>
          </Media.Body>
        </Media>
      </Jumbotron>
    </Container>
    </>
  )
}

export default Home
