import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Home from '../../views/Home';
import { makeSelectClickCounter } from './ClickCounter';
import { incrementAction } from './ClickCounter';
import { decrementAction } from './ClickCounter';
import { useInjectReducer } from '../../utils/injectReducer';

import reducer from './ClickCounter';

const key = 'clickCounter';

function ClickCounter(props) {
  useInjectReducer({ key, reducer });

  return (<Home {...props} />);
}

const mapStateToProps = createStructuredSelector({
    counter: makeSelectClickCounter(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
      onIncrement: () => dispatch(incrementAction()),
      onDecrement: () => dispatch(decrementAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(ClickCounter);

