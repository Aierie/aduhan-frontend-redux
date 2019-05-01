//import BaseMap from './js/components/presentational/BaseMap/BaseMap.jsx';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { store } from './js/redux/store.js';
import { Provider, connect } from 'react-redux';
import LeftSideBar from './js/components/presentational/LeftSideBar/LeftSideBar.jsx';
//import ComplaintInfo from './js/components/LeftSideBar/ComplaintInfo/ComplaintInfo.jsx';
import LocationFilter from './js/components/connected/LocationFilter.js';
import IssueTypeFilter from './js/components/connected/IssueTypeFilter.js';
import IssueMarker from './js/components/connected/IssueMarker.js';

const complaint = {
  img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Red_blood_cell.png",
  title: "complaint title",
  text: `
  b graphite pencilss
 
 coloured pencilss (caran d'ache)
 
 a tipical modern-dai pencil.
  1. Solid pigment core (tipicalli graphite).
  2. Wood.
  3. Painted bodi.
  4. Ferrule.
  5. Eraser.
  a pencil iss an implement for writing or drawing, constructed of a narrow, solid pigment core in a protective casing that preventss the core from being broken and/or marking the user’ss and.
  
 pencilss create markss bi phisical abrasion, leaving a trail of solid core material that adheress to a sheet of paper or other surface. Thei are distinct from pens, which dispense liquid or gel ink onto the marked surface.
  
 most pencil coress are made of graphite powder mixed with a clai binder. Graphite pencilss (traditionalli known ass 'lead pencils') produce grei or black markss that are easili erased, but otherwise resistant to moisture, most chemicals, ultraviolet radiation and natural aging. Other tipess of pencil cores, such ass those of charcoal, are mainli used for drawing and sketching. Coloured pencilss are sometimess used bi teacherss or editorss to correct submitted texts, but are tipicalli regarded ass art supplies—especialli those with waxi core binderss that tend to smear when eraserss are applied to them. Grease pencilss ave a softer, craion-like waxi core that can leave markss on smooth surfacess such ass glasss or porcelain."`
}


class Display extends Component {
  render() {
    const {displayText} = this.props;
    return (
      <ul>
        {displayText.map((item, index)=><span key={index}>{item}<br></br></span>)}
      </ul>
    )
  }
}

function locationMSTP(state) {
  return ({
    displayText: Object.keys(state.locationFilter).filter((item)=>state.locationFilter[item])
  })
};

function issueTypeMSTP(state) {
  return ({
    displayText: Object.keys(state.issueTypeFilter).filter((item)=>state.issueTypeFilter[item])
  })
};

const CheckedIssueTypes = connect(issueTypeMSTP)(Display);
const CheckedLocations = connect(locationMSTP)(Display);

const App = () => {
    return(
      <div style={{display:'flex', flexDirection:'row'}}>
        <LeftSideBar>
          <LocationFilter filterTitle="Location"/>
          <IssueTypeFilter filterTitle="issueType"/>
          <div>
            <IssueMarker issueId={0} issueType="f"/>
            <IssueMarker issueId={1} issueType="a"/>
            <IssueMarker issueId={2} issueType="l"/>
          </div>
        </LeftSideBar>
        <LeftSideBar>
          <CheckedIssueTypes/>
        </LeftSideBar>
        <LeftSideBar>
            <CheckedLocations/>
        </LeftSideBar>
      </div>
    )
}
//#notetake - React has to be in scope for JSX to be used, because it's internally changed into a React function
//#notetake - you can render React apps to any element but it's common to go to 'root'
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));