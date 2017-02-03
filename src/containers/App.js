import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as dataActions from '../actions/dataActions';
import { makeGetData } from '../selectors/testSelectors';

export class App extends Component {

  render() {
    const { data, setData } = this.props;

    return (
      <div>
        <button onClick={() => setData('test')}>Click Me</button>
        <p>{data}</p>
      </div>
    );
  }
}

App.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.string,
};


function makeMapStateToProps () {
  const getData = makeGetData();
  return (state) => ({
    data: getData(state)
  });
}

export default connect(makeMapStateToProps, { ...dataActions })(App);
