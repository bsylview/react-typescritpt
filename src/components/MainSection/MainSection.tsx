import * as React from 'react';
import * as ProductActions from '../../actions/products';
import * as style from './style.css';
import { connect } from 'react-redux';
import { ProductItem } from '../ProductItem/ProductItem';

export namespace MainSection {
  export interface Props {
    products: ProductItemData[];
    actions: typeof ProductActions;
  }
}

export class MainSection extends React.Component<MainSection.Props> {
  constructor(props?: MainSection.Props, context?: any) {
    super(props, context);
  }

  render() {
    const { products, actions } = this.props;

    return (
      <section className={style.main}>
        <div className={style.title}>
         Random List
        </div>
        <ul className={style.normal}>
          {products.map(product =>
            <ProductItem
              key = {product.id}
              product = {product}
            />
          )}
        </ul>
      </section>
    );
  }
}
