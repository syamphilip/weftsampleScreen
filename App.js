import React from 'react';

import {Provider} from 'react-redux';
import store from './Source/Redux/Redux';

import Route from './Source/Route';

const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;
