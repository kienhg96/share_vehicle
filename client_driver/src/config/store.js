import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import {
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const navMiddleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.nav,
);

const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, {}, 
		applyMiddleware(thunk, navMiddleware));
