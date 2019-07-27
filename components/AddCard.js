import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { addCardToDeck } from '../utils/api'
import { NavigationActions, withNavigation } from 'react-navigation'

class AddCard extends Component {

	state = {
		question: null,
		answer: null
	}

	onSubmit() {
		const { title } = this.props.navigation.state.params
		const { question, answer } = this.state
		// alert(title)
		addCardToDeck(title, { question, answer }).then((decks)=>{
			const questions = decks[title]['questions']
			this.props.navigation.navigate('DeckView', { title, questions })
		})
	}

	render() {
		return (
			<View style={ styles.container }>
				<TextInput placeholder="Quiz Title" maxLength={70} style={ styles.textInput } onChangeText={ ( question )=>{ this.setState({ question }) } } />

				<TextInput placeholder="Quiz Content" maxLength={70} style={ styles.textInput } onChangeText={ ( answer )=>{ this.setState({ answer }) } } />

				<TouchableOpacity style={ styles.button } onPress={ () => ( this.onSubmit() ) }> 
					<Text>Submit</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default withNavigation(AddCard)

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 100
	},
	button: {
		marginTop: 15,
		paddingLeft: 40,
		paddingRight: 40,
		paddingTop: 15,
		paddingBottom: 15,
		justifyContent: 'center',
		borderColor: 'black',
		borderWidth: 2,
		borderRadius: 5
	},
	textInput: {
		width: 350,
		height: 60,
		marginTop: 10,
	    marginBottom: 10,
	    padding: 10,
	    paddingTop: 5,
	    paddingBottom: 5,
	    borderWidth: 1,
	    borderRadius: 5,
	    borderColor: 'gray'
	}
})