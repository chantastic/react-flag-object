import React from 'react';

function styles (props) {
  return Object.assign(
    {},
    {
      display: 'table-cell',
      verticalAlign: 'middle',
      paddingRight: 10
    },
    props.reverse && {
      paddingRight: 0,
      paddingLeft: 10
    },
    props.top && { verticalAlign: 'top' },
    props.bottom && { verticalAlign: 'bottom' }
  );
}

export default class Image extends React.Component {
  render () {
    return <div style={styles(this.props)} {...this.props} />;
  }
}
