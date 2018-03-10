import { NavigationActions } from 'react-navigation';
const { navigate, back } = NavigationActions;

export const gotoCustomLogin = () => navigate({ routeName: 'Login' });
export const goBack = back;
export const gotoForgotPassword = () => navigate({ routeName: 'ForgotPassword' });
export const gotoSignup = () => navigate({ routeName: 'Signup' });
export const gotoHome = () => navigate({ routeName: 'Home' });
