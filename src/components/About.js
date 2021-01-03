import '../styles/About.css'
import { createMedia } from "@artsy/fresnel"
import PropTypes from 'prop-types'
import DesktopContainer from './DesktopContainer'

import React from 'react'

import {
    Grid,
    Image,
    Segment
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

function About() {
    return (
        <div className="About">
            <ResponsiveContainer>
               <Segment id='seg1' style={{ padding: '2em 0em'}} vertical>
                {/*    <Grid divided inverted stackable>*/}
                <div className="text-center">
                    <p className="text-muted2">There are souls in this world who have the gift of finding joy everywhere,
                        and leaving it behind them when they go. It's a shame though we can't actually wrap and offer
                        joy.</p>
                    <p className="text-muted2">So when you find yourself in need of something a bit more physical,</p>
                    <img className="img-fluid d-block mx-auto" src="/logo_small.png" alt=""/>
                    <p className="text-muted2">will come up with the best ideas!</p>
                </div>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <div className="row text-center">
                                    <div className="col-md-4">
                                        <div>
                                           <Image alt='sss' src={`/about1.png`} id="logo1" circular/>
                                        </div>
                                        <h4 className="my-3" style={{ fontSize: '2em' }}>SAVE TIME</h4>
                                        <p className="text-muted">Find interesting ideas<br/>faster than you can say
                                            "gift".</p>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <div className="row text-center">
                                    <div className="col-md-4">
                                        <Image alt='sss' src={`/about2.png`} id="logo1"/>
                                        <h4 className="my-3"style={{ fontSize: '2em' }}>BE ORIGINAL</h4>
                                        <p className="text-muted">Easiest way to show them<br/>how much you care.</p>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <div className="row text-center">
                                    <div className="col-md-4">
                                        <Image alt='sss' src={`/about3.png`} id="logo1"/>
                                        <h4 className="my-3"style={{ fontSize: '2em' }}>PERSONALIZE<br/>YOUR SEARCH</h4>
                                        <p className="text-muted">Lots of options, customized just for you!</p>
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

export default About;
