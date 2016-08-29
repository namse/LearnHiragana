import { connect } from 'react-redux';
import TraceAndWritePage from './components/index.js';

import {
  next,
  reset,
} from './actions';


function mapStateToProps(state, ownProps) {
  return state.traceAndWritePage;
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    next: () => dispatch(next),
    reset: () => dispatch(reset),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TraceAndWritePage);
