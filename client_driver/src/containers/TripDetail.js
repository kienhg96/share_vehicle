import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Container } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';

class TripDetail extends Component {
	render() {
		return (
			<Container>
				<View>
					<Text>Something here</Text>
				</View>
				<View style={styles.mapContainer}>
					<MapView
						ref={map => this.map = map}
						style={styles.map}
						region={{
							latitude: 37.78825,
							longitude: -122.4324,
							latitudeDelta: 0.015,
							longitudeDelta: 0.0121,
						}}
						provider={PROVIDER_GOOGLE}
						rotateEnabled={false}
					/>
				</View>
			</Container>
		);
	}
}

const style = StyleSheet.create({
	mapContainer: {
		flex: 1
	},
	map: StyleSheet.absoluteFillObject
});

export default TripDetail;
