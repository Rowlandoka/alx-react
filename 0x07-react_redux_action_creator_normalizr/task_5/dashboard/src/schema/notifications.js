import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
	const notifications = normalized.entities.notifications;
	const messages = normalized.entities.messages;
	const notificationsByUser = [];

	for (const prop in notifications) {
		if (notifications[prop].author === userId) {
			notificationsByUser.push(messages[notifications[prop].context]);
		}
	}
	return notificationsByUser;
};

const user = new schema.Entity('users');

const message = new schema.Entity(
	'messages',
	{},
	{
		idAttribute: 'guid',
	}
);

const notification = new schema.Entity('notifications', {
	author: user,
	context: message,
});

const normalized = normalize(notificationsData.default, [notification]);
export { normalized };
