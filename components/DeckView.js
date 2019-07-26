import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class DeckView extends Component {
	state = {
		title: null
	}

	// for showing the header title
	static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params

		return {
			title: title
		}
	}

	goToAddCard(title) {
		const { navigation } = this.props

		navigation.navigate('AddCard', { title })
	}

	goToQuiz(questions) {
		const { navigation } = this.props

		navigation.navigate('Quiz', { questions })
	}

	render() {
		const { title, questions } = this.props.navigation.state.params

		return (
			<View style={ styles.listItem }>

				<Text style={ styles.title }>{ title }</Text>
				<Text style={ styles.subtext }>{ questions.length } cards</Text>

				<TouchableOpacity style={ styles.button } onPress={() => this.goToAddCard(title)}>
					<Text>Add Card</Text>
				</TouchableOpacity>

				<TouchableOpacity style={ styles.button } onPress={() => this.goToQuiz(questions)}>
					<Text>Start Quiz</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default DeckView

const styles = StyleSheet.create({
	listItem: {
		padding: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold'
	},
	subtext: {
		fontSize:30,
		color: 'grey'
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

	}
})