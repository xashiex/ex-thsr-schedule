import { connect } from 'react-redux';
import StationsErrorModal from '../../components/StationsErrorModal';

const mapStateToProps = (state) => ({
  error: state.stations.error
});

export default connect(
  mapStateToProps,
)(StationsErrorModal);