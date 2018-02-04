import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const getProductsResponse = createAction<ProductItemData[]>(Actions.GET_PRODUCTS_RESPONSE);