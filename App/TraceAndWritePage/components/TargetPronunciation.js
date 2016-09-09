import React from 'react';

const styles = {
  text: {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    fontSize: '5vh',
    lineHeight: '10vh',
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
