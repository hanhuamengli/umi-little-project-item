import React from 'react';
import {Select,Tooltip} from 'antd';
import Styles from './index.less';


class SelectDemo extends React.Component{

  onSearch = (val:any)=>{
    console.log(val);
  }
  onChange = (val:any)=>{
    console.log(val);
    console.log(JSON.parse(val.key))
  }
  render(){
    return(
      <div className={Styles.select_wrapper}>
        <Select
          style={{ width: 200 }}
          showSearch
          placeholder="Select a person"
          labelInValue={true}
          optionLabelProp="label"
          //optionFilterProp="children"
          onSearch={this.onSearch}
          onChange= {this.onChange}      
        >
          <Select.Option value={JSON.stringify({scope:'0',item:'haha'})} label="China" key="1">  
            <div className={Styles.demo_option_label_item}>
              <span className={Styles.demo_option_label_value} role="img" aria-label="China">
                <Tooltip title="China"  overlayStyle={{fontSize:"12px"}}>
                  China
                </Tooltip>
              </span>
              <span className={Styles.demo_option_label_span}>中国</span>
            </div>     
          </Select.Option>
        </Select>
      </div>
    )
  }
}

export default SelectDemo;