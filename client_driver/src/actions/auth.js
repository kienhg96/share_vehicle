import { gotoHome } from './navigate';

export const login = (username, password) => dispatch => {
	console.log("Login", username, password);
	dispatch(gotoHome());
}

export const forgotPassword = email => dispatch => {
	console.log("Forgot password", email);
}

export const signup = values => dispatch => {
	console.log("signup", values);
}
