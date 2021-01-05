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
  Dropdown
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

class DesktopContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
      height: 0,
      fixed: false,
      showMenu: false
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  hideFixedMenu = () => this.setState({...this.state, fixed: false, showMenu: false })
  showFixedMenu = () => this.setState({...this.state, fixed: true })

  componentDidMount() {
    this.updateWindowDimensions();
    // document.addEventListener('mousedown', this.handleClickOutside);

    this.hideFixedMenu();
    if (this.state.height > 0) {
      this.showFixedMenu();
    }
      // this.showFixedMenu();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    // document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log(window.innerWidth)
    this.setState({...this.state, width: window.innerWidth, height: window.innerHeight });
  }

  toggleMenu = () => {
    console.log(this.state.showMenu)
    this.setState({...this.state, showMenu: !this.state.showMenu, fixed: true})
    console.log(this.state.showMenu)
  }

  // handleClickOutside(event) {
  //   console.log("clickoutside")
  //   if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
  //     alert('You clicked outside of me!');
  //     this.setState({...this.state, showMenu: false });
  //   }
  //
  // }

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { width } = this.state
    const {showMenu} = this.state

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
              className={fixed == true ? (showMenu == true ? 'mini' : null) : 'top'}
            >

              <Container id="menu-container" className="margin-top">
                <Grid columns={2} id="menu-grid">
                <Grid.Column floated='left'>
                  <Image alt='sss' src={`/logo_small.png`} size='small' id="logo" className={fixed? "shrinked" : "normal"} />
                  { width < 800 && showMenu == true ?
                    <div id="menu-left-div">
                      <Link to='/home'>
                        <Button id="menu-btn-left" renderAs='button' className={ fixed == true? 'transparent' : 'top' }>
                        ACASA
                        </Button>
                      </Link>
                      <Link to='/about'>
                        <Button id="menu-btn-left" renderAs='button' className={ fixed == true? 'transparent' : 'top' }>
                        DESPRE NOI
                        </Button>
                      </Link>
                      <Link to='/quiz'>
                        <Button id="menu-btn-left" renderAs='button' className={ fixed == true? 'transparent' : 'top' }>
                        QUIZ
                        </Button>
                      </Link>
                    </div>
                    : null }
                </Grid.Column>
                {/*<div id="menu-btn-div">*/}
                <Grid.Column floated='right'>
                 { width > 800 ?
                   <div id="menu-btn-div">
                      <Link to='/home'>
                        <Button id="menu-btn" renderAs='button' className={ fixed == true? 'transparent' : 'top' } onClick={this.hideFixedMenu}>
                        ACASA
                        </Button>
                      </Link>
                      <Link to='/about'>
                        <Button id="menu-btn" renderAs='button' className={ fixed == true? 'transparent' : 'top' } onClick={this.hideFixedMenu}>
                        DESPRE NOI
                        </Button>
                      </Link>
                      <Link to='/quiz'>
                        <Button id="menu-btn" renderAs='button' className={ fixed == true? 'transparent' : 'top' } onClick={this.hideFixedMenu}>
                        QUIZ
                        </Button>
                      </Link>

                    </div>
                  : (
                    <React.Fragment>
                        <Button animated='vertical' id="bars-menu-btn">
                          <Button.Content hidden onClick={this.toggleMenu}> Menu</Button.Content>
                          <Button.Content visible onClick={this.toggleMenu}>
                            <Icon name='bars'/>
                          </Button.Content>
                        </Button>
                    </React.Fragment>
                    )
                  }
                </Grid.Column>
                </Grid>
              </Container>

            </Menu>

          </Segment>
        </Visibility>
        {children}
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable centered>
              <Grid.Row centered>
                  <Header inverted as='h4' content='Copyright © Gifter 2020'/>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
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
