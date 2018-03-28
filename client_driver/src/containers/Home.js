import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Icon, Toast } from 'native-base';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import DrawerLayout from 'react-native-drawer-layout';
import HomeDrawer from '../components/HomeDrawer';
import KeepAwake from 'react-native-keep-awake';
import {
	gotoTrips,
	gotoWallet,
	gotoNotifications,
	gotoHelps,
	gotoSettings
} from '../actions/navigate';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: 37.78825,
			lng: -122.4324
		}
		this.handleBtnMenuPress = this.handleBtnMenuPress.bind(this);
		this.handleMenuPress = this.handleMenuPress.bind(this);
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(coord => this.setState({
			lat: coord.coords.latitude,
			lng: coord.coords.longitude
		}));
	}

	handleBtnMenuPress() {
		this.drawer.openDrawer();
	}

	handleMenuPress(cmd) {
		// this.drawer.closeDrawer();
		switch (cmd) {
			case 'trips':
				this.props.gotoTrips();
				break;
			case 'wallet':
				this.props.gotoWallet();
				break;
			case 'notifications':
				this.props.gotoNotifications();
				break;
			case 'helps':
				this.props.gotoHelps();
				break;
			case 'settings':
				this.props.gotoSettings();
				break;
			default:
				Toast.show({
					text: "Unhandled",
					position: 'bottom',
					buttonText: 'Okay'
				});
		}
	}

	render() {
		return (
			<DrawerLayout
				drawerWidth={250}
				drawerPosition={DrawerLayout.positions.Left}
				renderNavigationView={() => <HomeDrawer onMenuPress={this.handleMenuPress}/>}
				drawerLockMode='locked-closed'
				ref={drawer => this.drawer = drawer}
			>
				<Container>
					<MapView
						ref={map => this.map = map}
						style={styles.map}
						region={{
							latitude: this.state.lat,
							longitude: this.state.lng,
							latitudeDelta: 0.015,
							longitudeDelta: 0.0121,
						}}
						provider={PROVIDER_GOOGLE}
						rotateEnabled={false}
					/>
				</Container>
				<View style={styles.menuIcon}>
					<Button transparent block onPress={this.handleBtnMenuPress}>
						<Icon name="md-menu" />
					</Button>
				</View>
				<KeepAwake />
			</DrawerLayout>
		);
	}
}

const styles = StyleSheet.create({
	map: StyleSheet.absoluteFillObject,

	menuIcon: {
		backgroundColor: '#e0f7fa',
		borderRadius: 10,
		position: 'absolute',
		top: 30,
		left: 10
	}
});

export default connect(state => ({}), {
	gotoTrips,
	gotoWallet,
	gotoNotifications,
	gotoHelps,
	gotoSettings
})(Home);