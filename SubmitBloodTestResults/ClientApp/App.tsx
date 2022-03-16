import React from 'react';
import SubmitBloodTestResult from './src/Pages/SubmitBloodTestResult';
import {Provider} from 'react-redux';
import { store } from './src/Redux';

const App = () => {
  return (
    <Provider store={store}>
      <SubmitBloodTestResult/>
    </Provider>
  );
};


export default App;
