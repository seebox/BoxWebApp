'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {
  Panel
} from 'amazeui-react';
import {Fmk} from 'components/Fmk';
import {ClockCtl} from 'components/clock';

export default class Welcome extends Component {
  render() {
    return (
      <Panel header="Welcome" style={{
        width: 500,
        margin: 20
      }}>
        <h1>Welcome To This Demo!!!</h1>
        <ClockCtl style={{width:'99%',padding:10}}>这个是一个独立控件演示，异步执行的组件，请参考components/clock.jsx。</ClockCtl>
      </Panel>
    );
  }
}
