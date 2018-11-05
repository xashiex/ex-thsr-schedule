import { connect } from 'react-redux';
import ScheduleList from '../../components/ScheduleList';

const mapStateToProps = (state) => ({
  stations: state.stations,
  schedule: state.schedule
});

export default connect(
  mapStateToProps
)(ScheduleList);