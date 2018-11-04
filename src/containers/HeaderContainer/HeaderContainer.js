import { connect } from 'react-redux';
import { toggleNav } from '../../actions/navigation';
import Header from '../../components/Header';

const mapDispatchToProps = dispatch => ({
  toggleNav: () => dispatch(toggleNav())
});

export default connect(
  null,
  mapDispatchToProps,
)(Header);