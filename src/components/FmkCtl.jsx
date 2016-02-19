import React, {Component} from 'react';
import {Fmk} from 'components/Fmk';

export class FmkCtl extends Component {

  constructor(props) {
    super(props);
    this.initialState=this.initialState.bind(this);
    if(this.onShow){
      this.onShow=this.onShow.bind(this);
    }
  }

  initialState() {
    let state = {};
    for (let k in this.stores) {
      state[k] = this.stores[k].getInitialState();
    }
    return state;
  }

  componentDidMount() {
    if (typeof this.getStores === "function") {
      this.stores = this.getStores();
    } else {
      throw new TypeError("Controller Class [" + this.constructor.name + "] Must override method: getStores(){...}");
    }
    this.state = this.initialState();
    if (this.stores) {
      this.listeners = [];
      for (let k in this.stores) {
        let fn = '$' + k + '_changed';
        if (typeof this[fn] === 'function') {
          this[fn] = this[fn].bind(this, this.stores[k]);
          this.listeners.push(this.stores[k].addListener(this[fn]));
        }
      }
    }
    if (typeof this.onShow === "function") {
      this.onShow();
    }
  }

  componentWillUnmount() {
    if (this.stores) {
      for (let k in this.listeners) {
        this.listeners[k].remove();
      }
      this.listeners = null;
      this.stores = null;
    }
    if (typeof this.onExit === "function") {
      this.onExit();
    }
  }
}

FmkCtl.prototype.state = {};
FmkCtl.prototype.props = {};
FmkCtl.prototype.stores = {};
