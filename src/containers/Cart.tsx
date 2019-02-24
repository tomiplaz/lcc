import { connect } from 'react-redux';
import { IStoreState } from 'src/store';
import Cart from 'src/components/Cart/Cart';

const mapStateToProps = (state: IStoreState) => ({
  cart: state.app.cart,
});

export default connect(mapStateToProps, null)(Cart);
