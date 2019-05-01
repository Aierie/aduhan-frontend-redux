import React, {Component} from 'react';
import { TabBar, Tab } from '@rmwc/tabs';
import FilterList from './FilterList/FilterList.jsx';
import ComplaintInfo from './ComplaintInfo/ComplaintInfo.jsx';
import { styles } from './styles';
import '@material/tab-bar/dist/mdc.tab-bar.css';
import '@material/tab/dist/mdc.tab.css';
import '@material/tab-scroller/dist/mdc.tab-scroller.css';
import '@material/tab-indicator/dist/mdc.tab-indicator.css';

export default class LeftSideBar extends Component {
  render() {
    const {children} = this.props;
    return (
      <div>
      <TabBar><Tab>1</Tab><Tab>2</Tab></TabBar>
      <div style={styles.container}>
        {children}
      </div>
      </div>

    )
  }
}