import React, { Component, PropTypes } from 'react';
import TargetPronunciation from './TargetPronunciation';
import TargetJapanese from './TargetJapanese';
import Canvas from '../../Canvas';
import ResetButton from './ResetButton';
import NextButton from './NextButton';

const styles = {
  targetPronunciationContainer: {
    width: '100vw',
    height: '10vh',
  },
  targetJapaneseContainer: {
    width: '100vw',
    height: '30vh',
  },
  drawingCanvasContainer: {
    width: '100vw',
    height: '40vh',
  },
  canvas: {
    height: '100%',
    width: '100%',
  },
  buttonsContainer: {
    width: '100vw',
    height: '20vh',
    display: 'flex',
  },
};

export default class TraceAndWritePage extends Component {
  render() {
    const {
      targetPronunciation,
      targetJapanese,
      next,
      reset,
    } = this.props;
    return (
      <div>
        <div style={styles.targetPronunciationContainer}>
          <TargetPronunciation
            targetPronunciation={targetPronunciation}
          />
        </div>
        <div style={styles.targetJapaneseContainer}>
          <TargetJapanese
            targetJapanese={targetJapanese}
          />
        </div>
        <div style={styles.drawingCanvasContainer}>
          <Canvas
              style={styles.canvas}
          />
        </div>
        <div style={styles.buttonsContainer}>
          <ResetButton onClick={next} />
          <NextButton onClick={reset} />
        </div>
      </div>
    );
  }
}

TraceAndWritePage.propTypes = {
  targetPronunciation: PropTypes.string,
  targetJapanese: PropTypes.string,
  next: PropTypes.func,
  reset: PropTypes.func,
};
