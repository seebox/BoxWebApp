'use strict';
import {
  FmkStore
} from 'components/FmkStore';
import {
  Fmk
} from 'components/Fmk';
import request from 'superagent/lib/client';

export class NewsStore extends FmkStore {
  getInitialState() {
    return {
      picture2: 'images/loading.gif'
    };
  }

  $$(startingState, action) {
    request
      .get('/dsapi/')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        this.changeState(JSON.parse(res.text));
      }.bind(this));
  }
}
