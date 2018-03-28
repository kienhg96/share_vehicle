import React, { Component } from 'react';
import {
	Container, Button, Text, Content,
	Icon, Form, Item, Input, Label
} from 'native-base';
import { connect } from 'react-redux';
import res from '../config/res';
import { Image, View, StyleSheet } from 'react-native';
import Localization from '../utils/Localization';
import { Col, Row, Grid } from "react-native-easy-grid";
import { goBack, gotoForgotPassword, gotoSignup } from '../actions/navigate';
import { login } from '../actions/auth';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
		this.handleBackPress = this.handleBackPress.bind(this);
		this.handleForwardPress = this.handleForwardPress.bind(this);
	}

	handleBackPress() {
		this.props.goBack();
	}

	handleForwardPress() {
		this.props.login(this.state.username, this.state.password);
	}

	render() {
		return (
			<Container>
				<Content padder>
					<View style={style.imageContainer}>
						<Image source={res.logo} />
					</View>
					<Form style={style.form}>
						<Item floatingLabel>
							<Label>{Localization.text("Nhập số điện thoại của bạn")}</Label>
							<Input value={this.state.username}
								onChangeText={text => this.setState({ username: text })}
								keyboardType='numeric'
							/>
						</Item>
						<Item floatingLabel>
							<Label>{Localization.text("Nhập mật khẩu")}</Label>
							<Input value={this.state.password}
								onChangeText={text => this.setState({ password: text })}
								secureTextEntry
							/>
						</Item>
					</Form>
					<Grid>
						<Col size={2} style={style.actionLeft}>
							<Button transparent block onPress={this.handleBackPress}>
								<Icon name="arrow-back" />
							</Button>
						</Col>
						<Col size={4}>
							<Button small transparent block onPress={() => this.props.gotoForgotPassword()}>
								<Text uppercase={false} style={style.actionText}>{Localization.text("Quên mật khẩu")}</Text>
							</Button>
							<Button small transparent block onPress={() => this.props.gotoSignup()}>
								<Text uppercase={false} style={style.actionText}>{Localization.text("Tạo tài khoản")}</Text>
							</Button>
						</Col>
						<Col size={2} style={style.actionRight}>
							<Button transparent block onPress={this.handleForwardPress}>
								<Icon name="arrow-forward" />
							</Button>
						</Col>
					</Grid>
				</Content>
			</Container>
		);
	}
}

const style = StyleSheet.create({
	imageContainer: {
		alignItems: 'center',
		paddingTop: 30,
		paddingBottom: 40
	},
	form: {
		marginBottom: 20
	},
	actionLeft: {
		paddingLeft: 20
	},
	actionRight: {
		paddingRight: 20
	}
})

export default connect(state => ({}), {
	goBack,
	login,
	gotoForgotPassword,
	gotoSignup
})(Login);
