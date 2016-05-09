import React from 'react';
import classNames from 'classnames';

const Table = React.createClass({
  propTypes: {
    striped: React.PropTypes.bool,
    bordered: React.PropTypes.bool,
    condensed: React.PropTypes.bool,
    hover: React.PropTypes.bool,
    responsive: React.PropTypes.bool,
    inverse: React.PropTypes.bool,
    reflow: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      bordered: false,
      condensed: false,
      hover: false,
      responsive: false,
      striped: false,
      inverse: false,
      reflow: false,
    };
  },

  render() {
    let classes = {
      'table': true,
      'table-striped': this.props.striped,
      'table-bordered': this.props.bordered,
      'table-condensed': this.props.condensed,
      'table-hover': this.props.hover,
      'table-responsive': this.props.responsive,
      'table-inverse': this.props.inverse,
      'table-reflow': this.props.reflow,
    };
    return (
      <table {...this.props} className={classNames(this.props.className, classes)}>
        {this.props.children}
      </table>
    );
  }
});

export default Table;
