import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import DrawerLayout from 'react-native-drawer-layout';
import HomeDrawer from '../components/HomeDrawer';
import KeepAwake from 'react-native-keep-awake';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: 37.78825,
			lng: -122.4324
		}
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(coord => this.setState({
			lat: coord.coords.latitude,
			lng: coord.coords.longitude
		}));
	}

	render() {
		return (
			<DrawerLayout
				drawerWidth={200}
				drawerPosition={DrawerLayout.positions.Left}
				renderNavigationView={HomeDrawer}
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
					>
					</MapView>
				</Container>
				<KeepAwake />
			</DrawerLayout>
		);
	}
}

const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFillObject,
	},
});

export default connect(state => ({}), {})(Home);
// const HomeContainer = connect(state => ({}), {})(Home);

// const Drawer = DrawerNavigator({
// 	Home: {
// 		screen: HomeContainer
// 	}
// }, {
// 	drawerWidth: 200,
// 	contentComponent: props => (
// 		<ScrollView>
// 			<DrawerItems {...props} />
// 		</ScrollView>
// 	),
// 	initialRouteName: 'Home'
// });

// export default Drawer;