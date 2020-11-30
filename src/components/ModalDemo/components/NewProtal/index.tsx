import React from 'react';
import ReactDOM from 'react-dom';

class NewProtal extends React.Component<any,any>{
  node: HTMLDivElement;
  constructor(props:any){
    super(props);
    this.node = document.createElement('div');
    document.body.appendChild(this.node);
  }

  render(){
    // const {visible,children} = this.props;
    const {children} = this.props;
    return(
      // visible && ReactDOM.createPortal(
      //   children,
      //   this.node,
      // )
      ReactDOM.createPortal(
        children,
        this.node,
      )
    )
  }
}

export default NewProtal;