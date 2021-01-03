import React, { Component, useState } from 'react'
import '../styles/DesktopContainer.css';
import PropTypes from 'prop-types'
import { createMedia } from "@artsy/fresnel"
import HomepageHeading from './HomepageHeading'
import { Link } from 'react-router-dom'
import bg1 from "../images/bg1.png"
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

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  state = {
    calculations: {
      direction: 'none',
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false,
    },
  }

  handleUpdate = (e, { calculations }) => this.setState({ calculations })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>

        <Visibility
          once={false}
          onTopPassed={this.showFixedMenu}
          onTopPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            vertical
            id="menu-seg"
          >
            <Menu
              fixed={fixed ? 'top' : null}
              pointing={!fixed}
              size='large'
              id="menu"
              className={fixed == true ? null : 'top'}
            >

              <Container id="menu-container" className={ fixed ? "vertical-center" : null}>
                {/*<div id="logo-div">*/}
                <Grid columns={2} id="menu-grid">
                <Grid.Column floated='left'>
                  <Image alt='sss' src={`/logo_small.png`} size='small' id="logo" className={fixed? "shrinked" : "normal"} />
                </Grid.Column>
                {/*<div id="menu-btn-div">*/}
                <Grid.Column floated='right'>
                 <div id="menu-btn-div">
                    <Link to='/home'>
                      <Button id="menu-btn" renderAs='button' className={ fixed == true? 'transparent' : 'top' }>
                      HOME
                      </Button>
                    </Link>
                    <Link to='/quiz'>
                      <Button id="menu-btn" renderAs='button' className={ fixed == true? 'transparent' : 'top' }>
                      TAKE QUIZ
                      </Button>
                    </Link>
                    <Link to='/about'>
                      <Button id="menu-btn" renderAs='button' className={ fixed == true? 'transparent' : 'top' }>
                      ABOUT US
                      </Button>
                    </Link>
                  </div>
                </Grid.Column>
                </Grid>
              </Container>

            </Menu>

          </Segment>
        </Visibility>
        {children}
      </Media>
    )
  }
}

// <Menu.Item as='a' active>
//   Home
// </Menu.Item>
// <Menu.Item as='a'>Work</Menu.Item>
// <Menu.Item as='a'>Company</Menu.Item>
// <Menu.Item as='a'>Careers</Menu.Item>

DesktopContainer.propTypes = {
  children: PropTypes.node,
}
export default DesktopContainer;
