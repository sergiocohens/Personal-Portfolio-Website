import React from 'react'
import { Container, Dropdown, Jumbotron } from 'react-bootstrap'

class Theme extends React.Component {
  state = {
    theme: this.props.theme,
    options: ['font','background','cards','navbar','links'],
    colors: ['white', 'yellow', 'red', 'blue', 'orange', 'green', 'purple', 'black'],
    themeOptionsAndIndexes: {
      'font': 0,
      'background': 1,
      'cards': 2,
      'navbar': 3,
      'links': 4
    }
  }

  componentDidUpdate = () => {
    if (this.state.theme !== this.props.theme) {
      this.setState({
        theme: this.props.theme
      })
    }
  }

  handleChange = (event,eventKey) => {
    const { theme, themeOptionsAndIndexes} = this.state
    let newTheme = theme
    let indexOfChange = themeOptionsAndIndexes[eventKey.target.type]
    newTheme[indexOfChange] = eventKey.target.innerText
    this.props.customTheme(newTheme)
  }

  render() {
    const { theme, options, colors, themeOptionsAndIndexes } = this.state
    return (
      <Container>
        <br/>
        <div className='right'>
          <h3 className='title'>Custom Theme</h3>
        </div>
        <br/>
        <Jumbotron style={{backgroundColor: theme[2], padding:'52px'}}>
          <br/>
          {options.map((option) => {
            return (
              <div key={option}>
              <Container style={{display: 'flex', justifyContent: 'space-between'}}>
                <style type='text/css'>
                {`
                  .dropdown-toggle:focus {
                  border-color: white;
                  box-shadow: 0px 0px 0px white inset, 0px 0px 0px white
                  }
                `}
                </style>
                <h5>{option}:</h5>
                <Dropdown drop='down' onSelect={this.handleChange}>
                  <Dropdown.Toggle style={{backgroundColor: 'white', color: 'black', borderColor: 'white'}}>{theme[themeOptionsAndIndexes[option]]}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {colors.map((color) =>
                      <Dropdown.Item type={option} style={{backgroundColor: color, color: color}} key={color}>{color}</Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </Container>
              <br/>
              </div>
            )
          })}
        </Jumbotron>
      </Container>
    )
  }
}

export default Theme
