'use strict';
import {
  FmkStore
} from 'components/FmkStore';
import {
  Fmk
} from 'components/Fmk';
import request from 'superagent/lib/client';
var moment = require('moment');

export class NewsStore extends FmkStore {
  getInitialState() {
    this.mm = moment();
    return {
      picture2: 'images/loading.gif'
    };
  }

  $$ = (startingState, action) => {
    request
      .get('/dsapi/')
      .query({
        'date': this.mm.format("YYYY-MM-DD")
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        this.changeState(JSON.parse(res.text));
      });
  }

  $news$previous = (startingState, action) => {
    if (this.mm) {
      this.mm.subtract(1, 'days');
      this.$$(startingState, action);
    }
  }

  $news$next = (startingState, action) => {
    if (this.mm && moment().diff(this.mm, 'days') > 0) {
      this.mm.add(1, 'days');
      this.$$(startingState, action);
    }
  }
}
