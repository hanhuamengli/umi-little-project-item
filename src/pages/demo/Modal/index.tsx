import React from 'react';

import ModalDemo from '@/components/ModalDemo';
class Hello extends React.Component<any,any>{
  constructor(props:any){
    super(props);

    this.state={
      visible: false,
      title: 'This is Title',
      children: 'children',
    }
  }
  showModal = ()=>{
    this.setState({
      visible: true
    });
  }
  handleCancle = ()=>{
    this.setState({
      visible:false,
    })
    console.log('cancle...');
  }
  handleConfirm = ()=>{
    this.setState({
      visible:false,
    })
    console.log('confirm...');
  }
  maskClick = ()=>{
    this.setState({
      visible:false,
    })
    console.log('mask...');
  }
  render(){
    const {visible,title,children} = this.state;
    return(
      <div>
        <button onClick={this.showModal}>点击弹框</button>
        <ModalDemo
          visible={visible}
          title={title}
          //children={children}
          handleCancle={this.handleCancle}
          handleConfirm={this.handleConfirm}
          maskClick={this.maskClick}
        >
          <p>hhhh</p>
          <p>hhhhh</p>
        </ModalDemo>
      </div>
    )
  }
}

export default Hello;