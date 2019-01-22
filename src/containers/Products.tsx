import { connect } from 'react-redux';
import { IStoreState } from 'src/store';
import Products from 'src/components/Products/Products';

const mapStateToProps = (state: IStoreState) => ({
  items: state.domain.products
});

export default connect(mapStateToProps, null)(Products);
