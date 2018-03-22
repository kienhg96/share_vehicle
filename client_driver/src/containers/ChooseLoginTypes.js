import React, { Component } from 'react';
import { Container, Text, Header, Footer, Content, Button, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Image, StyleSheet, View } from 'react-native';
import res from '../config/res';
import Localization from '../utils/Localization';
import { connect } from 'react-redux';
import { gotoCustomLogin } from '../actions/navigate';

class ChooseLoginTypes extends Component {
	handleClick() {
		console.log("Login by account clicked");
		this.props.gotoCustomLogin();
	}

	render() {
		return (
			<Container>
				<Grid>
					<Row size={5} style={style.logoContainer}>
						<Image source={res.logo} />
					</Row>
					<Row size={4} style={style.loginTypeContainer}>
						<View>
							<Button transparent small block onPress={this.handleClick.bind(this)}>
								<Text uppercase={false} style={style.underlineText}>{Localization.text("Đăng nhập bằng số điện thoại")}</Text>
							</Button>
							<Text style={style.orTextPadding}>{Localization.text("Or")}</Text>
							<Button block>
								<Icon name='logo-facebook' />
								<Text uppercase={false}>{Localization.text("Đăng nhập bằng facebook")}</Text>
							</Button>
						</View>
					</Row>
				</Grid>
			</Container>
		);
	}
}

const style = StyleSheet.create({
	logoContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},

	loginTypeContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	},

	orTextPadding: {
		marginTop: 40,
		marginBottom: 30,
		textAlign: 'center'
	},

	underlineText: {
		textDecorationLine: 'underline'
	}
});

export default connect(state => ({}), {
	gotoCustomLogin
})(ChooseLoginTypes);
