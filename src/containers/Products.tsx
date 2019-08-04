import { connect } from 'react-redux';
import { IStoreState } from 'src/store';
import Products from 'src/components/Products/Products';
import { addProductToCart, reduceCartThunk } from 'src/store/app/actions';
import { ICartItem } from 'src/types/Cart';
import { ThunkDispatch } from 'redux-thunk';

const mapStateToProps = (state: IStoreState) => ({
  products: state.domain.products,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  addToCart: (cartItem: ICartItem) => {
    dispatch(addProductToCart(cartItem))
    dispatch(reduceCartThunk())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
