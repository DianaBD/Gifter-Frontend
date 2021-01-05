import React, { Component, useState } from 'react'
import "../styles/HomepageHeading.css"
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// const HomepageHeading = ({ mobile }) => (
class HomepageHeading extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    document.addEventListener('mousedown', this.handleClickOutside);
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log(window.innerWidth)
    this.setState({...this.state, width: window.innerWidth, height: window.innerHeight });
  }

 render () {
   const {width} = this.state
    return (
      <Container>
        <div id="container">
          <Header
            as='h1'
            content='ESTI IN CAUTAREA CADOULUI PERFECT?'
            inverted
            style={ width > 500 ? {marginTop: '3em', lineHeight: '1.2em', width: '70%'} : {marginTop: '0em', lineHeight: '1em', fontSize: '2rem', width: '80%'}}
            id="h1"
          />
          <div
            id="line-title"
            style={ width > 500 ? {minHeight: '5px', maxWidth: '70%'} : {minHeight: '5px', maxWidth: '70%'}}
          >
          </div>
          <Header
            as='h2'
            content='Suntem aici sa te ajutam.'
            inverted
            style={ width > 500 ? {marginTop: '1.5em'} : {marginTop: '0.5em'}}
            id="h2"
          />
          <Link to='/quiz'>
            <Button renderAs='button' primary size='huge' style={{ backgroundColor: '#FCD837'}} id="take-quiz-btn">
              CATRE QUIZ
              <Icon name='right arrow' />
            </Button>
          </Link>
        </div>
        <div id="img-div">
          <Image id="home-img" style={ width < 500?
            {maxWidth: '20rem', marginTop: '14rem', marginLeft: '2rem'}
            : {maxWidth: '35rem', marginTop: '3rem', marginLeft: '42rem'}}
            src={`/comp1.png`}/>
        </div>
      </Container>
    )
  }
}
// HomepageHeading.propTypes = {
//   mobile: PropTypes.bool,
// }

export default HomepageHeading;
