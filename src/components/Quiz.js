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
import cadou_de_casa_noua from '../images/cadou_casa_noua.png';
import craciun from '../images/craciun.png';
import paste from '../images/paste.png';
import dragobete from '../images/dragobete.png';
import zi_de_nastere from '../images/zi_nastere.png';
import Checkbox from '@material-ui/core/Checkbox';

import React, { Component, useState } from 'react'
import axios from 'axios'

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
  Radio
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

// <MobileContainer>{children}</MobileContainer>
const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const ageList = [
  { name: "Sub 18 ani"  , value: "mai_mic_18"  },
  { name: "18-25 ani"   , value: "18_25"},
  { name: "26-35 ani"   , value: "26_35"},
  { name: "36-45 ani"   , value: "36_45"},
  { name: "46-60 ani"   , value: "46_60"},
  { name: "Peste 60 ani", value: "60_plus"}
]

const barbatRoleList = [
  { name: "Tata"   , value: "tata"   },
  { name: "Bunic"  , value: "bunic"  },
  { name: "Fiu"    , value: "fiu"    },
  { name: "Frate"  , value: "frate"  },
  { name: "Prieten", value: "prieten"},
  { name: "Iubit"  , value: "iubit"  },
  { name: "Sot"    , value: "sot"    },
  { name: "Socru"  , value: "socru"  },
  { name: "Altceva", value: "altceva"}
]

const femeieRoleList = [
  { name: "Mama"    ,  value: "mama"    },
  { name: "Bunica"  ,  value: "bunica"  },
  { name: "Fiica"   ,  value: "fiica"   },
  { name: "Sora"    ,  value: "sora"    },
  { name: "Prietena",  value: "prietena"},
  { name: "Iubita"  ,  value: "iubita"  },
  { name: "Sotie"   ,  value: "sotie"   },
  { name: "Soacra"  ,  value: "soacra"  },
  { name: "Altceva" ,  value: "altceva" }
]

const occasionList = [
  { name: "Zi De Nastere"     , value: "zi_de_nastere"    },
  { name: "Aniversare"        , value: "aniversare"     },
  { name: "Craciun"           , value: "craciun"        },
  { name: "Paste"             , value: "paste"          },
  { name: "Dragobete"         , value: "dragobete"      },
  { name: "Cadou De Casa Noua", value: "cadou_de_casa_noua"},
  { name: "Altceva"           , value: "altceva"        }
]
const imgHumanList = {
  barbat: { "mai_mic_18": man18, "18_25": man1825, "26_35": man2635, "36_45": man3645, "46_60": man4660, "60_plus": man60},
  femeie: { "mai_mic_18": woman18, "18_25": woman1825, "26_35": woman2635, "36_45": woman3645, "46_60": woman4660, "60_plus": woman60}
}

const imgRelationshipList = {
  tata: tata,       mama: mama,
  bunic: bunic,     bunica: bunica,
  fiu: fiu,         fiica: fiica,
  frate: frate,     sora: sora,
  iubit: iubit,     iubita: iubita,
  prieten: prieten, prietena: prietena,
  socru: socru,     soacra: soacra,
  sot: sot,         sotie: sotie,
  altceva: altceva
}

const imgOccasionList = {
  zi_de_nastere : zi_de_nastere,
  aniversare : aniversare,
  craciun : craciun,
  paste: paste,
  dragobete: dragobete,
  cadou_de_casa_noua : cadou_de_casa_noua,
  altceva : altceva
}

const typeList = [
  { name: "Clasic"   , value: "clasic_type"   },
  { name: "Amuzant"  , value: "amuzant_type"  },
  { name: "Romantic" , value: "romantic_type" },
  { name: "Practic"  , value: "practic_type"  },
  { name: "Excentric", value: "excentric_type"},
  { name: "Donatie"  , value: "donatie_type"  },
  { name: "Handmade" , value: "handmade_type" },
]

const characteristicsList = [
  { name: "Sportiv"   , value: "sportiv_ch"    },
  { name: "Sedentar"  , value: "sedentar_ch"   },
  { name: "Amuzant"   , value: "amuzant_ch"    },
  { name: "Serios"    , value: "serios_ch"     },
  { name: "Altruist"  , value: "altruist_ch"   },
  { name: "Egoist"    , value: "egoist_ch"     },
  { name: "Copilaros" , value: "copilaros_ch"  },
  { name: "Matur"     , value: "matur_ch"      },
  { name: "Spontan"   , value: "spontan_ch"    },
  { name: "Romantic"  , value: "romantic_ch"   },
  { name: "Incapatan" , value: "incapatan_ch"  },
  { name: "Nebunatic" , value: "nebunatic_ch"  },
  { name: "Energic"   , value: "energic_ch"    }
]

const interestsList = [
  { name: "Animale"                  , value: "animale"                   },
  { name: "Filme si Seriale"         , value: "filme_si_seriale"          },
  { name: "Carti"                    , value: "carti"                     },
  { name: "Sporturi"                 , value: "sporturi"                  },
  { name: "Plante si natura"         , value: "plante_si_natura"          },
  { name: "Istorie"                  , value: "istorie"                   },
  { name: "Muzica"                   , value: "muzica"                    },
  { name: "Arta"                     , value: "arta"                      },
  { name: "Gatit"                    , value: "gatit"                     },
  { name: "Cosmetice"                , value: "cosmetice"                 },
  { name: "Moda"                     , value: "moda"                      },
  { name: "Boardgames and Puzzles"   , value: "boardgames_and_puzzles"    },
  { name: "Decoratiuni Interioare"   , value: "decoratiuni_interioare"    },
  { name: "Tehnologie"               , value: "tehnologie"                },
  { name: "Jucarii"                  , value: "jucarii"                   },
  { name: "Fotografie si Filmografie", value: "fotografie_si_filmografie" }
]

const budgetList = [
  { name: "Sub 100 lei"  , value: "mai_mic_100"},
  { name: "100-200 lei"  , value: "100_200"    },
  { name: "200-300 lei"  , value: "200_300"    },
  { name: "Peste 300 lei", value: "300_plus"   }
]

const progress = [1, 2, 3, 4, 5, 6, 7]

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
    console.log(this.state.chosenSex);
    this.forceUpdate()
  }

  onChangeValue2(event) {
    this.state.chosenAge = event.target.value;
    console.log(event.target.value);
    this.forceUpdate()
  }

  onChangeValue3(event) {
    this.state.chosenRelationship = event.target.value;
    console.log(event.target.value);
    this.forceUpdate()
  }

  onChangeValue4(event) {
    this.state.chosenOccasion = event.target.value;
    console.log(event.target.value);
    this.forceUpdate()
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
    this.forceUpdate()
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
    this.forceUpdate()
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
    this.forceUpdate()
  }

  onChangeValue8(event) {
    this.state.chosenBudget = event.target.value;
    console.log(event.target.value);
    this.forceUpdate()
  }

  getValue=(e)=> {
    let data=this.state.chosenGiftType;
    data.push(e.target.value);
    this.state.chosenGiftType=data;
    console.log(this.state.chosenGiftType);
  }

  toggle = (nameHide, nameShow) => {
    this.setState({...this.state, [nameShow]: true, [nameHide]: false });
  };

  hideAll = () => {

    this.setState({ displayQuestion1: false, displayQuestion2: false });
  };

  getProgress = () => {
    var x = 0
    if (this.state.displayQuestion1 == true)
      x = 1
    else if (this.state.displayQuestion2 == true)
      x = 2
    else if (this.state.displayQuestion3 == true)
      x = 3
    else if (this.state.displayQuestion4 == true)
      x = 4
    else if (this.state.displayQuestion5 == true)
      x = 5
    else if (this.state.displayQuestion6 == true)
      x = 6
    else if (this.state.displayQuestion7 == true)
      x = 7
    else if (this.state.displayQuestion8 == true || this.state.finishQuiz == true)
      x = 8
    console.log(`x is ${x}`)
    return x
  }

  savedValue = (field, value) => {
    var exists = false
    if (field == "chosenInterests" || field == "chosenGiftType" || field == "chosenGiftCharacteristics") {
      exists = this.state.[field].find( e => {return value == e})
    }
    else {
      exists = this.state.[field] == value
    }
    console.log ("saved function")
    console.log (field)
    console.log(value)
    console.log(exists)
    return exists
  }

  submit = () => {
    var payload = {
      price: this.state.chosenBudget,
      tags: [
        this.state.chosenSex,
        this.state.chosenAge,
        this.state.chosenRelationship,
        this.state.chosenOccasion,
        ...this.state.chosenGiftType,
        ...this.state.chosenInterests,
        ...this.state.chosenGiftCharacteristics
      ]
    }
    console.log(payload);
    axios.post(`http://us-central1-gifter-51063.cloudfunctions.net/app/filter`, payload)
      .then( res => this.handleSuccessfulPost(res))
      .catch( err => this.handleError(err))
  }

  handleError = (err) => {
    console.log(err)
    alert(err.response.data.error)
  }
  handleSuccessfulPost = (res) => {
    console.log(res.status)
    console.log(res)
    alert('Successful post!')
  }
  render() {
    return (
      <div className="Quiz">
        <ResponsiveContainer>
          {/* <Segment id='seg1' style={{ padding: '2em 0em'}} vertical> */}
          <Segment id='seg1' style={{ padding: '2em 0em'}} vertical>
            <div id="quiz-content">
              <Grid container stackable>

                <Grid.Row centered>
                  <div id="quiz-progress-div">
                    { progress.map((e) =>
                      <React.Fragment>
                        <div className={(this.getProgress() >= e ? "level-compleated" : null) + " level-round-div"} >
                          <p className="level-p"> {e} </p>
                        </div>
                        <div className={(this.getProgress() > e  ? "level-compleated" : null) + " line"}>
                        </div>
                      </React.Fragment>
                      )}
                    <div className={(this.getProgress() == 8 ? "level-compleated" : null) + " level-round-div"} >
                      <p className="level-p"> 8 </p>
                    </div>
                  </div>
                </Grid.Row>

                <Grid.Row columns={3}>
                  {/* quiz column*/}
                  <Grid.Column width={5}>
                    {/* choose sex*/}
                    {this.state.displayQuestion1 ?
                    <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
                      <p className="question-text-p"> Alegeti sexul persoanei pentru care cautati cadou: </p>
                      <div className="question-item" onChange={this.onChangeValue}>
                        <input type="radio" value="barbat" name="gender" style={{marginRight: "5px"}} checked={this.savedValue("chosenSex" ,"barbat")} onChange={this.onChangeValue} className="radio"/>
                        <label>Barbat</label>
                        <br/>
                        <input type="radio" value="femeie" name="gender" style={{marginRight: "5px"}} checked={this.savedValue("chosenSex","femeie")} className="radio"/>
                        <label>Femeie</label>
                      </div>
                      <Button onClick={(e) => {this.toggle("displayQuestion1","displayQuestion2")}} id="continua-btn">Continua</Button>
                    </div> : null}

                    {/* choose age*/}
                    {this.state.displayQuestion2 ?
                    <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
                      <Button onClick={(e) => {this.toggle("displayQuestion2","displayQuestion1")}} id="back-btn">Back</Button>
                      <Button onClick={(e) => {this.toggle("displayQuestion2","displayQuestion3")}} id="continua-btn">Continua</Button>
                      <p className="question-text-p"> Alegeti categoria de varsta a persoanei pentru care cautati cadou: </p>
                      <div className="question-item" onChange={this.onChangeValue2}>
                        {ageList.map((elem) =>
                          <React.Fragment key={elem.value.toString()} >
                            <input type="radio" value={elem.value} name="age" style={{marginRight: "5px"}} checked={this.savedValue("chosenAge",elem.value)} className="radio"/>
                            <label> {elem.name} </label>
                            <br/>
                          </React.Fragment>
                         )}
                      </div>
                    </div> : null}

                    {/* choose relationship*/}
                    {this.state.displayQuestion3 ?
                      <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
                      <Button onClick={(e) => {this.toggle("displayQuestion3","displayQuestion2")}} id="back-btn">Back</Button>
                      <Button onClick={(e) => {this.toggle("displayQuestion3","displayQuestion4")}} id="continua-btn">Continua</Button>
                      <p className="question-text-p"> Alegeti relatia pe care o aveti nu persoana pentru care cautati cadoul: </p>
                      {this.state.chosenSex == "barbat" ? (
                        <div className="question-item" onChange={this.onChangeValue3}>
                          {barbatRoleList.map((elem) =>
                            <React.Fragment key={elem.value.toString()}>
                              <input type="radio" value={elem.value} name="role" checked={this.savedValue("chosenRelationship",elem.value)} className="radio"/> {elem.name}
                              <br/>
                            </React.Fragment>
                          )}
                        </div> ) : ( <div className="question-item"onChange={this.onChangeValue3}>
                          {femeieRoleList.map((elem) =>
                            <React.Fragment key={elem.value.toString()}>
                              <input type="radio" value={elem.value} name="role" checked={this.savedValue("chosenRelationship",elem.value)} className="radio"/> {elem.name}
                              <br/>
                            </React.Fragment>
                          )}
                        </div> )}
                    </div> : null}

                    {/* choose occasion*/}
                    {this.state.displayQuestion4 ?
                    <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
                    <Button onClick={(e) => {this.toggle("displayQuestion4","displayQuestion3")}} id="back-btn">Back</Button>
                    <Button onClick={(e) => {this.toggle("displayQuestion4","displayQuestion5")}} id="continua-btn">Continua</Button>
                      <p className="question-text-p"> Alegeti ocazia pentru care oferiti cadoul: </p>
                      <div className="question-item" onChange={this.onChangeValue4}>
                        {occasionList.map((elem) =>
                          <React.Fragment key={elem.value.toString()}>
                            <input type="radio" value={elem.value} name="ocasion" checked={this.savedValue("chosenOccasion",elem.value)} className="radio"/> {elem.name}
                            <br/>
                          </React.Fragment>
                        )}
                      </div>
                    </div> : null}

                    {/* choose present type*/}
                    {this.state.displayQuestion5 ?
                    <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
                      <Button onClick={(e) => {this.toggle("displayQuestion5","displayQuestion4")}} id="back-btn">Back</Button>
                      <Button onClick={(e) => {this.toggle("displayQuestion5","displayQuestion6")}} id="continua-btn">Continua</Button>
                      <p className="question-text-p"> Alegeti tipul de cadou dorit: </p>
                      <div className="question-item">
                        {typeList.map((elem) =>
                          <React.Fragment key={elem.value.toString()}>
                            <Checkbox color="primary" value={elem.value} onChange={this.onChangeValue5} checked={this.savedValue("chosenGiftType",elem.value)}/> {elem.name}
                            <br/>
                          </React.Fragment>
                        )}
                      </div>
                    </div> : null}

                    {/* choose present characteristics*/}
                    {this.state.displayQuestion6 ?
                    <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
                      <Button onClick={(e) => {this.toggle("displayQuestion6","displayQuestion5")}} id="back-btn">Back</Button>
                      <Button onClick={(e) => {this.toggle("displayQuestion6","displayQuestion7")}} id="continua-btn">Continua</Button>
                      <p className="question-text-p"> Alegeti caracteristicile cadoului dorit: </p>
                      <div className="question-item">
                        {characteristicsList.map((elem) =>
                          <React.Fragment key={elem.value.toString()}>
                            <Checkbox color="primary" value={elem.value} onChange={this.onChangeValue6} checked={this.savedValue("chosenGiftCharacteristics",elem.value)}/> {elem.name}
                            <br/>
                          </React.Fragment>
                        )}
                      </div>
                    </div> : null}

                    {/* choose person interests*/}
                    {this.state.displayQuestion7 ?
                    <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
                      <Button onClick={(e) => {this.toggle("displayQuestion7","displayQuestion6")}} id="back-btn">Back</Button>
                      <Button onClick={(e) => {this.toggle("displayQuestion7","displayQuestion8")}} id="continua-btn">Continua</Button>
                      <p className="question-text-p"> Alegeti interesele persoanei: </p>
                      <div className="question-item">
                        {interestsList.map((elem) =>
                          <React.Fragment key={elem.value.toString()}>
                            <Checkbox color="primary" value={elem.value} onChange={this.onChangeValue7} checked={this.savedValue("chosenInterests",elem.value)}/> {elem.name}
                            <br/>
                          </React.Fragment>
                        )}
                      </div>
                    </div> : null}

                    {/* choose budget*/}
                    {this.state.displayQuestion8 ?
                    <div style={{textAlign: "left", marginLeft: "45px", fontFamily: "Arial", fontWeight: "bold", fontSize: "15px"}}>
                      <Button onClick={(e) => {this.toggle("displayQuestion8","displayQuestion7")}} id="back-btn">Back</Button>
                      <Button onClick={(e) => {this.toggle("displayQuestion8","finishQuiz")}}       id="continua-btn">Continua</Button>
                      <p className="question-text-p"> Alegeti bugetul pentru cadoul dorit: </p>
                      <div className="question-item">
                        {budgetList.map((elem) =>
                          <React.Fragment key={elem.value.toString()}>
                            <input type="radio" value={elem.value} name="gender" onChange={this.onChangeValue8} className="radio" checked={this.savedValue("chosenBudget", elem.value)}/> {elem.name}
                            <br/>
                          </React.Fragment>
                      )}
                      </div>
                    </div> : null}

                    {this.state.finishQuiz ?
                    <div>
                      <p id="great-p"> Great! </p>
                      <Button onClick={(e) => {this.toggle("finishQuiz","displayQuestion8")}} id="back-btn">Back</Button>
                      <Button onClick={(e) => {this.submit()}}       id="continua-btn">Finish quiz</Button>
                    </div> : null}
                  </Grid.Column>

                  <Grid.Column id="quiz-img-column" width={7} floated="left">
                    {/* images */}
                      {this.state.chosenRelationship ?
                        <Image src={imgRelationshipList.[this.state.chosenRelationship]} id="quiz-img"/>
                      : null}
                      {this.state.chosenSex && this.state.chosenAge ?
                        <Image src={imgHumanList.[this.state.chosenSex][this.state.chosenAge]} id="quiz-img" />
                      : null}
                      {this.state.chosenOccasion ?
                        <Image src={imgOccasionList.[this.state.chosenOccasion]} id="quiz-img"/>
                      : null}
                  </Grid.Column>

                  <Grid.Column id="selected-bubbles-column" width={4}>
                  {/* selected-bubbles on the right of the screen */}
                    <div className="selected-bubbles-div">

                      <Grid.Row>
                      {this.state.chosenSex?
                        <div className="buble-div b1"> <p className="buble-p"> {this.state.chosenSex == 'femeie'? "Femeie" : "Barbat"} </p>  </div>
                      : null}

                      {this.state.chosenAge?
                        <div className="buble-div b2">
                          <p className="buble-p">
                            {ageList.find( e => {return e.value == this.state.chosenAge}).name}
                          </p>
                        </div>
                      : null}

                      {this.state.chosenRelationship?
                        <div className="buble-div b3">
                          <p className="buble-p">
                            {this.state.chosenSex == "femeie"?
                            femeieRoleList.find( e => {return e.value == this.state.chosenRelationship}).name
                            : barbatRoleList.find( e => {return e.value == this.state.chosenRelationship}).name}
                          </p>
                        </div>
                      : null}

                      {this.state.chosenOccasion?
                        <div className="buble-div b4">
                          <p className="buble-p">
                            {occasionList.find( e => {return e.value == this.state.chosenOccasion}).name}
                          </p>
                        </div>
                      : null}

                      {this.state.chosenBudget?
                        <div className="buble-div b1">
                          <p className="buble-p">
                            {budgetList.find( e => {return e.value == this.state.chosenBudget}).name}
                          </p>
                        </div>
                      : null}
                      </Grid.Row>

                      <Grid.Row>
                      {this.state.chosenGiftType.length != 0 ?
                        <p class="small-label"> Tip cadou: </p>
                       : null
                      }
                      {this.state.chosenGiftType.length != 0 ? (
                        this.state.chosenGiftType.map ( (type) =>
                          <div className="buble-div b5">
                            <p className="buble-p">
                              { typeList.find( e => {return e.value == type }).name}
                            </p>
                          </div>
                        )
                      )
                      : null}
                      </Grid.Row>

                      <Grid.Row>
                      {this.state.chosenGiftCharacteristics.length != 0 ?
                        <p class="small-label"> Characteristici cadou: </p>
                       : null
                      }
                      {this.state.chosenGiftCharacteristics.length != 0?
                        this.state.chosenGiftCharacteristics.map ( (type) =>
                          <div className="buble-div b1">
                            <p className="buble-p">
                              { characteristicsList.find( e => {console.log(type); return e.value == type }).name}
                            </p>
                          </div>
                        )
                      : null}
                      </Grid.Row>

                      <Grid.Row>
                      {this.state.chosenInterests.length != 0 ?
                        <p class="small-label"> Interese: </p>
                       : null
                      }
                      {this.state.chosenInterests.length != 0?
                        this.state.chosenInterests.map ( (type) =>
                          <div className="buble-div b2">
                            <p className="buble-p">
                              { interestsList.find( e => {return e.value == type }).name}
                            </p>
                          </div>
                        )
                      : null}
                      </Grid.Row>
                    </div>

                  </Grid.Column>
                </Grid.Row>
             </Grid>
             </div>
          </Segment>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Quiz;
