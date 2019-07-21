import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { populateSampleDecks } from '../utils/api'

class DeckList extends Component {
	state = {
		list: populateSampleDecks()
	}

	componentDidMount() {
		
	}

	render() {
		const list = this.state.list === undefined ? [] : this.state.list;
		return (
			<View>
				{
					Object.values(list).map(({ title, questions }) => (
						<Text key={ title }>{ title }</Text>
					))
				}
			</View>
		)
	}
}

export default DeckList