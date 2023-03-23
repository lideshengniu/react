import React, { Component } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import styles from './index.less';
import * as Cesium from 'cesium';
export default class index extends Component {
  render() {
    return <div className={styles.zoomBox} />;
  }
}
