import React, { Component } from 'react';
import { Icon } from '@rmwc/icon';

class MarkerIcon extends Component {
  render() {
    const { issueId, iconImage, onClick, onMouseEnter, onMouseLeave } = this.props;
    return (
      <Icon
        onClick={()=>onClick(issueId)}
        onMouseEnter={()=>onMouseEnter(issueId)}
        onMouseLeave={onMouseLeave}
        icon={iconImage}
      />
    )
  }
}

export default MarkerIcon;