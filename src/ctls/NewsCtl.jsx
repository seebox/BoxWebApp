'use strict';
import React from 'react';
import {FmkCtl} from 'components/FmkCtl';
import {Fmk} from 'components/Fmk';

import {News} from 'pages/News';
import {NewsStore} from 'stores/NewsStore';
import {CounterStore} from 'stores/CounterStore';

export class NewsCtl extends FmkCtl {
  onShow() {
    //fire global (re)loading action
    console.log('NewsCtl onShow');
    Fmk.act();
  }

  onExit() {}

  render() {
    return (<News counter={this.state.CounterStore} news={this.state.NewsStore}/>);
  }

  bindStoreEvent(binder) {
    binder(Fmk.store(NewsStore));
    binder(Fmk.store(CounterStore));
    console.log('NewsCtl bindStore');
  }

  // news_changed(newsStore) {
  //   this.setState(function(previousState, currentProps) {
  //     return {news: newsStore.getState()};
  //   });
  // }
  //
  // counter_changed(counterStore) {
  //   this.setState(function(previousState, currentProps) {
  //     return {counter: counterStore.getState()};
  //   });
  // }
}
