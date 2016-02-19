'use strict';
import React, {Component} from 'react';
import {Fmk} from 'components/Fmk';
import {FmkCtl} from 'components/FmkCtl';
import {App} from 'pages/App';

export class AppCtl extends FmkCtl {
  bindStoreEvent(binder) {}

  iconClick(nav, e) {
    e.preventDefault();
    console.log('你点击了', nav);
    if (nav.path) {
      Fmk.navi.path(nav.path);
    }
  }

  render() {
    return (<App iconClick={this.iconClick} content={this.props.children}/>);
  }
}
