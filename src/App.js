import React from 'react';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
    <Container fluid='true'>
      <Navbar fixed='top' bg='light'>
        <Container>
        <Nav>
          <Nav.Link>
            <Link to='/personal-portfolio-website'>Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/personal-portfolio-website/about'>About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/personal-portfolio-website/contact'>Contact</Link>
          </Nav.Link>
        </Nav>
        <Navbar.Brand>C-S</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    <Switch>
      <Route exact path='/personal-portfolio-website' component={Home}/>
      <Route path='/personal-portfolio-website/about' component={About}/>
      <Route path='/personal-portfolio-website/contact' component={Contact}/>
    </Switch>
    </div>
  );
}

export default App;
