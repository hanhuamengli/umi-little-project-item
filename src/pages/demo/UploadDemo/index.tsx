import React from 'react';
import {Upload,message,Button} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './index.less';

interface changeDemo{
  (info: object): void
}
interface PropsDemo{
  name: string,
  action: string,
  headers: object,
  onChange: changeDemo
}
// let onChange :changeDemo;
const props:PropsDemo = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info:any) {
    console.log(info);
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class UploadDemo extends React.Component{
  constructor(props:any){
    super(props);
  }
  render(){
    return(
      <div className="upload_wrapper">
        <div className="upload_box">
          <Upload {...this.props}>
            <Button icon={<UploadOutlined />}>点击上传</Button>
          </Upload>
        </div>  
      </div>     
    )
  }
}

export default UploadDemo;