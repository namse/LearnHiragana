import React from 'react';

const styles = {
  text: {
    height: '100%',
    width: '100%',
    'text-align': 'center',
    'font-size': '15vh',
    'line-height': '30vh',
  },
};

export default class TargetJapanese extends React.Component {
  render() {
    const {
      targetJapanese,
    } = this.props;
    return (
      <div style={styles.text}>{targetJapanese}</div>
    );
  }
}
