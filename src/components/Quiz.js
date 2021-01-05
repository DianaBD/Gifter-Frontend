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
import loading from '../images/loading.gif'
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
  Radio,
  Card,
  Progress,
  Dropdown,
  Popup
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
  { text: "Sub 18 ani"  , value: "mai_mic_18"  },
  { text: "18-25 ani"   , value: "18_25"},
  { text: "26-35 ani"   , value: "26_35"},
  { text: "36-45 ani"   , value: "36_45"},
  { text: "46-60 ani"   , value: "46_60"},
  { text: "Peste 60 ani", value: "60_plus"}
]

const roleList = {
  barbat: [
    { key: "Tata"   , text: "Tata"   , value: "tata"   },
    { key: "Bunic"  , text: "Bunic"  , value: "bunic"  },
    { key: "Fiu"    , text: "Fiu"    , value: "fiu"    },
    { key: "Frate"  , text: "Frate"  , value: "frate"  },
    { key: "Prieten", text: "Prieten", value: "prieten"},
    { key: "Iubit"  , text: "Iubit"  , value: "iubit"  },
    { key: "Sot"    , text: "Sot"    , value: "sot"    },
    { key: "Socru"  , text: "Socru"  , value: "socru"  },
    { key: "Altceva", text: "Altceva", value: "altceva"}
  ],
  femeie:  [
    { key: "Mama"    , text: "Mama"    ,  value: "mama"    },
    { key: "Bunica"  , text: "Bunica"  ,  value: "bunica"  },
    { key: "Fiica"   , text: "Fiica"   ,  value: "fiica"   },
    { key: "Sora"    , text: "Sora"    ,  value: "sora"    },
    { key: "Prietena", text: "Prietena",  value: "prietena"},
    { key: "Iubita"  , text: "Iubita"  ,  value: "iubita"  },
    { key: "Sotie"   , text: "Sotie"   ,  value: "sotie"   },
    { key: "Soacra"  , text: "Soacra"  ,  value: "soacra"  },
    { key: "Altceva" , text: "Altceva" ,  value: "altceva" }
  ]

}

const occasionList = [
  { text: "Zi De Nastere"     , value: "zi_de_nastere"    },
  { text: "Aniversare"        , value: "aniversare"     },
  { text: "Craciun"           , value: "craciun"        },
  { text: "Paste"             , value: "paste"          },
  { text: "Dragobete"         , value: "dragobete"      },
  { text: "Cadou De Casa Noua", value: "cadou_de_casa_noua"},
  { text: "Altceva"           , value: "altceva"        }
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
  cadou_de_casa_noua : cadou_de_casa_noua
}

const typeList = [
  { text: "Clasic"   , value: "clasic_type"   },
  { text: "Amuzant"  , value: "amuzant_type"  },
  { text: "Romantic" , value: "romantic_type" },
  { text: "Practic"  , value: "practic_type"  },
  { text: "Excentric", value: "excentric_type"},
  { text: "Donatie"  , value: "donatie_type"  },
  { text: "Handmade" , value: "handmade_type" },
]

const characteristicsList = [
  { key: "Sportiv"     , text: "Sportiv"     , value: "sportiv_ch"    },
  { key: "Sedentar"    , text: "Sedentar"    , value: "sedentar_ch"   },
  { key: "Amuzant"     , text: "Amuzant"     , value: "amuzant_ch"    },
  { key: "Serios"      , text: "Serios"      , value: "serios_ch"     },
  { key: "Altruist"    , text: "Altruist"    , value: "altruist_ch"   },
  { key: "Egoist"      , text: "Egoist"      , value: "egoist_ch"     },
  { key: "Copilaros"   , text: "Copilaros"   , value: "copilaros_ch"  },
  { key: "Matur"       , text: "Matur"       , value: "matur_ch"      },
  { key: "Spontan"     , text: "Spontan"     , value: "spontan_ch"    },
  { key: "Romantic"    , text: "Romantic"    , value: "romantic_ch"   },
  { key: "Incapatanat" , text: "Incapatanat" , value: "incapatan_ch"  },
  { key: "Nebunatic"   , text: "Nebunatic"   , value: "nebunatic_ch"  },
  { key: "Energic"     , text: "Energic"     , value: "energic_ch"    }
]

const interestsList = [
  { key: "Animale"                  , text: "Animale"                  , value: "animale"                   },
  { key: "Filme si Seriale"         , text: "Filme si Seriale"         , value: "filme_si_seriale"          },
  { key: "Carti"                    , text: "Carti"                    , value: "carti"                     },
  { key: "Sporturi"                 , text: "Sporturi"                 , value: "sporturi"                  },
  { key: "Plante si natura"         , text: "Plante si natura"         , value: "plante_si_natura"          },
  { key: "Istorie"                  , text: "Istorie"                  , value: "istorie"                   },
  { key: "Muzica"                   , text: "Muzica"                   , value: "muzica"                    },
  { key: "Arta"                     , text: "Arta"                     , value: "arta"                      },
  { key: "Gatit"                    , text: "Gatit"                    , value: "gatit"                     },
  { key: "Cosmetice"                , text: "Cosmetice"                , value: "cosmetice"                 },
  { key: "Moda"                     , text: "Moda"                     , value: "moda"                      },
  { key: "Boardgames and Puzzles"   , text: "Boardgames and Puzzles"   , value: "boardgames_and_puzzles"    },
  { key: "Decoratiuni Interioare"   , text: "Decoratiuni Interioare"   , value: "decoratiuni_interioare"    },
  { key: "Tehnologie"               , text: "Tehnologie"               , value: "tehnologie"                },
  { key: "Jucarii"                  , text: "Jucarii"                  , value: "jucarii"                   },
  { key: "Fotografie si Filmografie", text: "Fotografie si Filmografie", value: "fotografie_si_filmografie" }
]

const budgetList = [
  { text: "Sub 100 lei"  , value: "mai_mic_100"},
  { text: "100-200 lei"  , value: "100_200"    },
  { text: "200-300 lei"  , value: "200_300"    },
  { text: "Peste 300 lei", value: "300_plus"   }
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
      width: window.innerWidth,
      height: 0,
      displayGifts: false,
      allGifts: [],
      loadingResults: false
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeValue2 = this.onChangeValue2.bind(this);
    this.onChangeValue3 = this.onChangeValue3.bind(this);
    this.onChangeValue4 = this.onChangeValue4.bind(this);
    this.onChangeValue5 = this.onChangeValue5.bind(this);
    this.onChangeValue6 = this.onChangeValue6.bind(this);
    this.onChangeValue7 = this.onChangeValue7.bind(this);
    this.onChangeValue8 = this.onChangeValue8.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    // document.addEventListener('mousedown', this.handleClickOutside);
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
    if(nameHide === 'displayQuestion1' && this.state.chosenSex == "") {
      this.state.showPopup = true;
      return
    }

    this.setState({...this.state, [nameShow]: true, [nameHide]: false });
    console.log(nameShow)
    if(nameShow === 'displayQuestion1'){
      this.setState({...this.state, [nameShow]: true, [nameHide]: false , chosenRelationship: "" });
      console.log(this.state.chosenRelationship)
    }
    if(nameShow === 'finishQuiz'){
      this.setState({...this.state, [nameShow]: true, [nameHide]: false , allGifts: [] });
      console.log(this.state.chosenRelationship)
    }
    if(nameHide === 'displayQuestion1' && this.state.chosenSex == "") {
      this.state.showPopup = true;
      return
    }

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
    else if (this.state.displayQuestion8 == true || this.state.finishQuiz == true || this.state.displayGifts)
      x = 8
    // console.log(`x is ${x}`)
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
    return exists
  }

  submit = () => {
    this.toggle("finishQuiz","loadingResults");
    var price = this.state.chosenBudget
    if (!price) {
      price = "mai_mic_300"
    }
    var payload = {
      price: price,
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
    axios.post(`https://us-central1-gifter-51063.cloudfunctions.net/app/filter`, payload)
      .then( res => this.handleSuccessfulPost(res))
      .catch( err => this.handleError(err))
  }

  handleError = (err) => {
    console.log(err)
  }
  handleSuccessfulPost = (res) => {
    console.log(res.status)
    console.log(res)
    for(var i = 0; i < res.data.length; i++) {
      this.state.allGifts.push(res.data[i]);
    }
    setTimeout(this.func, 700, "loadingResults","displayGifts");
    this.state.allGifts.sort( (e1,e2) => { return e2.match - e1.match })
    // alert('Successful post!')
    // this.toggle("loadingResults","displayGifts");
  }

  func = (a1, a2) => {
    this.toggle("loadingResults","displayGifts");
  }

  updateField = (e, {value, name}) => {
      console.log(value)
      this.setState({
        ...this.state,
        [name]: value
      });
      console.log(this.state[name])
    }

  getMatchValue = (gift) => {
    var x = Math.floor(gift.match * 100)/100
    console.log(`gift.match ${gift.match}`)
    console.log(`match is ${x}`)
    return x
  }
  render() {
    const { width } = this.state

    return (
      <div className="Quiz">
        <ResponsiveContainer>
          {/* <Segment id='seg1' style={{ padding: '2em 0em'}} vertical> */}
          <Segment id='seg1' style={{ padding: '2em 0em'}} vertical>
            <div id="quiz-content">
              <Grid container stackable centered>

                <Grid.Row centered>
                  <div id="quiz-progress-div">
                    { progress.map((e) =>
                      <React.Fragment>
                        <div
                          className={(this.getProgress() >= e ? "level-compleated" : null) + " level-round-div"}
                          style={ width > 500 ? { minHeight: '40px', minWidth: '40px' } : { minHeight: '20px', minWidth: '20px' }}
                          >
                          <p
                            className="level-p"
                            style={  width > 500 ? {padding: '6px 9px 5px 14px',  fontWeight: '700', fontSize: '15pt'} : {padding: '2px 0px 0px 6px', fontWeight: '700', fontSize: '9pt'}}
                          > {e} </p>
                        </div>
                        <div
                          className={(this.getProgress() > e  ? "level-compleated" : null) + " line"}
                          style={ width > 500 ? { height: '4px', width: '3em' } : { minHeight: '2px', minWidth: '1em' }}
                          >
                        </div>
                      </React.Fragment>
                      )}
                    <div
                      className={(this.getProgress() == 8 ? "level-compleated" : null) + " level-round-div"}
                      style={ width > 500 ?  { minHeight: '40px', minWidth: '40px' } : { minHeight: '20px', minWidth: '20px' }}
                      >
                      <p
                      className="level-p"
                      style={  width > 500 ? {padding: '6px 9px 5px 14px',  fontWeight: '700', fontSize: '15pt'} : {padding: '2px 0px 0px 6px', fontWeight: '700', fontSize: '9pt'}}
                      > 8 </p>
                    </div>
                  </div>
                </Grid.Row>

                <Grid.Row columns={3}>
                  {/* quiz column*/}
                  { this.state.displayGifts == false && this.state.loadingResults == false ?
                  <Grid.Column width={5}>
                    {/* choose sex*/}
                    {this.state.displayQuestion1 ?
                    <div className="question-div" style={ width < 500 ? { maxWidth: '75%'} :  { maxWidth: '100%' }}>
                      { this.state.chosenSex == "" ?
                        <Popup content='Add users to your feed'
                          content={ "Trebuie sa raspundeti la intrebare pentru a continua!"}
                          on={['click']}
                          trigger={
                            <Button onClick={(e) => {this.toggle("displayQuestion1","displayQuestion2")}} id="continua-btn">CONTINUA</Button>
                        } />
                        : <Button onClick={(e) => {this.toggle("displayQuestion1","displayQuestion2")}} id="continua-btn">CONTINUA</Button>
                      }
                      <div className="pannel-div">
                        <div className="inside-pannel-div">
                          <p className="question-text-p"> Alegeti sexul persoanei pentru care cautati cadou: </p>
                          <div className="question-item" onChange={this.onChangeValue}>
                            <input type="radio" value="barbat" name="gender" style={{marginRight: "5px"}} checked={this.savedValue("chosenSex" ,"barbat")} onChange={this.onChangeValue} className="radio"/>
                            <label>Barbat</label>
                            <br/>
                            <input type="radio" value="femeie" name="gender" style={{marginRight: "5px"}} checked={this.savedValue("chosenSex","femeie")} className="radio"/>
                            <label>Femeie</label>
                          </div>
                        </div>
                      </div>
                    </div> : null}

                    {/* choose age*/}
                    {this.state.displayQuestion2 ?
                    <div className="question-div" style={ width < 500 ? { maxWidth: '75%'} :  { maxWidth: '100%' }}>
                      <Button onClick={(e) => {this.toggle("displayQuestion2","displayQuestion1")}} id="back-btn">INAPOI</Button>
                      <Button onClick={(e) => {this.toggle("displayQuestion2","displayQuestion3")}} id="continua-btn">CONTINUA</Button>
                      <div className="pannel-div">
                        <div className="inside-pannel-div">
                          <p className="question-text-p"> Alegeti categoria de varsta a persoanei pentru care cautati cadou: </p>
                          <div className="question-item" onChange={this.onChangeValue2}>
                            {ageList.map((elem) =>
                              <React.Fragment key={elem.value.toString()} >
                                <input type="radio" value={elem.value} name="age" style={{marginRight: "5px"}} checked={this.savedValue("chosenAge",elem.value)} className="radio"/>
                                <label> {elem.text} </label>
                                <br/>
                              </React.Fragment>
                             )}
                          </div>
                        </div>
                      </div>
                    </div> : null}

                    {/* choose relationship*/}
                    {this.state.displayQuestion3 ?
                      <div className="question-div" style={ width < 500 ? { maxWidth: '75%'} :  { maxWidth: '100%' }}>
                        <Button onClick={(e) => {this.toggle("displayQuestion3","displayQuestion2")}} id="back-btn">INAPOI</Button>
                        <Button onClick={(e) => {this.toggle("displayQuestion3","displayQuestion4")}} id="continua-btn">CONTINUA</Button>
                        <div className="pannel-div">
                          <div className="inside-pannel-div">
                            <p className="question-text-p"> Alegeti relatia pe care o aveti cu persoana pentru care cautati cadoul: </p>
                            {this.state.chosenSex ?
                              (this.state.chosenSex == "barbat" ?
                                <Dropdown placeholder='Relatie' fluid selection scrolling options={roleList.barbat} onChange={this.updateField} name='chosenRelationship' value={this.state.chosenRelationship}/>
                                : <Dropdown placeholder='Relatie' fluid selection scrolling options={roleList.femeie} onChange={this.updateField} name='chosenRelationship' value={this.state.chosenRelationship}/>
                              )
                              : <p> Please go back to question 1 and choose the sex of the person first!</p>
                            }
                          </div>
                        </div>
                    </div> : null}

                    {/* choose occasion*/}
                    {this.state.displayQuestion4 ?
                    <div className="question-div" style={ width < 500 ? { maxWidth: '75%'} :  { maxWidth: '100%' }}>
                      <Button onClick={(e) => {this.toggle("displayQuestion4","displayQuestion3")}} id="back-btn">INAPOI</Button>
                      <Button onClick={(e) => {this.toggle("displayQuestion4","displayQuestion5")}} id="continua-btn">CONTINUA</Button>
                      <div className="pannel-div">
                        <div className="inside-pannel-div">
                          <p className="question-text-p"> Alegeti ocazia pentru care oferiti cadoul: </p>
                          <div className="question-item" onChange={this.onChangeValue4}>
                            {occasionList.map((elem) =>
                              <React.Fragment key={elem.value.toString()}>
                                <input type="radio" value={elem.value} name="ocasion" checked={this.savedValue("chosenOccasion",elem.value)} className="radio"/> {elem.text}
                                <br/>
                              </React.Fragment>
                            )}
                          </div>
                        </div>
                      </div>
                    </div> : null}

                    {/* choose present type*/}
                    {this.state.displayQuestion5 ?
                    <div className="question-div" style={ width < 500 ? { maxWidth: '75%'} :  { maxWidth: '100%' }}>
                      <Button onClick={(e) => {this.toggle("displayQuestion5","displayQuestion4")}} id="back-btn">INAPOI</Button>
                      <Button onClick={(e) => {this.toggle("displayQuestion5","displayQuestion6")}} id="continua-btn">CONTINUA</Button>
                      <div className="pannel-div">
                        <div className="inside-pannel-div">
                          <p className="question-text-p"> Alegeti unul sau mai multe tipuri de cadou: </p>
                          <div className="question-item">
                            {typeList.map((elem) =>
                              <React.Fragment key={elem.value.toString()}>
                                <Checkbox color="primary" value={elem.value} onChange={this.onChangeValue5} checked={this.savedValue("chosenGiftType",elem.value)}/> {elem.text}
                                <br/>
                              </React.Fragment>
                            )}
                          </div>
                        </div>
                      </div>
                    </div> : null}

                    {/* choose present characteristics*/}
                    {this.state.displayQuestion6 ?
                    <div className="question-div" style={ width < 500 ? { maxWidth: '75%'} :  { maxWidth: '100%' }}>
                      <Button onClick={(e) => {this.toggle("displayQuestion6","displayQuestion5")}} id="back-btn">INAPOI</Button>
                      <Button onClick={(e) => {this.toggle("displayQuestion6","displayQuestion7")}} id="continua-btn">CONTINUA</Button>
                      <div className="pannel-div">
                        <div className="inside-pannel-div">
                          <p className="question-text-p"> Alegeti caracteristicile persoanei: </p>
                          <Dropdown placeholder='Caracteristici' fluid multiple selection scrolling options={characteristicsList} onChange={this.updateField} name='chosenGiftCharacteristics' value={this.state.chosenGiftCharacteristics}/>
                        </div>
                      </div>
                    </div> : null}

                    {/* choose person interests*/}
                    {this.state.displayQuestion7 ?
                    <div className="question-div" style={ width < 500 ? { maxWidth: '75%'} :  { maxWidth: '100%' }}>
                      <Button onClick={(e) => {this.toggle("displayQuestion7","displayQuestion6")}} id="back-btn">INAPOI</Button>
                      <Button onClick={(e) => {this.toggle("displayQuestion7","displayQuestion8")}} id="continua-btn">CONTINUA</Button>
                      <div className="pannel-div">
                        <div className="inside-pannel-div">
                          <p className="question-text-p"> Alegeti interesele persoanei: </p>
                          <Dropdown placeholder='Interese persoana' fluid multiple selection scrolling options={interestsList} onChange={this.updateField} name='chosenInterests' value={this.state.chosenInterests}/>
                        </div>
                      </div>
                    </div> : null}

                    {/* choose budget*/}
                    {this.state.displayQuestion8 ?
                    <div className="question-div" style={ width < 500 ? { maxWidth: '75%'} :  { maxWidth: '100%' }}>
                      <Button onClick={(e) => {this.toggle("displayQuestion8","displayQuestion7")}} id="back-btn">INAPOI</Button>
                      <Button onClick={(e) => {this.toggle("displayQuestion8","finishQuiz")}}       id="continua-btn">CONTINUA</Button>
                      <div className="pannel-div">
                        <div className="inside-pannel-div">
                          <p className="question-text-p"> Alegeti bugetul pentru cadoul dorit: </p>
                          <div className="question-item">
                            {budgetList.map((elem) =>
                              <React.Fragment key={elem.value.toString()}>
                                <input type="radio" value={elem.value} name="gender" onChange={this.onChangeValue8} className="radio" checked={this.savedValue("chosenBudget", elem.value)}/> {elem.text}
                                <br/>
                              </React.Fragment>
                          )}
                          </div>
                        </div>
                      </div>
                    </div> : null}

                    {this.state.finishQuiz ?
                    <div style={{textAlign: "left", marginLeft: "45px"}}>
                      <Button onClick={(e) => {this.toggle("finishQuiz","displayQuestion8")}} id="back-btn">INAPOI</Button>
                      <Button onClick={(e) => {this.submit()}}       id="continua-btn">FINALIZEAZA</Button>
                      <p id="great-p"> Ati parcurs toate intrebarile! </p>
                      <p id="review-p"> Puteti reveni oricand la intrebari  pentru a edita raspunsurile. </p>

                    </div>
                    : null}
                  </Grid.Column> : null}

                  {this.state.displayGifts == false && this.state.loadingResults == false?
                  <Grid.Column id="quiz-img-column" width={7} floated="left">
                    {/* images */}
                      <div style={ width > 500 ? {marginLeft: '40px', marginTop: '15px'} : {marginLeft: '-10px'}}>
                        {this.state.chosenRelationship ?
                          <Image src={imgRelationshipList.[this.state.chosenRelationship]} id="quiz-img"/>
                        : null}
                        {this.state.chosenSex ?
                          ( this.state.chosenAge ?
                            <Image src={imgHumanList.[this.state.chosenSex][this.state.chosenAge]} id="quiz-img" />
                            : <Image src={imgHumanList.[this.state.chosenSex].['18_25']} id="quiz-img" />
                          ) : null
                        }
                        {this.state.chosenOccasion ?
                          <Image src={imgOccasionList.[this.state.chosenOccasion]} id="quiz-img"/>
                        : null}
                      </div>
                  </Grid.Column> : null}

                  {this.state.displayGifts == false && this.state.loadingResults == false?
                  <Grid.Column id="selected-bubbles-column" width={4}>
                  {/* selected-bubbles on the right of the screen */}
                    <div className="selected-bubbles-div" style={ width > 500 ? {marginLeft: '-10px', marginTop: '40px'} : {marginLeft: '0px'}}>
                      <Grid.Row>
                      {this.state.chosenSex?
                        <div className="buble-div b1"> <p className="buble-p"> {this.state.chosenSex == 'femeie'? "Femeie" : "Barbat"} </p>  </div>
                      : null}

                      {this.state.chosenAge?
                        <div className="buble-div b2">
                          <p className="buble-p">
                            {ageList.find( e => {return e.value == this.state.chosenAge}).text}
                          </p>
                        </div>
                      : null}

                      {this.state.chosenSex && this.state.chosenRelationship?
                        <div className="buble-div b3">
                          <p className="buble-p">
                            {this.state.chosenRelationship && this.state.chosenSex == "femeie"?
                            roleList.femeie.find( e => {return e.value == this.state.chosenRelationship}).text
                            : roleList.barbat.find( e => {return e.value == this.state.chosenRelationship}).text}
                          </p>
                        </div>
                      : null}

                      {this.state.chosenOccasion?
                        <div className="buble-div b4">
                          <p className="buble-p">
                            {occasionList.find( e => {return e.value == this.state.chosenOccasion}).text}
                          </p>
                        </div>
                      : null}

                      {this.state.chosenBudget?
                        <div className="buble-div b5">
                          <p className="buble-p">
                            {budgetList.find( e => {return e.value == this.state.chosenBudget}).text}
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
                          <div className="buble-div b3">
                            <p className="buble-p">
                              { typeList.find( e => {return e.value == type }).text}
                            </p>
                          </div>
                        )
                      )
                      : null}
                      </Grid.Row>

                      <Grid.Row>
                      {this.state.chosenGiftCharacteristics.length != 0 ?
                        <p class="small-label"> Caracteristici: </p>
                       : null
                      }
                      {this.state.chosenGiftCharacteristics.length != 0?
                        this.state.chosenGiftCharacteristics.map ( (type) =>
                          <div className="buble-div b1">
                            <p className="buble-p">
                              { characteristicsList.find( e => {console.log(type); return e.value == type }).text}
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
                              { interestsList.find( e => {return e.value == type }).text}
                            </p>
                          </div>
                        )
                      : null}
                      </Grid.Row>
                    </div>

                  </Grid.Column> : null}

                  {this.state.loadingResults == true ?
                    <Image src={loading} alt="loading..." circular id="loading"/>
                  : null }


                  {this.state.displayGifts ?
                    <div>
                        <Button onClick={(e) => {this.toggle("displayGifts","finishQuiz")}} id="back-quiz-btn"> <Icon name='left arrow' /> INAPOI  LA  QUIZ</Button>
                        { this.state.allGifts.length > 0 ?
                          <p id="great-p"> Lista de cadouri </p>
                          : <p id="bad-p"> Ne pare rau, nu am gasit cadouri potrivite <Icon name='meh outline'/> </p>
                         }

                        <div>
                        {console.log("this.state.allGifts: din map", this.state.allGifts)}
                        <br/>
                        <Card.Group itemsPerRow={ width < 500 ? '1' : '4'} centered>
                          {this.state.allGifts.map((gift, i) =>
                            <Card key={i} id="gift-column" style={ width < 500 ? {maxWidth: '70%'} : null }>
                              <Image src={gift.imagine} wrapped ui={false} />
                              <Card.Content>
                                <Card.Header>{gift.nume}</Card.Header>
                                <Card.Meta>
                                  <span><a href={gift.link}>Link produs</a></span>
                                </Card.Meta>
                                <Card.Description>
                                  {gift.pret} RON
                                </Card.Description>
                              </Card.Content>
                              <Card.Content extra>
                                <a>
                                  Potrivire
                                   <Progress id="bar" percent={this.getMatchValue(gift)} color='#FED137' progress/>
                                </a>
                              </Card.Content>
                            </Card>
                          )}
                        </Card.Group>
                      </div>
                  </div> : null}
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
