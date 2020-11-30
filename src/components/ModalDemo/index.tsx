import React from 'react';
import Styles from './index.less';
import NewProtal from './components/NewProtal';

class ModalDemo extends React.Component<any,any>{
  
  constructor(props:any){
    super(props)
    this.state={
      visible: false,
    }
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

  componentDidMount(){
    this.setState({
      visible: this.props.visible,
    })
  }

  componentDidUpdate(prevProps: { visible: Boolean; }){
    console.log(this.props.visible);
    console.log(prevProps.visible);
    if(this.props.visible !== prevProps.visible){
      this.setState({
        visible: this.props.visible,
      })
    }
  }
  
  render(){
    const {title,children} = this.props;
    const {visible} = this.state;
    return(
    <NewProtal>
      <div className={Styles.modal_wrapper}>
        {
          visible && 
          <><div className={Styles.modal}>
              <div className={Styles.modal_title}>{title}</div>
              <div className={Styles.modal_content}>
                {children}
              </div>
              <div className={Styles.modal_operator}>
                <button className={Styles.modal_operator_close} onClick={this.handleCancle}>取消</button>
                <button className={Styles.modal_operator_confirm} onClick={this.handleConfirm}>确认</button>
              </div>
            </div>
              <div className={Styles.mask} onClick={this.maskClick}></div></>
        }
        
      </div>
    </NewProtal>
    )
  }
}

export default ModalDemo;