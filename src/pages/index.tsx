import React from 'react';
import styles from './index.less';
import Refs from './components/Refs';
import SelectDemo from './components/SelectDemo';
import UploadDemo from './components/UploadDemo';


export default () => {
  
  return (
    <div>
      <Refs></Refs>
      <SelectDemo></SelectDemo>
      <UploadDemo></UploadDemo>
    </div>
  );
}
