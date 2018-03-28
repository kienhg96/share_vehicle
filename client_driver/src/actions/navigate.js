import { NavigationActions } from 'react-navigation';
const { navigate, back, reset } = NavigationActions;

export const gotoCustomLogin = () => navigate({ routeName: 'Login' });
export const goBack = back;
export const gotoForgotPassword = () => navigate({ routeName: 'ForgotPassword' });
export const gotoSignup = () => navigate({ routeName: 'Signup' });
export const gotoHome = () => reset({
	index: 0,
	actions: [
		navigate({ routeName: 'Home' })
	]
});

export const gotoTrips = () => navigate({ routeName: 'Trips' });
export const gotoWallet = () => navigate({ routeName: 'Wallet' });
export const gotoNotifications = () => navigate({ routeName: 'Notifications' });
export const gotoSettings = () => navigate({ routeName: 'Settings' });
export const gotoHelps = () => navigate({ routeName: 'Helps' });
