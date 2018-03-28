import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Localization from '../utils/Localization';
import { StyleSheet } from 'react-native';
import { goBack } from '../actions/navigate';
import { connect } from 'react-redux';

class Settings extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.goBack()}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>{Localization.text("Thông báo")}</Title>
					</Body>
					<Right />
				</Header>
				<Content style={styles.content}>
					<Text>This is Content section</Text>
				</Content>
			</Container>
		)		
	}
}

const styles = StyleSheet.create({
	content: {
		padding: 10
	}
});

export default connect(state => ({}), {
	goBack
})(Settings);

