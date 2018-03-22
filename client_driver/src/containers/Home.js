import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Home extends Component {
	render() {
		return (
			<Container>
				<MapView
					style={styles.map}
					region={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.015,
						longitudeDelta: 0.0121,
					}}
					provider={ PROVIDER_GOOGLE }
				>
				</MapView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFillObject,
	},
});

export default connect(state => ({}), {})(Home);
