import { connect } from 'react-redux';
import FilterList from '../presentational/LeftSideBar/FilterList/FilterList.jsx';
import {
  toggleFilterItem,
  toggleSelectAll
} from '../../redux/actionCreators/filterActionCreators.js';

function issueTypeFilterMSTP(state) {
  return ({
    filterItems: state.issueTypeFilter
  })
};

function issueTypeFilterMDTP(dispatch) {
  return ({
    onClick: (id) => dispatch(toggleFilterItem("issueType", id)),
    selectAll: (checked)=> dispatch(toggleSelectAll("issueType", checked))
  })
};

const IssueTypeFilter = connect(issueTypeFilterMSTP, issueTypeFilterMDTP)(FilterList);

export default IssueTypeFilter;