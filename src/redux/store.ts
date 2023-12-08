import { createStore } from 'redux';
import reducer from './reducer';

export type RootState = {
  count: number;
}

const store = createStore(reducer);

export default store;
