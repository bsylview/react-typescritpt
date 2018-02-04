import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';
import {assign} from 'lodash';

const initialState: ProductStoreState = [];

export default handleActions<ProductStoreState, ProductItemData[]>({
    [Actions.GET_PRODUCTS_RESPONSE]: (state, action) => {
      return [...state, ...action.payload];
    }
}, initialState);