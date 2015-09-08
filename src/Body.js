import React from 'react';

function styles (props) {
  return Object.assign(
    {},
    {
      width: '100%',
      display: 'table-cell',
      verticalAlign: 'middle'
    },
    props.top && { verticalAlign: 'top' },
    props.bottom && { verticalAlign: 'bottom' }
  );
}

export default class Body extends React.Component {
  render () {
    return <div style={styles(this.props)} {...this.props} />;
  }
}
