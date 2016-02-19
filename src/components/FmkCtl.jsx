import React, {Component} from 'react';
import {Fmk} from 'components/Fmk';

export class FmkCtl extends Component {

  constructor(props) {
    super(props);
    if (this.onShow) {
      this.onShow = this.onShow.bind(this);
    }
    this.state = {};
    this.listeners = [];
  }

  componentDidMount() {
    console.log('FmkCtl componentDidMount');
    if (typeof this.bindStoreEvent === "function") {
      this.bindStoreEvent(function(store, listener) {
        if (listener === undefined) {
          listener = function(newStore) {
            this.setState(function(previousState, currentProps) {
              let newState = {};
              newState[newStore.constructor.name] = newStore.getState();
              return newState;
            });
          }.bind(this);
        }
        listener = listener.bind(this, store);
        this.listeners.push(store.addListener(listener));
        this.state[store.constructor.name] = store.getInitialState();
      }.bind(this));
    } else {
      throw new TypeError("Controller Class [" + this.constructor.name + "] Must override method: bindStoreEvent(binder){...}");
    }

    if (typeof this.onShow === "function") {
      this.onShow();
    }
  }

  componentWillUnmount() {
    if (this.listeners) {
      for (let k in this.listeners) {
        this.listeners[k].remove();
      }
      this.listeners = null;
    }
    if (typeof this.onExit === "function") {
      this.onExit();
    }
  }
}

FmkCtl.prototype.state = {};
FmkCtl.prototype.props = {};
FmkCtl.prototype.listeners = [];
