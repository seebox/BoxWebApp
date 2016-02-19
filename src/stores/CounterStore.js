'use strict';
import {
  FmkStore
} from 'components/FmkStore';
import {
  Fmk
} from 'components/Fmk';
import request from 'superagent/lib/client';

export class CounterStore extends FmkStore {
  getInitialState() {
    return {
      count: 0
    };
  }

  $news$enter(state, action) {
    state.count++;
    return state;
  }

  $news$cheat(state, action) {
    state.count = state.count * action.times;
    return state;
  }
}
