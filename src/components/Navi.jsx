'use strict';
import {browserHistory, hashHistory} from 'react-router';

export class Navi {
  static path(path){
    Navi.history.push(path);
  }

  static go(n){
    Navi.history.go(n);
  }

  static get history(){
    return hashHistory;
  }
}
