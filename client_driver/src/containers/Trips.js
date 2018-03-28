import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, Toast } from 'native-base';
import Localization from '../utils/Localization';
import { StyleSheet } from 'react-native';
import { goBack } from '../actions/navigate';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import TripComponent from '../components/TripComponent';

class Trips extends Component {
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
						<Title>{Localization.text("Hành trình")}</Title>
					</Body>
					<Right />
				</Header>
				<Content style={styles.content}>
					<TripComponent />
					<TripComponent />
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
})(Trips);

