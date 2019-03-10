import { connect } from 'react-redux';
import { IStoreState } from 'src/store';
import Products from 'src/components/Products/Products';
import { addProductToCart, AppAction } from 'src/store/app/actions';
import { ICartItem } from 'src/types/Cart';
import { Dispatch } from 'redux';

const mapStateToProps = (state: IStoreState) => ({
  products: state.domain.products,
});

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => ({
  addToCart: (cartItem: ICartItem) => dispatch(addProductToCart(cartItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
