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
function HomepageHeading(props) {

  return (
    <Container text id="container">
      <div id="container">
        <Header
          as='h1'
          content='SEARCHING FOR THE PERFECT GIFT?'
          inverted
          style={{
            fontSize: props.mobile ? '1em' : '2em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: props.mobile ? '1.5em' : '3em',
            color: '#FCD837'
          }}
        />
        <Header
          as='h2'
          content='We are here to help.'
          inverted
          style={{
            fontSize: props.mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: props.mobile ? '0.5em' : '1.5em',
            color: '#FCD837'
          }}
        />
        <Link to='/quiz'>
          <Button renderAs='button' primary size='huge' style={{ backgroundColor: '#FCD837'}}>
            Take the quiz
            <Icon name='right arrow' />
          </Button>
        </Link>
      </div>
      <div id="img-div">
        <img alt='' style={{ height: '37rem', width: '35rem', marginLeft: '-15rem', marginTop: '-10rem'}} src={`/comp1.png`}/>
      </div>
    </Container>
  )
}
// HomepageHeading.propTypes = {
//   mobile: PropTypes.bool,
// }

export default HomepageHeading;
