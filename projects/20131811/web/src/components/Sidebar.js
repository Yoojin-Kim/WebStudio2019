import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { history } from './history'

const { SubMenu } = Menu;


class Sidebar extends Component {
  
  rootSubmenuKeys = ['sub1', 'sub2'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  onClick = ({ key }) => {
    if (key === '1') {
      console.log(1)
      history.push('/movielist/date')
    } else if (key === '2') {
      history.push('/movielist/star')
      console.log(2)
    } else if (key === '5') {
      console.log(3)
      history.push('/add')
    }
  }

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        onClick={this.onClick}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="align-center" />
              <span>Movie list</span>
            </span>
          }
        >
          <Menu.Item key="1">By Date</Menu.Item>
          <Menu.Item key="2">By Star</Menu.Item>

        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="plus" />
              <span>Add Movie</span>
            </span>
          }
        >
          <Menu.Item key="5">Add</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sidebar;
