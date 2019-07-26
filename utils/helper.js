import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'mobile_flashcard_local_notification'

export function clearLocalNotification() {
	return AsyncStorage.removeItem(NOTIFICATION_KEY)
				.then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
	return {
		title: 'Log your stats',
		body: "Don't forget to add new decks for the day",
		ios: {
			sound: true
		},
		android: {
			sound: true,
			priority: 'high',
			sticky: false,
			vibrate: true
		}
	}
}

export function setLocalNotification() {
	AsyncStorage.getItem(NOTIFICATION_KEY)
		.then(JSON.parse)
		.then((data)=>{
			Permissions.askAsync(Permissions.NOTIFICATIONS)
				.then(({ status }) => {
					if (status === 'granted') {
						Notifications.cancelAllScheduledNotificationsAsync()

						let tomorrow = new Date()
						tomorrow.setDate(tomorrow.getDate() + 1)
						tomorrow.setHours(20)
						tomorrow.setMinutes(0)

						Notifications.scheduleLocalNotificationsAsync(
							createNotification(),
							{
								time: tomorrow,
								repeat: 'day'
							}
						)

						AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
					} else {
						alert('The notification service is not enabled.')
					}
				})
		})
}



