import {LOAD_QUIZ} from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOAD_QUIZ:{
            let { quiz } = action
            return [...quiz]
        }
		default:
			return state;
	}
}