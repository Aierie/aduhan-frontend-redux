import DUNs from '../../../data/DUN_list.json';

const trueLocationFilter = {};
for (let DUN of DUNs.DUNs.slice(0, 20)) {
  trueLocationFilter[DUN] = true;
}

const falseLocationFilter = {};
for (let DUN of DUNs.DUNs.slice(0, 20)) {
  falseLocationFilter[DUN] = false;
}

function locationFilter(state=trueLocationFilter, action) {
  if (action.filterType !== "location") {
    return state;
  };
  switch (action.type) {
    case "TOGGLE_FILTER_ITEM":
      return {...state, [action.filterItem]:!state[action.filterItem]};
    case "TOGGLE_SELECT_ALL":
      return action.checked ? {...trueLocationFilter} : {...falseLocationFilter};
    default:
      return state
  }
}

const trueIssueTypeFilter = {facilities:true, legal:true, accessibility:true, general:true};
const falseIssueTypeFilter = {facilities:false, legal:false, accessibility:false, general:false};

function issueTypeFilter(state=trueIssueTypeFilter, action) {
  if (action.filterType !== "issueType") {
    return state;
  };
  switch (action.type) {
    case "TOGGLE_FILTER_ITEM":
      return {...state, [action.filterItem]:!state[action.filterItem]};
    case "TOGGLE_SELECT_ALL":
      return action.checked ? {...trueIssueTypeFilter} : {...falseIssueTypeFilter};
    default:
      return state
  }
};

export { locationFilter, issueTypeFilter };