import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

class AddDeck extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<Text style={ styles.title }>What is the title of your new deck?</Text>

				<TextInput placeholder="Deck Title" maxLength={70} style={ styles.textInput } />

				<TouchableOpacity style={ styles.button }> 
					<Text>Submit</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default AddDeck

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		marginTop: 100,
		marginBottom: 40,
		fontSize: 40,
		fontWeight: 'bold'
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