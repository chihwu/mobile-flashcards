import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'mobile_flashcard_decks'

export function populateSampleDecks() {
	return {
		React: {
	      title: 'React',
	      questions: [
	        {
	          question: 'What is React?',
	          answer: 'A library for managing user interfaces'
	        }, {
	          question: 'Where do you make Ajax requests in React?',
	          answer: 'The componentDidMount lifecycle event'
	        }
	      ]
	    },
	    JavaScript: {
	      title: 'JavaScript',
	      questions: [
	        {
	          question: 'What is a closure?',
	          answer: 'The combination of a function and the lexical environment within which that function was declared.'
	        }
	      ]
	    }
	}
}

export function getDecks() {

}

export function getDeck(deckID) {

}

export function saveDeckTitle(deckTitle) {

}

export function addCardToDeck(deckTitle, card) {

}



 