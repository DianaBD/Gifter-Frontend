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

class Home extends Component {
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
    const { width } = this.state

    return (
      <div className="Home">
        <ResponsiveContainer>
          <Segment id='seg1' style={{ padding: '2em 0em'}} vertical>
            <HomepageHeading id="heading" width={width}/>
          </Segment>
        </ResponsiveContainer>
      </div>
    );
  }
}
// <Image bordered rounded size='large' src='/.png' />

export default Home;
