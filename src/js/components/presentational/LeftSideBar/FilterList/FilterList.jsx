import React, { Component } from 'react';
import FilterListItem from './FilterListItem/FilterListItem.jsx';
import { CollapsibleList, SimpleListItem } from '@rmwc/list';
import { Typography } from '@rmwc/typography';
import { Checkbox } from '@rmwc/checkbox';
import "@material/list/dist/mdc.list.css";
import "@rmwc/list/collapsible-list.css";
import "@material/checkbox/dist/mdc.checkbox.css";
import '@material/typography/dist/mdc.typography.css';
import { styles } from './styles.js';


//presentational class, expects to map filterItems 
//in format: {itemName:bool, itemName:bool}
export default class FilterList extends Component { 
  render() {
  const {filterTitle, filterItems, onClick, selectAll} = this.props;
  return (
    <CollapsibleList
    handle={
      <SimpleListItem style={styles.container}>
        <Typography use="button">{filterTitle}</Typography><Checkbox onClick={(e)=>{e.stopPropagation(); selectAll(event.target.checked)}}/>
      </SimpleListItem>
    }
    >
    {Object.keys(filterItems).map((item, index)=><FilterListItem key={index} filterItem={{filterName: item, checked: filterItems[item], onClick: ()=>onClick(item)}}/>)}
    </CollapsibleList>
  )
}
}