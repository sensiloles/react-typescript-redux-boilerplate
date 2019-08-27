import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../../actions';
import { Store, ActionProps } from '../../types';

const Counter = (props: ActionProps & Store) => {
  const { increaseCount, decreaseCount, counter } = props;

  return (
    <div className="counter">
      <button onClick={decreaseCount} type="button">
        -
      </button>
      <div className="count">{counter}</div>
      <button onClick={increaseCount} type="button">
        +
      </button>
    </div>
  );
};

const mapStateToProps = (store: Store) => {
  return {
    counter: store.counter
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): ActionProps => ({
  increaseCount: () => dispatch(increaseCount()),
  decreaseCount: () => dispatch(decreaseCount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
