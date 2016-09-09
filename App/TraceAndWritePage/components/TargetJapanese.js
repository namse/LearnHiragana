import React from 'react';

const styles = {
  text: {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    fontSize: '15vh',
    lineHeight: '30vh',
  },
};

export default class TargetJapanese extends React.Component {
  render() {
    const {
      targetJapanese,
    } = this.props;
    const imageURI = `Data/withBackground/${targetJapanese}.gif`;
    return (
      <div style={styles.text}>
        <img src={imageURI} alt={targetJapanese} />
      </div>
    );
  }
}
