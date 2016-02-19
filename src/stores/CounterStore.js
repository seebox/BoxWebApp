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

  $$(startingState, action) {
    startingState.count++;
    return startingState;
  }

  $news$cheat(startingState, action) {
    startingState.count = startingState.count * action.times;
    return startingState;
  }
}
