import React from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
import  styles from './index.less';
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
    return(
      <div className={styles.header_wrapper}>
        <div className={styles.header_box}>
          <Menu
            defaultSelectedKeys={['1']}
            mode={mode}
            // theme={theme}
            style={{'backgroundColor':'#f5b274','height':'56px','lineHeight':'56px','fontSize':'14px'}}
            onClick={this.handleMenuClick}
          >
            {
              menuData.map((item:any) => {
                return (
                  <SubMenu key={item.key} title={item.text} popupClassName={styles.pop_menu}>
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
      </div>
    )
  }
}

export default BaseHeader;