const Line = React.createClass({

    propTypes: {
      path:         React.PropTypes.string.isRequired,
      stroke:       React.PropTypes.string,
      fill:         React.PropTypes.string,
      strokeWidth:  React.PropTypes.number
    },
  
    getDefaultProps() {
      return {
        stroke:       'blue',
        fill:         'none',
        strokeWidth:  3
      };
    },
  
    render() {
      let { path, stroke, fill, strokeWidth } = this.props;
      return (
        <path
          d={path}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          />
      );
    }
  
  });