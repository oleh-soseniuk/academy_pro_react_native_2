import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Tabs from './views/Tabs';
import store from './createStore';

class MathApp extends Component {
	render(){
		return (
        <Provider store={store}>
          <Tabs/>
        </Provider>
		  );
	}
}

export default MathApp;