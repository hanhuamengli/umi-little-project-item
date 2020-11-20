import React from 'react';
import Styles from './index.less';

class ModalDemo extends React.Component<any,any>{
  
  constructor(props:any){
    super(props)
  }

  handleCancle = ()=>{
    const {handleCancle} = this.props;
    handleCancle&&handleCancle();
  }
  handleConfirm = ()=>{
    const {handleConfirm} = this.props;
    handleConfirm&&handleConfirm();
  }

  maskClick = ()=>{
    const {maskClick} = this.props;
    maskClick&&maskClick();
  }

  render(){
    const {title,children,visible} = this.props;
    return(
      visible && 
      <div className={Styles.modal_wrapper}>
        <div className={Styles.modal}>
          <div className={Styles.modal_title}>{title}</div>
          <div className={Styles.modal_content}>
            {children}
          </div>
          <div className={Styles.modal_operator}>
            <button className={Styles.modal_operator_close} onClick={this.handleCancle}>取消</button>
            <button className={Styles.modal_operator_confirm} onClick={this.handleConfirm}>确认</button>
          </div>
        </div>
        <div className={Styles.mask} onClick={this.maskClick}></div>
      </div>
      
    )
  }
}

export default ModalDemo;