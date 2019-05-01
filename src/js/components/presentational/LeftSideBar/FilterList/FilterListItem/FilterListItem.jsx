import React, { Component } from 'react';
import { Typography } from '@rmwc/typography';
import { Checkbox } from '@rmwc/checkbox';
import { SimpleListItem } from '@rmwc/list';
//#notetake - done because unsure about how to override global css styling
import { styles } from "./styles.js";
import '@material/list/dist/mdc.list.css';
import "@rmwc/list/collapsible-list.css";


export default class FilterListItem extends Component {
  render() {  
    const {filterName, checked, onClick} = this.props.filterItem;
    return (
      <SimpleListItem style={styles.container}>
      <Typography use="subtitle2">
        {filterName}
      </Typography>
      <Checkbox checked={checked} onClick={onClick}/>
    </SimpleListItem>
      )
  }
}