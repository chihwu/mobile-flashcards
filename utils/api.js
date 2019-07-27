import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'mobile_flashcard_decks'

function populateSampleDecks() {
	const dummyDeck = {
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

	AsyncStorage.setItem(
		DECK_STORAGE_KEY,
		JSON.stringify(dummyDeck)
	)

	return dummyDeck
}

export function getDecks() {
	// AsyncStorage.setItem(DECK_STORAGE_KEY, '')
	return AsyncStorage.getItem(
			DECK_STORAGE_KEY
		).then((results) => {
			return results ? JSON.parse(results) : {}
		})
}

export function getDeck(deckID) {
	return getDecks().then((results) => {
		return results[deckID]
	})
}

export function saveDeckTitle(deckTitle) {
	return getDecks().then((decks) => {
		if (decks[deckTitle] != undefined) {
			alert("A deck with the same name has existed.")
		} else {
			decks[deckTitle] = {
				title: deckTitle,
				questions: []
			}
			console.log("!!!!!!!!!!");
			console.log(decks);
			console.log("!!!!!!!!!!");
			AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
		}
	})
}

export function addCardToDeck(deckTitle, card) {

	return getDecks().then((decks) => {
		if (decks[deckTitle] && decks[deckTitle]['questions']) {
			decks[deckTitle]['questions'].push(card)

			AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
			
			return decks
		}
	})

}



 