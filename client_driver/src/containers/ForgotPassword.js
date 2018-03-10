import React, { Component } from 'react';
import Localization from '../utils/Localization';
import res from '../config/res';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Image, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
	Container, Button, Text, Content,
	Icon, Form, Item, Input, Label
} from 'native-base';
import { goBack } from '../actions/navigate';
import { forgotPassword } from '../actions/auth';

class ForgotPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ''
		}
		this.handleBackPress = this.handleBackPress.bind(this);
		this.handleForwardPress = this.handleForwardPress.bind(this);
	}

	handleBackPress() {
		this.props.goBack();
	}

	handleForwardPress() {
		this.props.forgotPassword(this.state.email);
	}

	render() {
		return (
			<Container>
				<Content padder>
					<View style={style.imageContainer}>
						<Image source={res.logo_small} />
					</View>
					<Form style={style.form}>
						<Item floatingLabel>
							<Label>{Localization.text("Nhập Email đã đăng ký")}</Label>
							<Input value={this.state.email}
								onChangeText={text => this.setState({ email: text })}
							/>
						</Item>
					</Form>
					<Grid style={style.actionGroup}>
						<Col size={2} style={style.actionLeft}>
							<Button light block onPress={this.handleBackPress}>
								<Icon name="arrow-back" />
							</Button>
						</Col>
						<Col size={4} />
						<Col size={2} style={style.actionRight}>
							<Button light block onPress={this.handleForwardPress}>
								<Icon name="arrow-forward" />
							</Button>
						</Col>
					</Grid>
				</Content>
			</Container>
		)
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
	},
	actionGroup: {
		paddingBottom: 10
	}
});

export default connect(state => ({}), {
	forgotPassword,
	goBack
})(ForgotPassword);
