import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const middleware = [];
const store = compose(
	applyMiddleware(...middleware)
)(createStore)(reducers);

export default store;