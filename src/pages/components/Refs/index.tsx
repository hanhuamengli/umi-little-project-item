import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
//import Styles from './index.less';

class Refs extends React.Component{
  textInput: React.RefObject<any>;
  
  constructor(props:any){
    super(props);
    this.textInput = React.createRef();
  }
  handleClick = ()=>{
    console.log(this.textInput.current.dataset.src);
    this.textInput.current.focus();
  }
  
  render(){
    return(
      <div>
        <input type="text" data-src="https://www.baidu.com" ref={this.textInput}/>
        <input type="button" value="this input" onClick={this.handleClick}/>
      </div>
    )
  }
}

export default Refs;
