import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helper'
import Question from './Question'

class Quiz extends Component {

	state = {
		currentQuestionIndex: 0,
		correctAnswerCount: 0
	}

	componentDidMount() {
		clearLocalNotification().then(setLocalNotification)
	}

	correctAnswerBtnPressed() {
		this.setState((state) => ({
			currentQuestionIndex: state['currentQuestionIndex'] + 1,
			correctAnswerCount: state['correctAnswerCount'] + 1
		}))
	}

	incorrectAnswerBtnPressed() {
		this.setState((state) => {
			return {
				...state,
				currentQuestionIndex: state['currentQuestionIndex'] + 1
			}
		})
	}

	reset() {
		this.setState({
			currentQuestionIndex: 0,
			correctAnswerCount: 0
		})
	}

	render() {
		const { questions } = this.props.navigation.state.params
		const { currentQuestionIndex, correctAnswerCount } = this.state

		if (questions.length == 0) {
			return (
				<View style={ styles.container }>
					<Text style={ styles.title }>You don't have any question in the deck currently!!!</Text>
				</View>
			)
		} else if (currentQuestionIndex > questions.length - 1) {
			return (
				<View style={ styles.container }>
					<Text style={ styles.title }>You have answered all questions in the deck!!!</Text>
					<Text style={ styles.title }>Your Score:</Text>
					<Text style={ styles.title }>{ (correctAnswerCount / questions.length).toFixed(2) * 100 }%</Text>

					<TouchableOpacity style={ styles.button } onPress={ () => this.reset() }>
						<Text>Restart Quiz</Text>
					</TouchableOpacity>
				</View>
			)
		} 

		return (
			<View>
				<Text>{ currentQuestionIndex + 1 } / { questions.length }</Text>
				<View style={ styles.container }>
					<Question card={ questions[currentQuestionIndex] }></Question>
					<TouchableOpacity style={ [styles.button, styles.greenBtn] } onPress={ () => this.correctAnswerBtnPressed() }>
						<Text>Correct</Text>
					</TouchableOpacity>
					<TouchableOpacity style={ [styles.button, styles.redBtn] } onPress={ () => this.incorrectAnswerBtnPressed() }>
						<Text>Incorrect</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

export default Quiz

const styles = StyleSheet.create({
	container: {
		padding: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
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
	greenBtn: {
		backgroundColor: 'green',
		color: 'white'
	},
	redBtn: {
		backgroundColor: 'red',
		color: 'white'
	},
})