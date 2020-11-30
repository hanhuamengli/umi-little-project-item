import React from 'react';
import { Menu } from 'antd';
import {history} from 'umi';
import Styles from './index.less';
const { SubMenu } = Menu;

class BaseHeader extends React.Component<any,any>{
  constructor(props:any){
    super(props);
    this.state={
      mode: 'horizontal',
      // theme: 'dark', //自定义header背景色
      menuData: this.props.menuData,
    }
  }
  
  handleMenuClick = (event: { key: any; })=>{
    console.log(event.key);
    if(event.key){
      history.push(event.key);
    }
  }

  render(){
    const {mode,menuData} = this.state;
    // const {menuData} = this.props;

    return(
      <div className={Styles.header_wrpper}>
        <Menu
          defaultSelectedKeys={['1']}
          mode={mode}
          // theme={theme}
          style={{'backgroundColor':'#ff9f43'}}
          onClick={this.handleMenuClick}
        >
          {
            menuData.map((item:any) => {
              return (
                <SubMenu key={item.key} title={item.text}>
                  {
                    item.children.length && (
                      <Menu.ItemGroup>
                      {
                        item.children.map((jtem:any)=>{
                        return (
                          <Menu.Item key={jtem.key}>{jtem.text}</Menu.Item>
                        )
                      })
                      }    
                      </Menu.ItemGroup>
                    )
                  }
                </SubMenu>
              )
            })
          }         
        </Menu>
      </div>
    )
  }
}

export default BaseHeader;