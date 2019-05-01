import React from 'react';
import { connect } from 'react-redux';
import MarkerIcon from '../presentational/BaseMap/MarkerIcon/MarkerIcon.jsx';
import {
  previewIssue,
  stopPreviewIssue,
  selectIssue
} from '../../redux/actionCreators/issueActionCreators.js';

const setIconImage = (previewed, issueType) => {
  //should be based on kind of issue
  let color;
  if (previewed) {
    color = "red";
  } else {
    switch (issueType) {
      case "f":
        color = "#007BA7";
        break;
      case "l":
        color = "teal";
        break;
      case "a":
        color = "#B2FFFF";
        break;
      case "g":
        color = "green";
        break;
      default:
        color = "white";
        break;
    }
  }
  return (
    <div
      style={{
        background: color,
        width: previewed ? "12px" : "10px",
        height: previewed ? "12px" : "10px",
        borderRadius: "100px"
      }}
    />
  );
};

function MarkerMSTP(state, ownProps) {
  
  return {iconImage: setIconImage(state.previewedIssue===ownProps.issueId, ownProps.issueType)}
}

function MarkerMDTP(dispatch) {
  return { 
    onMouseEnter: (id) => dispatch(previewIssue(id)),
    onMouseLeave: () => dispatch(stopPreviewIssue()),
    onClick: (id) => dispatch(selectIssue(id)),
  }
}

const IssueMarker = connect(MarkerMSTP, MarkerMDTP)(MarkerIcon);

export default IssueMarker;