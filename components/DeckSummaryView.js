import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import DeckView from './DeckView'
import { withNavigation } from 'react-navigation'

class DeckSummaryView extends Component {

	onPressItem = ({ title, questions }) => {
		this.props.navigation.navigate('DeckView', { title, questions })
	}

	render() {
		const { title, questions } = this.props;

		return (
			<TouchableOpacity onPress={ () => this.onPressItem({ title, questions }) }>
				<View style={ styles.listItem }>
					<Text style={ styles.title }>{ title }</Text>
					<Text style={ styles.subtext }>{ questions.length } cards</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

export default withNavigation(DeckSummaryView)

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'grey'
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold'
	},
	subtext: {
		fontSize:30,
		color: 'grey'
	}
})