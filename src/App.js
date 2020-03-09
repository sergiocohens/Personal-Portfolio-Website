import React from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

class App extends React.Component {
  state = {
    theme: ['black','white', 'lightgray', 'darkgray', 'red']
  }

  changeTheme = (event) => {
    switch (event.target.innerText) {
      case 'Classic':
        this.setState({
          theme: ['black','white', 'lightgray', 'darkgray', 'red']
        })
      break;
      case '80s':
        this.setState({
          theme: ['cyan','black','magenta','purple','lime']
        })
      break;
      case 'Green':
        this.setState({
          theme: ['white','teal','green','darkgreen','lightgreen']
        })
      break;
      default:
      this.setState({
        theme: []
      })
    }
  }

  renderHome = (routeProps) => {
    return <Home {...this.state} {...routeProps} />
  }

  renderAbout = (routeProps) => {
    return <About {...this.state} {...routeProps} />
  }

  renderContact = (routeProps) => {
    return <Contact {...this.state} changeTheme={this.changeTheme} {...routeProps} />
  }

  render() {
    const { theme } = this.state
    return (
      <div className="App" style={{ backgroundColor: theme[1]}}>
      <style type="text/css">
        {`
          h3, p, h5, h6 {
            color: ${theme[0]}
          }

          a {
            color: ${theme[4]}
          }
        `}
      </style>
      <Container fluid='true'>
        <Navbar style={{ backgroundColor: theme[2] }} fixed='top'>
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
            <NavDropdown title={<span style={{ color: theme[0]}}>Theme</span>}>
              <NavDropdown.Item onClick={this.changeTheme}>Classic</NavDropdown.Item>
              <NavDropdown.Item onClick={this.changeTheme}>80s</NavDropdown.Item>
              <NavDropdown.Item onClick={this.changeTheme}>Green</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Brand style={{ color: theme[0] }}>C-S</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <Switch>
        <Route exact path='/personal-portfolio-website' render={this.renderHome}/>
        <Route path='/personal-portfolio-website/about' render={this.renderAbout}/>
        <Route path='/personal-portfolio-website/contact' render={this.renderContact}/>
      </Switch>
      <br/>
      </div>
    )
  }
}

export default App;
