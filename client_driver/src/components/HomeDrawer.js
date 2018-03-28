import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { List, ListItem, Left, Icon, Switch, Right, Body, Toast } from 'native-base';
import Localization from '../utils/Localization';
import res from '../config/res';
import AutoHeightImage from 'react-native-auto-height-image';

const imageWidth = 100;

export default props => (
	<View style={styles.container}>
		<View style={styles.imageContainer}>
			<AutoHeightImage source={res.user} width={imageWidth} style={styles.avatar}/>
			<Text style={styles.txtName}>Hoàng Kiên</Text>
		</View>
		<ScrollView style={styles.middleContainer}>
			<List>
				<ListItem icon>
					<Left>
						<Icon name="md-plane" type="Ionicons" />
					</Left>
					<Body style={{ borderBottomWidth: 0 }}>
						<Text style={styles.menuText}>{Localization.text("Sẵn sàng")}</Text>
					</Body>
					<Right style={{ borderBottomWidth: 0 }}>
						<Switch value={false} />
					</Right>
				</ListItem>
				<ListItem icon button onPress={() => props.onMenuPress('trips')}>
					<Left>
						<Icon name="ios-briefcase" type="Ionicons" fontSize={25}/>
					</Left>
					<Body style={{ borderBottomWidth: 0 }}>
						<Text style={styles.menuText}>{Localization.text("Hành trình")}</Text>
					</Body>
					<Right style={{ borderBottomWidth: 0 }}>
						<Icon name="arrow-forward" />
					</Right>
				</ListItem>
				<ListItem icon button onPress={() => props.onMenuPress('wallet')}>
					<Left>
						<Icon name="ios-cash" type="Ionicons"/>
					</Left>
					<Body style={{ borderBottomWidth: 0 }}>
						<Text style={styles.menuText}>{Localization.text("Ví của bạn")}</Text>
					</Body>
					<Right style={{ borderBottomWidth: 0 }}>
						<Icon name="arrow-forward" />
					</Right>
				</ListItem>
				<ListItem icon button onPress={() => props.onMenuPress('notifications')}>
					<Left>
						<Icon name="ios-notifications" type="Ionicons"/>
					</Left>
					<Body style={{ borderBottomWidth: 0 }}>
						<Text style={styles.menuText}>{Localization.text("Thông báo")}</Text>
					</Body>
					<Right style={{ borderBottomWidth: 0 }}>
						<Icon name="arrow-forward" />
					</Right>
				</ListItem>
				<ListItem icon button onPress={() => props.onMenuPress('helps')}>
					<Left>
						<Icon name="md-help-circle" type="Ionicons"/>
					</Left>
					<Body style={{ borderBottomWidth: 0 }}>
						<Text style={styles.menuText}>{Localization.text("Trợ giúp")}</Text>
					</Body>
					<Right style={{ borderBottomWidth: 0 }}>
						<Icon name="arrow-forward" />
					</Right>
				</ListItem>
				<ListItem icon button onPress={() => props.onMenuPress('settings')}>
					<Left>
						<Icon name="md-settings" type="Ionicons"/>
					</Left>
					<Body style={{ borderBottomWidth: 0 }}>
						<Text style={styles.menuText}>{Localization.text("Cài đặt")}</Text>
					</Body>
					<Right style={{ borderBottomWidth: 0 }}>
						<Icon name="arrow-forward" />
					</Right>
				</ListItem>
			</List>
		</ScrollView>
		<View style={styles.bottomContainer}>
			<List>
				<ListItem icon button onPress={() => {
					Toast.show({
						text: 'Logout',
						position: 'bottom',
						buttonText: 'Okay'
					});
				}}>
					<Left>
						<Icon name="md-log-out" type="Ionicons"/>
					</Left>
					<Body style={{ borderBottomWidth: 0 }}>
						<Text style={styles.menuText}>{Localization.text("Đăng xuất")}</Text>
					</Body>
				</ListItem>
			</List>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee'
	},

	imageContainer: {
		borderBottomWidth: 1,
		borderBottomColor: '#000',
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 10
	},

	middleContainer: {
		flex: 1,
		paddingVertical: 10
	},

	bottomContainer: {
		borderTopWidth: 1,
		borderTopColor: '#000',
		paddingVertical: 10
	},

	listItem: {
		width: '100%',
		paddingVertical: 5
	},

	menuText: {
		fontSize: 18
	},

	avatar: {
		borderRadius: (imageWidth / 2)
	},

	txtName: {
		paddingTop: 10,
		fontSize: 18
	}
});
