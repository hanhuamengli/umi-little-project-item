//注意 导入模块顺序 node模块(fs等)
// 外部模块(lodash等)
// 全局模块
// 父目录模块
// 当前目录模块
import React from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider,Layout } from 'antd';
import menuData from './../menuData';
import BaseHeader from './BaseHeader';
const { Header, Footer, Content } = Layout;
/**
 * /layouts/index 会默认作为所有页面的容器
 */
const bgc_style ={
  backgroundColor: '#ff9f43',
  height: '65px',
}
export default function (props:any){
  return(
    // antd配置
  <ConfigProvider locale={zhCN}>
    {/* 全局多级菜单布局 */}
      <Layout>
        <Header style={bgc_style}>
          <BaseHeader menuData={menuData}></BaseHeader>
        </Header>
        <Content>{props.children}</Content>  
        {/* <Footer>Footer</Footer> */}
      </Layout>
  </ConfigProvider>
  )
}
