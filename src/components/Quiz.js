// import logo from './logo.svg';
// import './styles/Home.css';
// import logo from './logo.svg';
// import './styles/Home.css';
import '../styles/Quiz.css'
import { createMedia } from "@artsy/fresnel"
import PropTypes from 'prop-types'
import { HashRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import DesktopContainer from './DesktopContainer'
import bg1 from "../images/landing-page-background-01.png"

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
// <Image bordered rounded size='large' src='/.png' />

function Quiz() {
  return (
    <div className="Quiz">
      <ResponsiveContainer>
        <Segment id='seg1' style={{ padding: '0em 0em'}} vertical>
          <header className="Quiz-header">
            <p> Quiz page </p>
            <p> Quiz page </p>
            <p> Quiz page </p>
            <p> Quiz page </p>
            <p> Quiz page </p>
          </header>
        </Segment>
      </ResponsiveContainer>
    </div>
  );
}

export default Quiz;
