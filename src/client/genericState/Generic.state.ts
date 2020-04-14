import { GenericState } from './Generic.model';

const initialState: GenericState = {
  showModal: false,
  lang: 'en',
  documentTitle: '',
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
