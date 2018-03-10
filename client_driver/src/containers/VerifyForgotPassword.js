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

class VerifyForgotPassword extends Component {
	render() {
		return (
			<Container>
				<Content padder>
					<View style={style.imageContainer}>
						<Image source={res.logo_small} />
					</View>
					<Form style={style.form}>
						<Item floatingLabel>
							<Label>{Localization.text("Mã xác nhận")}</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label>{Localization.text("Mật khẩu mới")}</Label>
							<Input />
						</Item>
					</Form>
					<Grid style={style.actionGroup}>
						<Col size={2} style={style.actionLeft}>
							<Button light block>
								<Icon name="arrow-back" />
							</Button>
						</Col>
						<Col size={4} />
						<Col size={2} style={style.actionRight}>
							<Button light block>
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

export default connect(state => ({}), {})(VerifyForgotPassword);
