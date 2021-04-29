import initialState from '../../store/states//Root.state';
import * as type from '../../store/types/Root.type';
import { GenericState } from '../../store/models/Root.model';

const reducer = (state = initialState, action: any): GenericState => {
	switch (action.type) {
		case type.SHOW_TEMPLATE_GALLERY:
			return {
				...state,
				templateGallery: action.value,
			};
		case type.CHANGE_LANGUAGE:
			return {
				...state,
				lang: action.value,
			};
		case type.UPDATE_DOCUMENT_TITLE:
			return {
				...state,
				documentTitle: action.value,
			};
		case type.CHOOSE_TEMPLATE:
			return {
				...state,
				template: {
					...state.template,
					selected: action.value
				},
			};
		case type.SHOW_LOADER:
			return {
				...state,
				loader: action.value
			};
		default:
			return state;
	}
};

export default reducer;