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
import { goBack } from '../actions/navigate';
import { signup } from '../actions/auth';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lastName: '',
			firstName: '',
			email: '',
			phone: ''
		}
		this.handleBackPress = this.handleBackPress.bind(this);
		this.handleForwardPress = this.handleForwardPress.bind(this);
	}

	handleBackPress() {
		this.props.goBack();
	}

	handleForwardPress() {
		this.props.signup(this.state);
	}

	render() {
		return (
			<Container>
				<Content padder>
					<View style={style.imageContainer}>
						<Image source={res.logo_small} />
					</View>
					<Form style={style.form}>
						<Grid>
							<Col size={1}>
								<Item floatingLabel>
									<Label>{Localization.text("Họ")}</Label>
									<Input value={this.state.firstName}
										onChangeText={text => this.setState({ firstName: text })}
									/>
								</Item>
							</Col>
							<Col size={1}>
								<Item floatingLabel>
									<Label>{Localization.text("Tên")}</Label>
									<Input value={this.state.lastName}
										onChangeText={text => this.setState({ lastName: text })}
									/>
								</Item>
							</Col>
						</Grid>
						<Item floatingLabel>
							<Label>{Localization.text("Email")}</Label>
							<Input value={this.state.email}
								onChangeText={text => this.setState({ email: text })}
							/>
						</Item>
						<Item floatingLabel>
							<Label>{Localization.text("Số điện thoại")}</Label>
							<Input value={this.state.phone}
								onChangeText={text => this.setState({ phone: text })}
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
		);
	}
}

const style = StyleSheet.create({
	imageContainer: {
		alignItems: 'center',
		paddingTop: 30,
		paddingBottom: 25
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
})

export default connect(state => ({}), {
	goBack,
	signup
})(Signup);
