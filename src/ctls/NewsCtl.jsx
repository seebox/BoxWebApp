'use strict';
import React from 'react';
import {FmkCtl} from 'components/FmkCtl';
import {Fmk} from 'components/Fmk';

import {News} from 'pages/News';
import {NewsStore} from 'stores/NewsStore';
import {CounterStore} from 'stores/CounterStore';

export class NewsCtl extends FmkCtl {
  getStores() {
    return {news: Fmk.store(NewsStore), counter: Fmk.store(CounterStore)};
  }

  onShow() {
    Fmk.act({type: 'news$enter'});
  }

  onExit() {}

  render() {
    return (<News counter={this.state.counter} news={this.state.news}/>);
  }

  $news_changed(newsStore) {
    this.setState(function(previousState, currentProps) {
      return {news: newsStore.getState()};
    });
  }

  $counter_changed(counterStore) {
    this.setState(function(previousState, currentProps) {
      return {counter: counterStore.getState()};
    });
  }
}
