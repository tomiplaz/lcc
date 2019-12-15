import { connect } from 'react-redux';
import AddToCartButton from 'src/components/AddToCartButton/AddToCartButton';
import { addProductToCart, reduceCartThunk } from 'src/store/app/actions';
import { ICartItem } from 'src/types/Cart';
import { ThunkDispatch } from 'redux-thunk';

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  addToCart: (cartItem: ICartItem) => {
    dispatch(addProductToCart(cartItem))
    dispatch(reduceCartThunk())
  }
});

export default connect(undefined, mapDispatchToProps)(AddToCartButton);
