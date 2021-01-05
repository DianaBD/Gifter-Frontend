import '../styles/About.css'
import { createMedia } from "@artsy/fresnel"
import PropTypes from 'prop-types'
import DesktopContainer from './DesktopContainer'

import React, { Component } from 'react'

import {
    Grid,
    Image,
    Segment,
    Container
} from 'semantic-ui-react'

const { MediaContextProvider } = createMedia({
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

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
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
  render () {
    const { width } = this.state

    return (
        <div className="About">
            <ResponsiveContainer>
               <Segment id='seg1' style={{ padding: '2em 0em'}} vertical >
                {/*    <Grid divided inverted stackable>*/}

                  <div className="text-center" >
                      <p id="title-about" style={ width > 500 ? { marginLeft: '42%', marginRight: '15%'} : { marginLeft: '12%', marginRight: '6%'}}> Despre noi.. </p>
                      <p id="text-up1" className="text-muted2" style={ width > 500 ? { marginLeft: '42%', marginRight: '15%'} : { marginLeft: '12%', marginRight: '6%'}}>
                        <strong> Exista</strong> in lume suflete care au darul de a raspandi bucurie celor din jur,
                        dar si de a se bucura de orice lucru marunt.
                          Din pacate, bucuria nu poate fi conservata pentru a o darui mai departe.</p>
                      <p id="text-up2" className="text-muted2" style={ width > 500 ? { marginLeft: '42%', marginRight: '7%'} : { marginLeft: '11%', marginRight: '6%'}}>
                        Asadar, cand te afli in dificultate si ai nevoie sa gasesti rapid un cadou concret pentru a-l oferi cuiva,
                      <strong> Gifter</strong> vine in ajutorul tau cu cele mai bune idei!</p>
                  </div>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row centered>
                            <Grid.Column width={5}>
                                <div className="row text-center">
                                    <div className="col-md-4">
                                        <div>
                                           <Image alt='sss' src={`/about1.png`} id="logo1" circular/>
                                        </div>

                                        <h4 className="my-3" style={{ fontSize: '2em' }}>ECONOMISESTE TIMP</h4>
                                        <p className="text-muted">Gaseste idei interesante<br/> cat ai bate din palme </p>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <div className="row text-center">
                                    <div className="col-md-4">
                                        <Image alt='sss' src={`/about2.png`} id="logo1" circular/>
                                        <h4 className="my-3"style={{ fontSize: '2em' }}>FII ORIGINAL</h4>
                                        <p className="text-muted">Cel mai usor mod de a ii arata<br/>cat de mult tii la ea/el.</p>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <div className="row text-center">
                                    <div className="col-md-4">
                                        <Image alt='sss' src={`/about3.png`} id="logo1" circular/>
                                        <h4 className="my-3"style={{ fontSize: '2em' }}>PERSONALIZEAZA</h4>
                                        <p className="text-muted">Multe filtre de cautare,<br/> pregatite pentru tine!</p>
                                    </div>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </ResponsiveContainer>
        </div>
    );
  }
}

export default About;
