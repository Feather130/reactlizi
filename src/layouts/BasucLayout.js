import React, { Component } from "react";
import SiderMenu from "../components/SiderMenu";
//import { menuData } from "../common/menu";

class BasicLayout extends Component {
  render() {
    return <div>
        <SiderMenu logo="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
        {/* menuData={menuData} */}
      </div>;
  }
}

export default BasicLayout;
