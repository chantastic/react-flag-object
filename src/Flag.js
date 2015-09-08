import React from 'react';

const styles = {
  display: 'table',
  width: '100%'
};

export default class Flag extends React.Component {
  render () {
    return <div style={styles} {...this.props} />;
  }
}
