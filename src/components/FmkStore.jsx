'use strict';
import {ReduceStore, Store} from 'flux/utils';
import {Fmk} from 'components/Fmk';

export class FmkStore extends ReduceStore {
  constructor(dispatcher) {
    super(dispatcher);
    if (typeof this.getInitialState !== "function") {
      throw new TypeError("Store Class [" + this.constructor.name + "] Must override method: getInitialState(){...}");
    }
    // if (typeof this.onAction !== "function") {
    //   throw new TypeError("Store Class [" + this.constructor.name + "] Must override method: onAction(startingState, action){...}");
    // }
    this.changeState = this.changeState.bind(this);
    this.reduce = this.reduce.bind(this);
    // this.onAction = this.onAction.bind(this);
  }

  changeState(newState) {
    this._state = newState;
    if (!this.getDispatcher().isDispatching()) {
      this.__emitter.emit(this.__changeEvent);
    }
  }

  //响应action，执行数据操作
  reduce(startingState, action) {
    if (typeof this['$' + action.type] === 'function') {
      let endingState = this['$' + action.type](startingState, action);
      if (endingState !== undefined) {
        return {
          ...endingState
        };
      }
    }
    return startingState;
  }
}
