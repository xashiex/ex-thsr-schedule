import { combineReducers } from  'redux';
import navigation from './navigation';
import stations from './stations';
import schedule from './schedule';
import availableSeats from './availableSeats';
import price from './price';

export default combineReducers({
  navigation,
  stations,
  schedule,
  availableSeats,
  price,
});