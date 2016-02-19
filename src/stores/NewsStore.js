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

  $news$enter(state, action) {
    this.loadNews();
    return state;
  }

  loadNews() {
    request
      .get('/dsapi/')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        this.changeState(JSON.parse(res.text));
      }.bind(this));
  }
}
