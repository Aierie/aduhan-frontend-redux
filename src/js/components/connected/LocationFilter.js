import { connect } from 'react-redux';
import FilterList from '../presentational/LeftSideBar/FilterList/FilterList.jsx';
import {
  toggleFilterItem,
  toggleSelectAll
} from '../../redux/actionCreators/filterActionCreators.js';

function locationFilterMSTP(state) {
  return (
    {
      filterItems: state.locationFilter
    }
  )
};

function locationFilterMDTP(dispatch) {
  return (
    {
      onClick: (id)=>dispatch(toggleFilterItem("location", id)),
      selectAll: (checked)=> dispatch(toggleSelectAll("location", checked))
    }
  )
};

const LocationFilter = connect(locationFilterMSTP, locationFilterMDTP)(FilterList);

export default LocationFilter;