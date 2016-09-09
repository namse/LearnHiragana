import React from 'react';

const styles = {
  button: {
    width: '50%',
    height: '100%',
    flex: 1,
    textAlign: 'center',
    fontSize: '10vh',
    lineHeight: '20vh',
  },
};

export default class ResetButton extends React.Component {
  render() {
    return (
      <div style={styles.button} >reset</div>
    );
  }
}
