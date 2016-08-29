import React from 'react';

const styles = {
  text: {
    height: '100%',
    width: '100%',
    'text-align': 'center',
    'font-size': '5vh',
    'line-height': '10vh',
  },
};

export default class TargetPronunciation extends React.Component {
  render() {
    const {
      targetPronunciation,
    } = this.props;
    return (
      <div style={styles.text} >{targetPronunciation}</div>
    );
  }
}
