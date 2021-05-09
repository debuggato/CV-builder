import { GenericState } from '../../store/models/Root.model';

const initialState: GenericState = {
	modalDisplayed: false,
	lang: 'en',
	documentTitle: '',
	loader: false
};

export default initialState;
