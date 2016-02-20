'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {Icon, Panel, AvgGrid, Button} from 'amazeui-react';
import {Fmk} from 'components/Fmk';

export class News extends Component {
  render() {
    var footer = (
      <div style={{
        textAlign: 'right'
      }}>
        <Icon icon="heart">{this.props.news.love}</Icon>
      </div>
    );
    var header = (
      <AvgGrid sm={4}>
        <li><Button amStyle="secondary" amSize="xs" onClick={this.props.handlePrevious}><Icon icon="angle-double-left"></Icon>前一天</Button></li>
        <li>
          <Icon icon="newspaper-o">{this.props.news.caption}</Icon>
        </li>
        <li style={{
          textAlign: 'right'
        }}>{this.props.news.dateline}</li>
      <li style={{
        textAlign: 'right'
      }}><Button amStyle="secondary" amSize="xs" onClick={this.props.handleNext}>后一天<Icon icon="angle-double-right"></Icon></Button></li>
      </AvgGrid>
    );

    return (
      <div style={{
        padding: 20
      }}>
        <blockquote>访问计数器：{this.props.counter.count}</blockquote>
        
        <Panel header={header} footer={footer} style={{
          width: 500,
          margin: 20
        }}>
          <blockquote>
            <p>{this.props.news.content}</p>
            <p>{this.props.news.note}</p>
          </blockquote>
          <img className="am-thumbnail" src={this.props.news.picture2}/>
          <p>
            {this.props.news.translation}
          </p>
        </Panel>
      </div>
    );
  }
}

News.defaultProps = {
  counter: {
    count: 0
  },
  news: {
    picture2: 'images/loading.gif'
  }
};
