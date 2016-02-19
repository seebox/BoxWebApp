'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {
  Grid,
  Col,
  List,
  ListItem,
  Header,
  Icon
} from 'amazeui-react';

export class App extends Component {

  render() {
    var headerProps = {
      title: 'BoxWebApp Demo',
      link: '#title-link',
      data: {
        left: [
          {
            path: '/',
            link: '#',
            icon: 'home'
          }
        ],
        right: [
          {
            path: 'news',
            link: '#',
            icon: 'calendar'
          }
        ]
      },
      onSelect: this.props.iconClick
    };

    return (
      <div>
        <Header {...headerProps}/>
        <Grid>
          <Col sm={2}>
            <List>
              <ListItem>
                <Link to={'news'}><Icon icon="calendar"/>
                  每日一句</Link>
              </ListItem>
              <ListItem>
                <Link to={'about'}><Icon icon="lightbulb-o"/>
                  关于Demo</Link>
              </ListItem>
            </List>
          </Col>
          <Col sm={10}>{this.props.content}</Col>
        </Grid>
      </div>
    );
  }
}
