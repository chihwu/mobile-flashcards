import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class DeckView extends Component {
	static navigationOptions = ({ navigation }) => {
		const { deckID } = navigation.state.params

		return {
			title: 'Cool Deck'
		}
	}

	render() {
		return (
			<View>
				<Text>Deck View</Text>
			</View>
		)
	}
}

export default DeckView