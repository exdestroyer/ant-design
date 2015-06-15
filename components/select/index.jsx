'use strict';

var React = require('react');
var Select = require('rc-select');

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      prefixCls: 'ant-select',
      transitionName: 'slide-up'
    };
  },
  render: function () {
    return (
      <Select {...this.props} />
    );
  }
});