import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import * as ProductActions from '../../actions/products';
import ProductApi from  '../../api/ProductsApi';
import * as style from './style.css';
import { RootState } from '../../reducers';
import { MainSection } from '../../components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    products: ProductItemData[];
    actions: typeof ProductActions;
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props> {
  componentWillMount() {
    const { actions } = this.props;
    actions.getProductsResponse(ProductApi.getAllProducts());
  }

  render() {
    const { products, actions, children } = this.props;
    return (
      <div className={style.normal}>
        <MainSection products={products} actions={actions} />
        {children}
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ProductActions as any, dispatch)
  };
}
