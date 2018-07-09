import React, { PureComponent } from 'react';
import { Layout, Menu, Icon, Divider } from 'antd';
import styles from './index.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.menus = props.menuData;
  }

  getSubMenuOrItem = item => {
    if (item.children && item.children.length > 0) {
      const childrenItems = this.getNavMenuItems(item.children);
      if (childrenItems && childrenItems.length > 0) {
        return (
          <SubMenu title={item.name} key={item.path}>
            {childrenItems}
          </SubMenu>
        );
      }
      return null;
    } else {
      return <Menu.Item key={item.path}>{item.name}</Menu.Item>;
    }
  };

  getNavMenuItems = menuData => {
    if (!menuData) {
      return [];
    }
    return menuData
      .filter(item => item.name && item.show)
      .map(item => this.getSubMenuOrItem(item))
      .filter(item => item);
  };

  render() {
    const { logo, title } = this.props;
    return (
      <Sider
        trigger={null}
        breakpoint="lg"
        width={256}
        className="sider"
        collapsible
      >
        <div className="logo" key="logo">
          <img src={logo} alt="logo" />
          <h1>{title}</h1>
        </div>
        <Menu
          key="Menu"
          theme="dark"
          mode="inline"
          style={{ padding: '16px 0', width: '100%' }}
        >
          {this.getNavMenuItems(this.menus)}
        </Menu>
      </Sider>
    );
  }
}
