import 'AppCss';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import {Fmk} from 'components/Fmk';

import {AppCtl} from 'ctls/AppCtl';
import {Welcome} from 'pages/Welcome';
import {NewsCtl} from 'ctls/NewsCtl';
import {About} from 'pages/About';
import {ControlStatement} from 'pages/ControlStatement';

render((
  <Router history={Fmk.navi.history}>
    <Route path="/" component={AppCtl}>
      <IndexRoute component={Welcome}/>
      <Route path="news" component={NewsCtl}/>
      <Route path="about" component={About}/>
      <Route path="control_statement" component={ControlStatement}/>
      <Route path="*" component={Welcome}/>
    </Route>
  </Router>
), document.getElementById('app'));
