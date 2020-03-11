import React from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Theme from './Components/Theme'

class App extends React.Component {
  state = {
    theme: ['black','white', 'lightgray', 'darkgray', 'darkred']
  }

  changeTheme = (event) => {
    switch (event.target.innerText) {
      case 'Classic':
        this.setState({
          theme: ['black','white', 'lightgray', 'darkgray', 'darkred']
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
      break
    }
  }

  customTheme = (newTheme) => {
    this.setState({
      theme: newTheme
    })
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

  renderTheme = (routeProps) => {
    return <Theme {...this.state} changeTheme={this.changeTheme} customTheme={this.customTheme} {...routeProps} />
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
        <Navbar style={{ backgroundColor: theme[3] }} fixed='top'>
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
              <NavDropdown.Item onClick={this.changeTheme}>Green</NavDropdown.Item>
              <NavDropdown.Item onClick={this.changeTheme}>80s</NavDropdown.Item>
              <NavDropdown.Item><Link to='/personal-portfolio-website/theme'>Custom</Link></NavDropdown.Item>
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
        <Route path='/personal-portfolio-website/theme' render={this.renderTheme}/>
      </Switch>
      <br/>
      </div>
    )
  }
}

export default App;
