// import logo from './logo.svg';
// import './styles/Home.css';
import '../styles/Home.css'
import { createMedia } from "@artsy/fresnel"
import PropTypes from 'prop-types'
import { HashRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import Quiz from './Quiz'
import DesktopContainer from './DesktopContainer'
import HomepageHeading from './HomepageHeading'
import bg1 from "../images/bg1.png"

import React, { Component, useState } from 'react'

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

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */


// <MobileContainer>{children}</MobileContainer>

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

function Home() {
  return (
    <div className="Home">
      <ResponsiveContainer>
        <Segment id='seg1'>
          <HomepageHeading id="heading"/>
        </Segment>
        <Segment id='seg2' style={{ padding: '0em 0em'}} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Ceva
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Ceva
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Altceva
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Ceva
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>

              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Ceva</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment id="seg3" style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Cevaa
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Cevaaa
            </p>
            <Button as='a' size='large'>
              Altbuton
            </Button>

            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>Case Studies</a>
            </Divider>

            <Header as='h3' style={{ fontSize: '2em' }}>
              Altcevaaaaaa
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Text mult
            </p>
            <Button as='a' size='large'>
              I'm Still Quite Interested
            </Button>
          </Container>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Gifter stuff</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>
                    Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </ResponsiveContainer>
    </div>
  );
}
// <Image bordered rounded size='large' src='/.png' />

export default Home;
