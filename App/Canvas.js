import React from 'react';
import { findDOMNode } from 'react-dom';

const LINE_WIDTH = 10;
const STROKE_STYLE = '#000';
export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.addNewPoint = this.addNewPoint.bind(this);
    this.drawLine = this.drawLine.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.strokes = [];
    this.isPressed = false;
  }

  componentDidMount() {
    this.canvas = findDOMNode(this);
    this.ctx = this.canvas.getContext('2d');
    const {
      width,
      height,
    } = this.canvas.getBoundingClientRect();
    this.canvas.height = height;
    this.canvas.width = width;
  }

  onMouseDown(e) {
    this.isPressed = true;
    this.strokes.push([this.getCursorPosition(e)]);
  }

  onMouseMove(e) {
    if (this.isPressed) {
      const position = this.getCursorPosition(e);
      this.addNewPoint(position);
    }
  }

  onMouseUp() {
    this.isPressed = false;
  }

  getCursorPosition(e) {
    const { top, left } = this.canvas.getBoundingClientRect();
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    return {
      x: clientX - left,
      y: clientY - top,
    };
  }

  addNewPoint(position) {
    const {
      strokes,
    } = this;

    const lastStrokes = strokes[strokes.length - 1];
    if (!lastStrokes) {
      return;
    }

    const prevPosition = lastStrokes[lastStrokes.length - 1];
    if (prevPosition) {
      this.drawLine(prevPosition, position);
    }
    lastStrokes.push(position);
  }

  drawLine(prevPosition, position) {
    const {
      ctx,
    } = this;
    ctx.save();
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.lineWidth = LINE_WIDTH;
    ctx.strokeStyle = STROKE_STYLE;
    ctx.globalCompositeOperation = 'source-over';
    ctx.moveTo(prevPosition.x, prevPosition.y);
    ctx.lineTo(position.x, position.y);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  render() {
    const {
      style,
    } = this.props;

    return (
      <canvas
        style={style}
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseOut={this.onMouseUp}
        onMouseUp={this.onMouseUp}
        onTouchStart={this.onMouseDown}
        onTouchMove={this.onMouseMove}
        onTouchCancel={this.onMouseUp}
      />
    );
  }
}
