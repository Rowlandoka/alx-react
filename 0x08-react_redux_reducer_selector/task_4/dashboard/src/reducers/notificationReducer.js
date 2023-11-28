import {
	MARK_AS_READ,
	SET_TYPE_FILTER,
	FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';

import { Map, setIn } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
	notifications: [],
	filter: 'DEFAULT',
});

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS: {
			const notifiedData = notificationsNormalizer(action.data);
			const notified = notifiedData.entities.notifications;
			notifiedData.result.map((id) => (notified[id].isRead = false));
		}

		case MARK_AS_READ:
			return setIn(
				state.toJS(),
				['notifications', action.index, 'isRead'],
				true
			);

		case SET_TYPE_FILTER:
			return state.set('filter', action.filter);

		default:
			break;
	}
	return state;
};

export default notificationReducer;
