// TODO: Add required selectors:
// 1.filterTypeSelected - return the value of the filter.
// 2.getNotifications - that will return the list of notifications in a Map format
// 3.getUnreadNotifications - that will return the list of unread notifications in a Map format

export const filterTypeSelected = (state) => {
	return state.get('filters');
};

export const getNotifications = (state) => {
	return state.get('notifications');
};

export const getUnreadNotifications = (state) => {
	const notifications = state.get('notifications');
	const filtered = notifications.filter(
		(value, key) => value.get('unRead') === true
	);
	return filtered;
};
