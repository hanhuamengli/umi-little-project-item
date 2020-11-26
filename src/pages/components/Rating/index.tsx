import React from 'react';
import Styles from './index.less';
class Rating extends React.Component{

  constructor(props:any){
    super(props);
  }

  getScore=(event:any)=>{

    console.log(event.target.dataset.score);
  }
  render(){

    return(
      <div className={Styles.box}>
        {
          [1,2,3,4,5].map((item)=>  
          <div className={Styles.rating_wrapper} data-score={item} key={item} onClick={this.getScore}></div>
          )
        }  
      </div>
    )
  }
}

export default Rating;