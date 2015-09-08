import React from 'react';

const styles = {
  display: 'block',
  maxWidth: 'none'
};

export default class Img extends React.Component {
  render () {
    return <img style={styles} {...this.props} />;
  }
}
