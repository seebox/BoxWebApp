'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {
  Panel
} from 'amazeui-react';
import {Fmk} from 'components/Fmk';

export class Welcome extends Component {
  render() {
    return (
      <Panel header="Welcome" style={{
        width: 500,
        margin: 20
      }}>
        <h1>Welcome To This Demo!!!</h1>
      </Panel>
    );
  }
}
