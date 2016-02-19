'use strict';
import {Dispatcher} from 'flux';
import {EventEmitter} from 'fbemitter';
import {Navi} from 'components/Navi';

const _dispatcher = new Dispatcher();

//For IE9 supporting
if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
  Object.defineProperty(Function.prototype, 'name', {
    get: function() {
      var funcNameRegex = /function\s+([^\s(]+)\s*\(/;
      var results = (funcNameRegex).exec((this).toString());
      return ((results && results.length > 1)? results[1]: "");
    },
    set: function(value) {}
  });
}

export class Fmk {
  static get navi() {
    return Navi;
  }

  static get dispatcher() {
    return _dispatcher;
  }

  static act(action = {
    type: '$'
  }) {
    _dispatcher.dispatch(action);
  }

  static iehack(store) {
    if (!store.__emitter) {
      store.__className = store.constructor.name;
      store.__changed = false;
      store.__changeEvent = 'change';
      store.__dispatcher = _dispatcher;
      store.__emitter = new EventEmitter();
      store._dispatchToken = _dispatcher.register(function(payload) {
        store.__invokeOnDispatch(payload);
      });
      store._state = store.getInitialState();
      store._iehacked = true;
    } else {
      store._iehacked = false;
    }
    return store;
  }

  static store(storeClass, singleton = true) {
    if (singleton) {
      if (storeClass.singletonInstance === undefined || storeClass.singletonInstance === null) {
        let sto = Fmk.iehack(new storeClass(_dispatcher));
        sto._isSingleton = true;
        storeClass.singletonInstance = sto;
      }
      return storeClass.singletonInstance;
    } else {
      let sto = Fmk.iehack(new storeClass(_dispatcher));
      sto._isSingleton = false;
      return sto;
    }
  }
}
