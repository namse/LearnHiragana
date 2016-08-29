import React from 'react';

const styles = {
  button: {
    width: '50%',
    height: '100%',
    flex: 1,
    'text-align': 'center',
    'font-size': '10vh',
    'line-height': '20vh',
  },
};

export default class NextButton extends React.Component {
  render() {
    return (
      <div style={styles.button} >next</div>
    );
  }
}
