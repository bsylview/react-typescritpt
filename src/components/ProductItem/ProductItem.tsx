import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';
import { applyMiddleware } from 'redux';

export interface Props {
  product: ProductItemData;
}

export class ProductItem extends React.Component<Props> {

  constructor(props?: Props, context?: any) {
    super(props, context);
  }

  render() {
    const { product } = this.props;

    return (
      <div className={style.view}>
        {product.title}
      </div>
    );
  }
}
