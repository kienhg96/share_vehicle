import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import Login from '../containers/Login';
import ChooseLoginTypes from '../containers/ChooseLoginTypes';
import ForgotPassword from '../containers/ForgotPassword';
import VerifyForgotPassword from '../containers/VerifyForgotPassword';
import Signup from '../containers/Signup';
import Home from '../containers/Home';

const Navigator = StackNavigator({
	Login: {
		screen: Login
	},
	ChooseLoginTypes: {
		screen: ChooseLoginTypes
	},
	ForgotPassword: {
		screen: ForgotPassword
	},
	VerifyForgotPassword: {
		screen: VerifyForgotPassword
	},
	Signup: {
		screen: Signup
	},
	Home: {
		screen: Home
	}
}, {
	headerMode: 'none'
});

Navigator.DefaultScreen = 'ChooseLoginTypes';

export default Navigator;
