import React, { Component, Fragment } from 'react';
import LoginBar from './components/LoginBar';
import BaseMap from './components/BaseMap';
export default class index extends Component {
  render() {
    return (
      <Fragment>
        <LoginBar />
        <BaseMap />
      </Fragment>
    );
  }
}
