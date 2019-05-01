import React, { Component } from 'react';
import { Typography } from '@rmwc/typography';
import { Icon } from '@rmwc/icon';
import '@material/typography/dist/mdc.typography.css';
import '@rmwc/icon/icon.css';
import { styles } from './styles.js';

export default class ComplaintInfo extends Component {
  render() {
    const {complaint} = this.props;
      
    return (
      <div style={styles.container}>
      <div style={styles.image}>
        <div style={styles.iconBar}><Icon icon="thumb_up"/><Icon icon="share"/><Icon icon="comment"/></div>
        <img src={complaint.img} alt='image' width={300} height={169}/>
      </div>
      <Typography use="overline">{complaint.title}</Typography>
      <div style={styles.textScroller}>
      <br></br>
      <Typography use="subtitle2">{complaint.text}</Typography>
      </div>
      </div>
    )
  }
}