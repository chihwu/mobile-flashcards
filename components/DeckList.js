import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { populateSampleDecks } from '../utils/api'
import DeckSummaryView from './DeckSummaryView'

class DeckList extends Component {
	state = {
		list: populateSampleDecks()
	}

	componentDidMount() {
		
	}

	renderItem({ item }) {

		return (
			<DeckSummaryView key={ item.title } title={ item.title } questions={ item.questions } />
		)
	}

	render() {
		const list = this.state.list === undefined ? [] : this.state.list;
		const data = Object.values(list)

		return (
			<View>
				<FlatList data={ data } renderItem={ this.renderItem } />
			</View>
		)
	}
}

export default DeckList