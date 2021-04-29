import { GenericState } from '../../store/models/Root.model';

const initialState: GenericState = {
	templateGallery: false,
	lang: 'en',
	documentTitle: '',
	loader: false,
	template: {
		selected: null,
		available: {
			0: 'Da Vinci',
			1: 'Michelangelo',
			2: 'Donatello',
			3: 'Raffaello',
			4: 'Caravaggio'
		}
	}
};

export default initialState;
