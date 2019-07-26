import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native'

class Question extends Component {
	state = {
		flipActionText: 'Answer'
	}

	componentWillMount() {
		this.animatedValue = new Animated.Value(0)
		this.value = 0
		this.animatedValue.addListener(({ value }) => {
			this.value = value
		})

		this.frontInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ['0deg', '180deg']
		})

		this.backInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ['180deg', '360deg']
		})
	}

	flipCard() {
		if (this.value >= 90) {
			Animated.spring(this.animatedValue, {
				toValue: 0,
				friction: 8,
				tension: 10
			}).start()

			this.setState({flipActionText: 'Answer'})
		} else {
			Animated.spring(this.animatedValue, {
				toValue: 180,
				friction: 9,
				tension: 10
			})

			this.setState({flipActionText: 'Question'})
		}
	}


	render() {
		
		const { question, answer } = this.props.card

		const frontAnimatedStyle = {
			transform: [
				{ rotateY: this.frontInterpolate }
			]
		}

		const backAnimatedStyle = {
			transform: [
				{ rotateY: this.backInterpolate }
			]
		}

		const { flipActionText } = this.state

		return (
			<View style={ styles.container }>
				<View>
					<Animated.View style={ [styles.flipCard, frontAnimatedStyle] }>
						<Text style={ styles.subtext }>{ question }</Text>
					</Animated.View>
					<Animated.View style={ [backAnimatedStyle, styles.flipCard, styles.flipCardBack] }>
						<Text style={ styles.subtext }>{ answer }</Text>
					</Animated.View>
				</View>

				<TouchableOpacity onPress={() => this.flipCard()}>
					<Text>cool</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default Question

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center'
	},
	subtext: {
		fontSize:30,
		color: 'grey'
	},
	flipCard: {
		width: 200,
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: ''
		backfaceVisibility: 'hidden'
	},
	flipCardBack: {
		// backgroundColor: ''
		position: 'absolute',
		top: 0
	}
})


