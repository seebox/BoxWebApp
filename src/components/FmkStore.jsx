'use strict';
import {ReduceStore, Store} from 'flux/utils';
import {Fmk} from 'components/Fmk';
let binded = false;
export class FmkStore extends ReduceStore {
  constructor(dispatcher) {
    super(dispatcher);
    if (typeof this.getInitialState !== "function") {
      throw new TypeError("Store Class [" + this.constructor.name + "] Must override method: getInitialState(){...}");
    }
  }

  changeState(newState) {
    this._state = newState;
    if (!this.getDispatcher().isDispatching()) {
      this.__emitter.emit(this.__changeEvent);
    }
  }

  //响应action，执行数据操作
  reduce(startingState, action) {
    if(!binded){
      this.changeState = this.changeState.bind(this);
    }

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
