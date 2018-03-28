import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Icon, Toast } from 'native-base';

export default props => (
	<TouchableHighlight style={styles.touchableContainer} onPress={() => {
		props.onTripPress && props.onTripPress('1234');
	}}>
		<View style={styles.container}>
			<View style={styles.status}>
				<Text style={styles.statusText}>Đã hoàn thành</Text>
			</View>
			<Text style={styles.id}>Mã chuyến đi: 1862</Text>
			<Text style={styles.date}>12:15 25/3/2018</Text>
			<View style={styles.directions}>
				<Icon name="ray-start" type="MaterialCommunityIcons" style={styles.directionIcon}/>
				<Text style={styles.address} numberOfLines={2}>Ngõ 105 Bạch Mai, Hai Bà Trưng, Hà Nội</Text>
			</View>
			<View style={styles.directions}>
				<Icon name="ray-end" type="MaterialCommunityIcons" style={styles.directionIcon}/>
				<Text style={styles.address} numberOfLines={2}>Đại học Bách Khoa Hà Nội</Text>
			</View>
			<View style={styles.tripInfos}>
				<Text style={styles.infoContent}>10.000 VNĐ</Text>
				<Text style={styles.infoContent}>3.5623 Km</Text>
			</View>
		</View>
	</TouchableHighlight>
);

const styles = StyleSheet.create({
	touchableContainer: {
		borderRadius: 5,
		marginBottom: 10
	},

	container: {
		borderRadius: 5,
		backgroundColor: '#ddd',
		padding: 10
	},

	id: {
		fontWeight: 'bold',
		fontSize: 16,
		marginBottom: 2
	},

	status: {
		position: 'absolute',
		top: 0,
		right: 0,
		margin: 10,
		padding: 5,
		backgroundColor: '#00E676',
		borderRadius: 5,
	},

	statusText: {
		color: '#fff',
		fontWeight: 'bold'
	},

	date: {
		marginTop: 2,
		marginBottom: 2
	},

	directions: {
		flexDirection: 'row',
		alignItems: 'center'
	},

	directionIcon: {
		marginRight: 10,
		marginTop: 2,
		flex: 0
	},

	address: {
		flex: 1
	},

	tripInfos: {
		flexDirection: 'row'
	},

	infoContent: {
		flex: 1,
		fontWeight: 'bold',
		fontSize: 16
	}
});
