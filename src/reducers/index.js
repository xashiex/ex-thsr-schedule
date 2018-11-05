import { combineReducers } from  'redux';
import navigation from './navigation';
import stations from './stations';
import schedule from './schedule';
import availableSeats from './availableSeats';

export default combineReducers({
  navigation,
  stations,
  schedule,
  availableSeats,
});