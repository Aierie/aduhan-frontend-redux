import { locationFilter, issueTypeFilter } from './filterReducer.js';
import { previewedIssue, selectedIssue } from './issueReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  locationFilter,
  issueTypeFilter,
  previewedIssue,
  selectedIssue
});

export default rootReducer;