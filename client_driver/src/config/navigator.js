import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import Login from '../containers/Login';
import ChooseLoginTypes from '../containers/ChooseLoginTypes';
import ForgotPassword from '../containers/ForgotPassword';
import VerifyForgotPassword from '../containers/VerifyForgotPassword';
import Signup from '../containers/Signup';
import Home from '../containers/Home';
import Trips from '../containers/Trips';
import Wallet from '../containers/Wallet';
import Notifications from '../containers/Notifications';
import Settings from '../containers/Settings';
import Helps from '../containers/Helps';
import TripDetail from '../containers/TripDetail';

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
	},
	Trips: {
		screen: Trips
	},
	Wallet: {
		screen: Wallet
	},
	Notifications: {
		screen: Notifications
	},
	Settings: {
		screen: Settings
	},
	Helps: {
		screen: Helps
	},
	TripDetail: {
		screen: TripDetail
	}
}, {
	headerMode: 'none'
});

Navigator.DefaultScreen = 'Home';

export default Navigator;
