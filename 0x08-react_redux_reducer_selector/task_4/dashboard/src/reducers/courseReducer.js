import {
	FETCH_COURSE_SUCCESS,
	SELECT_COURSE,
	UNSELECT_COURSE,
} from '../actions/courseActionTypes';

import { Map, setIn } from 'immutable';
import { courseNormalizer } from '../schema/courses';

const initialstate = Map([]);

const courseReducer = (state = initialstate, action) => {
	switch (action.type) {
		case FETCH_COURSE_SUCCESS: {
			let courseData = courseNormalizer(action.data);
			const courses = courseData.entities.courses;
			courseData.result.map((id) => (courses[id].isSelected = false));
			return state.merge(courses);
		}

		case SELECT_COURSE:
			return setIn(state.toJS(), [action.index, 'isSelected'], true);

		case UNSELECT_COURSE:
			return setIn(state.toJS(), [action.index, 'isSelected'], false);
		default:
			break;
	}
	return state;
};

export default courseReducer;
