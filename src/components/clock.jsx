'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {Panel, Icon} from 'amazeui-react';
import {FmkCtl} from 'components/FmkCtl';
import {Fmk} from 'components/Fmk';
import {FmkStore} from 'components/FmkStore';
var moment = require('moment');

class Clock extends Component {
  render() {
    var panelHeader = (
      <Icon icon="clock-o">当前时间</Icon>
    );
    return (
      <Panel header={panelHeader} style={this.props.style}>
        <h1>{this.props.clock.time}</h1>
        <p>
          {this.props.children}
        </p>
      </Panel>
    );
  }
}

class ClockStore extends FmkStore {
  getInitialState() {
    console.log('ClockStore getInitialState');
    return {time: moment().format('YYYY-MM-DD HH:mm:ss'), id: null};
  }

  start = () => {
    let id = setInterval(() => {
      let ns = this.getState();
      ns.time = moment().format('YYYY-MM-DD HH:mm:ss');
      this.changeState(ns);
    }, 1000);
    this.getState().id = id;
    console.log('clock started.');
  }

  end = () => {
    clearInterval(this.getState().id);
    console.log('clock stopped.');
  }
}

export class ClockCtl extends FmkCtl {
  bindStoreEvent(binder) {
    this.clock = Fmk.store(ClockStore);
    binder('clock', this.clock);
  }

  onShow() {
    this.clock.start();
  }

  onExit() {
    this.clock.end();
  }

  render() {
    if(this.state.clock === undefined){
      console.log('this.state.clock!!!!undefined!!!!!!');
    }
    return (
      <Clock clock={this.state.clock} style={this.props.style}>{this.props.children}</Clock>
    );
  }
}
