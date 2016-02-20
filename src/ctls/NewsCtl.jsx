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
    Fmk.act();
  }

  onExit() {}

  render() {
    return (<News cheatHandler={this.cheatHandler} cheatEnabled={this.state.cheatEnabled} counter={this.state.counter} news={this.state.news} handlePrevious={this.handlePrevious} handleNext={this.handleNext}/>);
  }

  bindStoreEvent(binder) {
    binder('news', Fmk.store(NewsStore));
    binder('counter', Fmk.store(CounterStore));
  }

  handlePrevious = (e) => {
    Fmk.act({type: 'news$previous'});
  }

  handleNext = (e) => {
    Fmk.act({type: 'news$next'});
  }

  cheatHandler = (e) => {
    if (e.target.type === 'checkbox') {
      this.setState({cheatEnabled: e.target.checked});
    } else if (e.target.type === 'text') {
      let n = Number.parseInt(e.target.value);
      if (n) {
        Fmk.act({type: 'news$cheat', times: n});
      }
    }
  }
}
