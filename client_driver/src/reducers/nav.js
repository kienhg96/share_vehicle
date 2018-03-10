import Navigator from '../config/navigator';

const initialState = Navigator.router.getStateForAction(
	Navigator.router.getActionForPathAndParams(Navigator.DefaultScreen));

const navReducer = (state = initialState, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;
