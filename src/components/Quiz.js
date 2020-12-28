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
import man18 from '../images/man_18.png';
import man1825 from '../images/man_18_25.png';
import man2635 from '../images/man_26_35.png';
import man3645 from '../images/man_36_45.png';
import man4660 from '../images/man_46_60.png';
import man60 from '../images/man_60plus.png';
import woman18 from '../images/woman_18.png';
import woman1825 from '../images/woman_18_25.png';
import woman2635 from '../images/woman_26_35.png';
import woman3645 from '../images/woman_36_45.png';
import woman4660 from '../images/woman_46_60.png';
import woman60 from '../images/woman_60plus.png';
import tata from '../images/tata.png';
import mama from '../images/mama.png';
import bunic from '../images/bunic.png';
import bunica from '../images/bunica.png';
import fiica from '../images/fiica.png';
import fiu from '../images/fiu.png';
import frate from '../images/frate.png';
import sora from '../images/sora.png';
import iubit from '../images/iubit.png';
import iubita from '../images/iubita.png';
import prieten from '../images/prieten.png';
import prietena from '../images/prietena.png';
import soacra from '../images/soacra.png';
import socru from '../images/socru.png';
import sot from '../images/sot.png';
import sotie from '../images/sotie.png';
import altceva from '../images/altceva.png';
import aniversare from '../images/aniversare.png';
import cadouCasaNoua from '../images/cadou_casa_noua.png';
import Craciun from '../images/craciun.png';
import Paste from '../images/paste.png';
import dragobete from '../images/dragobete.png';
import ziNastere from '../images/zi_nastere.png';
import Checkbox from '@material-ui/core/Checkbox';

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
class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayQuestion1: true,
      displayQuestion2: false,
      displayQuestion3: false,
      displayQuestion4: false,
      displayQuestion5: false,
      displayQuestion6: false,
      displayQuestion7: false,
      displayQuestion8: false,
      finishQuiz: false,
      chosenSex: "",
      chosenAge: "",
      chosenRelationship: "",
      chosenOccasion: "",
      chosenGiftType: [],
      chosenGiftCharacteristics: [],
      chosenInterests: [],
      chosenBudget: "",
      image1: null,
      image2: null,
      image3: null,
      value1: ""
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeValue2 = this.onChangeValue2.bind(this);
    this.onChangeValue3 = this.onChangeValue3.bind(this);
    this.onChangeValue4 = this.onChangeValue4.bind(this);
    this.onChangeValue5 = this.onChangeValue5.bind(this);
    this.onChangeValue6 = this.onChangeValue6.bind(this);
    this.onChangeValue7 = this.onChangeValue7.bind(this);
    this.onChangeValue8 = this.onChangeValue8.bind(this);
  }

  onChangeValue(event) {
    this.state.chosenSex = event.target.value;
    console.log(event.target.value);
  }

  onChangeValue2(event) {
    this.state.chosenAge = event.target.value;
    console.log(event.target.value);
  }

  onChangeValue3(event) {
    this.state.chosenRelationship = event.target.value;
    console.log(event.target.value);
  }

  onChangeValue4(event) {
    this.state.chosenOccasion = event.target.value;
    console.log(event.target.value);
  }

  onChangeValue5(event) {
    let data=this.state.chosenGiftType;
    var alreadyContainsThisType = false;
    var aux;
    for(var i = 0; i < this.state.chosenGiftType.length; i++) {
      if(this.state.chosenGiftType[i] == event.target.value) {
        console.log("Val pe care o am in vector deja: ", this.state.chosenGiftType[i]);
        alreadyContainsThisType = true;
        aux = i;
      }
    }

    if(alreadyContainsThisType == false) {
      console.log("Pe ramura de add");
      data.push(event.target.value);
      this.state.chosenGiftType=data;
      console.log(this.state.chosenGiftType);
    } else {
      //inseamna ca il contine si a dat click => il sterge
      console.log("Pe ramura de remove");
      data.splice(aux, 1);
      this.state.chosenGiftType=data;
      console.log(this.state.chosenGiftType);
    }
  }

  onChangeValue6(event) {
    let data=this.state.chosenGiftCharacteristics;
    var alreadyContainsThisCharacteristics = false;
    var aux;
    for(var i = 0; i < this.state.chosenGiftCharacteristics.length; i++) {
      if(this.state.chosenGiftCharacteristics[i] == event.target.value) {
        alreadyContainsThisCharacteristics = true;
        aux = i;
      }
    }

    if(alreadyContainsThisCharacteristics == false) {
      console.log("Pe ramura de add");
      data.push(event.target.value);
      this.state.chosenGiftCharacteristics=data;
      console.log(this.state.chosenGiftCharacteristics);
    } else {
      //inseamna ca il contine si a dat click => il sterge
      console.log("Pe ramura de remove");
      data.splice(aux, 1);
      this.state.chosenGiftCharacteristics=data;
      console.log(this.state.chosenGiftCharacteristics);
    }
  }

  onChangeValue7(event) {
    let data=this.state.chosenInterests;
    var alreadyContainsThisInterest= false;
    var aux;
    for(var i = 0; i < this.state.chosenInterests.length; i++) {
      if(this.state.chosenInterests[i] == event.target.value) {
        alreadyContainsThisInterest = true;
        aux = i;
      }
    }

    if(alreadyContainsThisInterest == false) {
      console.log("Pe ramura de add");
      data.push(event.target.value);
      this.state.chosenInterests=data;
      console.log(this.state.chosenInterests);
    } else {
      //inseamna ca il contine si a dat click => il sterge
      console.log("Pe ramura de remove");
      // data.pop(event.target.value);
      data.splice(aux, 1);
      this.state.chosenInterests=data;
      console.log(this.state.chosenInterests);
    }
  }

  onChangeValue8(event) {
    this.state.chosenBudget = event.target.value;
    console.log(event.target.value);
  }

  getValue=(e)=> {
    let data=this.state.chosenGiftType;
    data.push(e.target.value);
    this.state.chosenGiftType=data;
    console.log(this.state.chosenGiftType);
  }

  toggle = () => {
    this.setState({ displayQuestion1: true,
                    displayQuestion2: false,
                    displayQuestion3: false,
                    displayQuestion4: false,
                    displayQuestion5: false,
                    displayQuestion6: false,
                    displayQuestion7: false,
                    displayQuestion8: false});
  };

  toggle2 = () => {
    this.setState({displayQuestion1: false,
                    displayQuestion2: true,
                    displayQuestion3: false,
                    displayQuestion4: false,
                    displayQuestion5: false,
                    displayQuestion6: false,
                    displayQuestion7: false,
                    displayQuestion8: false });
  };

  toggle3 = () => {
    this.setState({ displayQuestion1: false,
                    displayQuestion2: false,
                    displayQuestion3: true,
                    displayQuestion4: false,
                    displayQuestion5: false,
                    displayQuestion6: false,
                    displayQuestion7: false,
                    displayQuestion8: false });
  };

  toggle4 = () => {
    this.setState({ displayQuestion1: false,
                    displayQuestion2: false,
                    displayQuestion3: false,
                    displayQuestion4: true,
                    displayQuestion5: false,
                    displayQuestion6: false,
                    displayQuestion7: false,
                    displayQuestion8: false });
  };

  toggle5 = () => {
    this.setState({ displayQuestion1: false,
                    displayQuestion2: false,
                    displayQuestion3: false,
                    displayQuestion4: false,
                    displayQuestion5: true,
                    displayQuestion6: false,
                    displayQuestion7: false,
                    displayQuestion8: false });
  };

  toggle6 = () => {
    this.setState({ displayQuestion1: false,
                    displayQuestion2: false,
                    displayQuestion3: false,
                    displayQuestion4: false,
                    displayQuestion5: false,
                    displayQuestion6: true,
                    displayQuestion7: false,
                    displayQuestion8: false });
  };

  toggle7 = () => {
    this.setState({ displayQuestion1: false,
                    displayQuestion2: false,
                    displayQuestion3: false,
                    displayQuestion4: false,
                    displayQuestion5: false,
                    displayQuestion6: false,
                    displayQuestion7: true,
                    displayQuestion8: false });
  };

  toggle8 = () => {
    this.setState({ displayQuestion1: false,
                    displayQuestion2: false,
                    displayQuestion3: false,
                    displayQuestion4: false,
                    displayQuestion5: false,
                    displayQuestion6: false,
                    displayQuestion7: false,
                    displayQuestion8: true });
  };

  toggle9 = () => {
    this.setState({ displayQuestion1: false,
                    displayQuestion2: false,
                    displayQuestion3: false,
                    displayQuestion4: false,
                    displayQuestion5: false,
                    displayQuestion6: false,
                    displayQuestion7: false,
                    displayQuestion8: false,
                    finishQuiz: true });
  };

  hideAll = () => {
    this.setState({ displayQuestion1: false, displayQuestion2: false });
  };

  render() {
    return (
      <div className="Quiz">
        <ResponsiveContainer>
          {/* <Segment id='seg1' style={{ padding: '2em 0em'}} vertical> */}
            <header className="Quiz-header">
              {this.state.displayQuestion1 ? 
              <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
              <p> Alegeti sexul persoanei pentru care cautati cadou: </p>
              <div onChange={this.onChangeValue}>
                <input type="radio" value="Male" name="gender" style={{marginRight: "5px"}} />
                <label>Barbat</label>
                <br/>
                <input type="radio" value="Female" name="gender" style={{marginRight: "5px"}} />
                <label>Femeie</label>
              </div>
              <Button onClick={this.toggle2}>Continua</Button>
              </div> : null}

              {this.state.displayQuestion2 ? 
              <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
              <p> Alegeti categoria de varsta a persoanei pentru care cautati cadou: </p>
              <div onChange={this.onChangeValue2}>
                <input type="radio" value="18" name="gender" style={{marginRight: "5px"}}/>
                <label>Sub 18 ani</label>
                <br/>
                <input type="radio" value="18-25" name="gender" style={{marginRight: "5px"}}/>
                <label>18-25 ani</label>
                <br/>
                <input type="radio" value="26-35" name="gender" style={{marginRight: "5px"}}/>
                <label>26-35 ani</label>
                <br/>
                <input type="radio" value="36-45" name="gender" style={{marginRight: "5px"}}/>
                <label>36-45 ani</label>
                <br/>
                <input type="radio" value="46-60" name="gender" style={{marginRight: "5px"}}/>
                <label>46-60 ani</label>
                <br/>
                <input type="radio" value="60" name="gender" style={{marginRight: "5px"}}/>
                <label>Peste 60 ani</label>
                <br/>
              </div>
              <Button onClick={this.toggle3}>Continua</Button>
              </div> : null}

              {this.state.displayQuestion3 ? 
              <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
              <p> Alegeti relatia pe care o aveti nu persoana pentru care cautati cadoul: </p>
              {this.state.chosenSex == "Male" ? (
                <div onChange={this.onChangeValue3}>
                  <input type="radio" value="Tata" name="gender" /> Tata
                  <br/>
                  <input type="radio" value="Bunic" name="gender" /> Bunic
                  <br/>
                  <input type="radio" value="Fiu" name="gender" /> Fiu
                  <br/>
                  <input type="radio" value="Frate" name="gender" /> Frate
                  <br/>
                  <input type="radio" value="Prieten" name="gender" /> Prieten
                  <br/>
                  <input type="radio" value="Iubit" name="gender" /> Iubit
                  <br/>
                  <input type="radio" value="Sot" name="gender" /> Sot
                  <br/>
                  <input type="radio" value="Socru" name="gender" /> Socru
                </div> ) : ( <div onChange={this.onChangeValue3}>
                  <input type="radio" value="Mama" name="gender" /> Mama
                  <br/>
                  <input type="radio" value="Bunica" name="gender" /> Bunica
                  <br/>
                  <input type="radio" value="Fiica" name="gender" /> Fiica
                  <br/>
                  <input type="radio" value="Sora" name="gender" /> Sora
                  <br/>
                  <input type="radio" value="Prietena" name="gender" /> Prietena
                  <br/>
                  <input type="radio" value="Iubita" name="gender" /> Iubita
                  <br/>
                  <input type="radio" value="Sotie" name="gender" /> Sotie
                  <br/>
                  <input type="radio" value="Soacra" name="gender" /> Soacra
                  <br/>
                  <input type="radio" value="Altceva" name="gender" /> Altceva
                </div> )}
              <Button onClick={this.toggle4}>Continua</Button>
              <br/>
              {/* {this.state.chosenSex == "Male" && this.state.chosenAge == "18" ? (
                <img src={man18} height="600px"/>
              ) : null} */}
              {this.state.chosenSex == "Male" && this.state.chosenAge == "18" ? (
                this.state.image1 = <img src={man18} style={{height:"600px", marginLeft:"28%", marginTop:"-10%"}}/>
              ) : this.state.chosenSex == "Male" && this.state.chosenAge == "18-25" ? (
                this.state.image1 = <img src={man1825} style={{height:"600px", marginLeft:"28%", marginTop:"-10%"}}/>
              ) : this.state.chosenSex == "Male" && this.state.chosenAge == "26-35" ? (
                this.state.image1 = <img src={man2635} style={{height:"600px", marginLeft:"28%", marginTop:"-10%"}}/>
              ) : this.state.chosenSex == "Male" && this.state.chosenAge == "36-45" ? (
                this.state.image1 = <img src={man3645} style={{height:"600px", marginLeft:"28%", marginTop:"-10%"}}/>
              ) : this.state.chosenSex == "Male" && this.state.chosenAge == "46-60" ? (
                this.state.image1 = <img src={man4660} style={{height:"600px", marginLeft:"28%", marginTop:"-10%"}}/>
              ) : this.state.chosenSex == "Male" && this.state.chosenAge == "60" ? (
                this.state.image1 = <img src={man60} style={{height:"600px", marginLeft:"28%", marginTop:"-10%"}}/>
              ) : this.state.chosenSex == "Female" && this.state.chosenAge == "18" ? (
                this.state.image1 = <img src={woman18} style={{height:"600px", marginLeft:"28%", marginTop:"-10%"}}/>
              ) : this.state.chosenSex == "Female" && this.state.chosenAge == "18-25" ? (
                this.state.image1 = <img src={woman1825} style={{height:"600px", marginLeft:"28%", marginTop:"-10%"}}/>
              ) : this.state.chosenSex == "Female" && this.state.chosenAge == "26-35" ? (
                this.state.image1 = <img src={woman2635} style={{height:"600px", marginLeft:"28%", marginTop:"-10%"}}/>
              ) : this.state.chosenSex == "Female" && this.state.chosenAge == "36-45" ? (
                this.state.image1 = <img src={woman3645} style={{height:"600px", marginLeft:"28%", marginTop:"-10%"}}/>
              ) : this.state.chosenSex == "Female" && this.state.chosenAge == "46-60" ? (
                this.state.image1 = <img src={woman4660} style={{height:"600px", marginLeft:"28%", marginTop:"-10%"}}/>
              ) : this.state.chosenSex == "Female" && this.state.chosenAge == "60" ? (
                this.state.image1 = <img src={woman60} style={{height:"600px", marginLeft:"28%", marginTop:"-10%"}}/>
              ) : null}
              </div> : null}

              {this.state.displayQuestion4 ? 
              <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
              <p> Alegeti ocazia pentru care oferiti cadoul: </p>
              <div onChange={this.onChangeValue4}>
                <input type="radio" value="ZiDeNastere" name="gender" /> Zi de nastere
                <br/>
                <input type="radio" value="Aniversare" name="gender" /> Aniversare
                <br/>
                <input type="radio" value="Craciun" name="gender" /> Craciun
                <br/>
                <input type="radio" value="Paste" name="gender" /> Paste
                <br/>
                <input type="radio" value="Dragobete" name="gender" /> Dragobete
                <br/>
                <input type="radio" value="CadouDeCasaNoua" name="gender" /> Cadou de casa noua
                <br/>
                <input type="radio" value="Altceva" name="gender" /> Altceva
              </div>
              <Button onClick={this.toggle5}>Continua</Button>
              {this.state.chosenRelationship == "Tata" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={tata} height="600px" left="500px"/>}</div>
              </div>
              ) : this.state.chosenRelationship == "Mama" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={mama} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Bunic" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={bunic} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Bunica" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={bunica} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Fiica" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={fiica} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Fiu" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={fiu} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Frate" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={fiu} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Sora" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={sora} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Iubit" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={iubit} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Iubita" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={iubita} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Prieten" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={prieten} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Prietena" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={prietena} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Soacra" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={soacra} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Socru" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={socru} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Sot" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={sot} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Sotie" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={sotie} height="600px" left="500px"/>}</div>
                </div>
              ) : this.state.chosenRelationship == "Altceva" ? (
                <div style={{marginLeft:"28%", marginTop:"-10%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image2 = <img src={altceva} height="600px" left="500px"/>}</div>
                </div>
              ) : null }
              </div> : null}

              {this.state.displayQuestion5 ? 
              <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
              <p> Alegeti tipul de cadou dorit: </p>
              <div>
                <Checkbox color="primary" value="Clasic" onChange={this.onChangeValue5} /> Clasic
                <br/>
                <Checkbox color="primary" value="Amuzant" onChange={this.onChangeValue5} /> Amuzant
                <br/>
                <Checkbox color="primary" value="Romantic" onChange={this.onChangeValue5} /> Romantic
                <br/>
                <Checkbox color="primary" value="Practic" onChange={this.onChangeValue5} /> Practic
                <br/>
                <Checkbox color="primary" value="Excentric" onChange={this.onChangeValue5} /> Excentric
                <br/>
                <Checkbox color="primary" value="Donatie" onChange={this.onChangeValue5} /> Donatie
                <br/>
                <Checkbox color="primary" value="Handmade" onChange={this.onChangeValue5} /> Handmade
                <br/>
              </div>
              {/* <div onChange={this.onChangeValue5}>
                <input type="radio" value="Clasic" name="gender" /> Clasic
                <br/>
                <input type="radio" value="Amuzant" name="gender" /> Amuzant
                <br/>
                <input type="radio" value="Romantic" name="gender" /> Romantic
                <br/>
                <input type="radio" value="Practic" name="gender" /> Practic
                <br/>
                <input type="radio" value="Excentric" name="gender" /> Excentric
                <br/>
                <input type="radio" value="Donatie" name="gender" /> Donatie
                <br/>
                <input type="radio" value="Handmade" name="gender" /> Handmade
              </div> */}
              <Button onClick={this.toggle6}>Continua</Button>
              {this.state.chosenOccasion == "ZiDeNastere" ? (
                <div style={{marginLeft:"28%", marginTop:"-20%"}}>
                  <div style={{display: "inline-block", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px", width:"8px"}}>{this.state.image2}</div>
                  <div style={{display: "inline-block", alignItems: "center"}}>{this.state.image3 = <img src={ziNastere} width="600px"/>}</div>
                </div>
              ) : this.state.chosenOccasion == "Aniversare" ? (
                <div style={{marginLeft:"28%", marginTop:"-20%"}}>
                  <div style={{display: "inline-block", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px", width:"8px"}}>{this.state.image2}</div>
                  <div style={{display: "inline-block", alignItems: "center"}}>{this.state.image3 = <img src={aniversare} width="600px"/>}</div>
                </div>
              ) : this.state.chosenOccasion == "Craciun" ? (
                <div style={{marginLeft:"28%", marginTop:"-20%"}}>
                  <div style={{display: "inline-block", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px", width:"0px"}}>{this.state.image2}</div>
                  <div style={{display: "inline-block", alignItems: "center"}}>{this.state.image3 = <img src={Craciun} width="600px"/>}</div>
                </div>
              ) : this.state.chosenOccasion == "Paste" ? (
                <div style={{marginLeft:"28%", marginTop:"-20%"}}>
                  <div style={{display: "inline-block", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px", width:"8px"}}>{this.state.image2}</div>
                  <div style={{display: "inline-block", alignItems: "center"}}>{this.state.image3 = <img src={Paste} width="600px"/>}</div>
                </div>
              ) : this.state.chosenOccasion == "Dragobete" ? (
                <div style={{marginLeft:"28%", marginTop:"-20%"}}>
                  <div style={{display: "inline-block", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px", width:"8px"}}>{this.state.image2}</div>
                  <div style={{display: "inline-block", alignItems: "center"}}>{this.state.image3 = <img src={dragobete} width="600px"/>}</div>
                </div>
              ) : this.state.chosenOccasion == "CadouDeCasaNoua" ? (
                <div style={{marginLeft:"28%", marginTop:"-20%"}}>
                  <div style={{display: "inline-block", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px", width:"8px"}}>{this.state.image2}</div>
                  <div style={{display: "inline-block", alignItems: "center"}}>{this.state.image3 = <img src={cadouCasaNoua} width="600px"/>}</div>
                </div>
              ) : this.state.chosenOccasion == "Altceva" ? (
                <div style={{marginLeft:"28%", marginTop:"-20%"}}>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px", width:"8px"}}>{this.state.image2}</div>
                  <div style={{display: "inline-block", alignItems: "center"}}>{this.state.image3 = <img src={cadouCasaNoua} width="600px"/>}</div>
                </div>
              ) : null}
              </div> : null}

              {this.state.displayQuestion6 ? 
              <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
              <p> Alegeti caracteristicile cadoului dorit: </p>
              <div>
                <Checkbox color="primary" value="Sportiv" onChange={this.onChangeValue6} /> Sportiv
                <br/>
                <Checkbox color="primary" value="Sedentar" onChange={this.onChangeValue6} /> Sedentar
                <br/>
                <Checkbox color="primary" value="Amuzant" onChange={this.onChangeValue6} /> Amuzant
                <br/>
                <Checkbox color="primary" value="Serios" onChange={this.onChangeValue6} /> Serios
                <br/>
                <Checkbox color="primary" value="Altruist" onChange={this.onChangeValue6} /> Altruist
                <br/>
                <Checkbox color="primary" value="Egoist" onChange={this.onChangeValue6} /> Egoist
                <br/>
                <Checkbox color="primary" value="Copilaros" onChange={this.onChangeValue6} /> Copilaros
                <br/>
                <Checkbox color="primary" value="Matur" onChange={this.onChangeValue6} /> Matur
                <br/>
                <Checkbox color="primary" value="Spontan" onChange={this.onChangeValue6} /> Spontan
                <br/>
                <Checkbox color="primary" value="Romantic" onChange={this.onChangeValue6} /> Romantic
                <br/>
                <Checkbox color="primary" value="Incapatanat" onChange={this.onChangeValue6} /> Incapatanat
                <br/>
                <Checkbox color="primary" value="Nebunatic" onChange={this.onChangeValue6} /> Nebunatic
                <br/>
                <Checkbox color="primary" value="Energic" onChange={this.onChangeValue6} /> Energic
                <br/>
              </div>
              <Button onClick={this.toggle7}>Continua</Button>
              <div>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px", width:"8px"}}>{this.state.image2}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image3}</div>
              </div>
              </div> : null}

              {this.state.displayQuestion7 ? 
              <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
              <p> Alegeti interesele persoanei: </p>
              <div>
                <Checkbox color="primary" value="Animale" onChange={this.onChangeValue7} /> Animale
                <br/>
                <Checkbox color="primary" value="FilmeSiSeriale" onChange={this.onChangeValue7} /> Filme si seriale
                <br/>
                <Checkbox color="primary" value="Carti" onChange={this.onChangeValue7} /> Carti
                <br/>
                <Checkbox color="primary" value="Sporturi" onChange={this.onChangeValue7} /> Sporturi
                <br/>
                <Checkbox color="primary" value="Plante si natura" onChange={this.onChangeValue7} /> Plante si natura
                <br/>
                <Checkbox color="primary" value="Istorie" onChange={this.onChangeValue7} /> Istorie
                <br/>
                <Checkbox color="primary" value="Muzica" onChange={this.onChangeValue7} /> Muzica
                <br/>
                <Checkbox color="primary" value="Arta" onChange={this.onChangeValue7} /> Arta
                <br/>
                <Checkbox color="primary" value="Gatit" onChange={this.onChangeValue7} /> Gatit
                <br/>
                <Checkbox color="primary" value="Cosmetice" onChange={this.onChangeValue7} /> Cosmetice
                <br/>
                <Checkbox color="primary" value="Moda" onChange={this.onChangeValue7} /> Moda
                <br/>
                <Checkbox color="primary" value="BoardgamesAndPuzzles" onChange={this.onChangeValue7} /> Boardgames and puzzles
                <br/>
                <Checkbox color="primary" value="DecoratiuniInterioare" onChange={this.onChangeValue7} /> Decoratiuni interioare
                <br/>
                <Checkbox color="primary" value="Tehnologie" onChange={this.onChangeValue7} /> Tehnologie
                <br/>
                <Checkbox color="primary" value="Jucarii" onChange={this.onChangeValue7} /> Jucarii
                <br/>
                <Checkbox color="primary" value="FotografieSiFilmografie" onChange={this.onChangeValue7} /> Fotografie si filmografie
                <br/>
              </div>
              <Button onClick={this.toggle8}>Continua</Button>
              <div>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px", width:"8px"}}>{this.state.image2}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image3}</div>
              </div>
              </div> : null}

              {this.state.displayQuestion8 ? 
              <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
              <p> Alegeti bugetul pentru cadoul dorit: </p>
              <div onChange={this.onChangeValue8}>
                <input type="radio" value="100" name="gender" /> Sub 100 lei
                <br/>
                <input type="radio" value="100-200" name="gender" /> 100-200 lei
                <br/>
                <input type="radio" value="200-300" name="gender" /> 200-300 lei
                <br/>
                <input type="radio" value="300" name="gender" /> Peste 300
                <br/>
              </div>
              <Button onClick={this.toggle9}>Continua</Button>
              <div>
                  <div style={{display: "inline-block", alignItems: "center", height:"600px", width:"2px"}}>{this.state.image1}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px", width:"8px"}}>{this.state.image2}</div>
                  <div style={{display: "inline-block", alignItems: "center", height:"750px"}}>{this.state.image3}</div>
              </div>
              </div> : null}

              {this.state.finishQuiz ? 
              <div>
              <p> Great! </p>
              </div> : null}
            </header>
          {/* </Segment> */}
        </ResponsiveContainer>
      </div>
    );
  }
}

// function Quiz() {
//   return (
//     <div className="Quiz">
//       <ResponsiveContainer>
//         <Segment id='seg1' style={{ padding: '0em 0em'}} vertical>
//           <header className="Quiz-header">
//             <p> Quiz page </p>
//             <p> Quiz page </p>
//             <p> Quiz page </p>
//             <p> Quiz page </p>
//             <p> Quiz page </p>
//             <Button>Continua</Button>
//           </header>
//         </Segment>
//       </ResponsiveContainer>
//     </div>
//   );
// }

export default Quiz;
