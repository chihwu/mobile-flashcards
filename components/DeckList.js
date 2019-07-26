import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { getDecks } from '../utils/api'
import DeckSummaryView from './DeckSummaryView'
import { AppLoading } from 'expo'

class DeckList extends Component {
	state = {
		list: {},
		loading: true
	}

	didBlurSubscription = this.props.navigation.addListener(
	  'willFocus',
	  payload => {
	    this.refresh()
	  }
	);

	componentDidMount() {
		this.refresh()
	}

	refresh() {
		getDecks().then((decks) => {
			// alert('cool')
			console.log("==========")
			console.log(decks)
			console.log("==========")
			this.setState({
				list: decks,
				loading: false
			})
		})
	}

	componentWillUnmount() {
	    // remove event listener
	    this.didBlurSubscription.remove()
	}

	renderItem({ item }) {

		return (
			<DeckSummaryView key={ item.title } title={ item.title } questions={ item.questions } />
		)
	}

	render() {
		const list = this.state.list === undefined ? [] : this.state.list;
		const data = Object.values(list)

		if (this.state.loading) {
	    	return (<AppLoading/>)
	    }
	    // console.log("$$$$$$$$$$");
	    // console.log(list);
	    // console.log("$$$$$$$$$$");
		return (
			<View>
				<FlatList keyExtractor={ (item, index) => item.title } data={ data } renderItem={ this.renderItem } />
			</View>
		)
	}
}

export default DeckList