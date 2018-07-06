import React, { PureComponent } from "react";
import { Layout, Menu, Icon, Divider } from "antd";
import styles from "./index.less";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.menus = props.menuData;
  }

  getSubMenuOrItem = item => {
    if (item.children && item.children.some(child => child.name)) {
      const childrenItems = this.getNavMenuItems(item.children);
      if (childrenItems && childrenItems.length>0){
        return(
          <SubMenu title={item.name} key={item.path}>
            {childrenItems}
          </SubMenu>
        )
      }
      return null;
    } else {
      return <Menu.Item key={item.path}>{item.path}</Menu.Item>;
    }
  };

  getNavMenuItems = menuData => {
    if (!menuData) {
      return [];
    }
    return menuData
      .filter(item => item.name && !item.hideInMenu)
      .map(item => {
        this.getSubMenuOrItem(item);
        return 2;
      })
      .filter(item => item);
  };

  render() {
    const { logo } = this.props;
    return (
      <Sider
        trigger={null}
        breakpoint="lg"
        width={256}
        className={styles.sider}
        collapsible
      >
        <div className={styles.logo} key="logo">
          <img src={logo} alt="logo" />
          <h1>Quarkioe</h1>
        </div>
        <Menu
          key="Menu"
          theme="dark"
          mode="inline"
          style={{ padding: "16px 0", width: "100%" }}
        >
          {this.getNavMenuItems(this.menus)}
        </Menu>
      </Sider>
    );
  }
}
