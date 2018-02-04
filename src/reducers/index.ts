import { combineReducers, Reducer } from 'redux';
import products from './products';

export interface RootState {
  products: ProductStoreState;
}

export default combineReducers<RootState>({
  products
});
