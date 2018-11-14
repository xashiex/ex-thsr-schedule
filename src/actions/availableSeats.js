import axios from 'axios';
import dayjs from 'dayjs';

export const FETCH_AVAILABLE_SEATS_REQUEST = 'FETCH_AVAILABLE_SEATS_REQUEST';
export const FETCH_AVAILABLE_SEATS_FAILURE = 'FETCH_AVAILABLE_SEATS_FAILURE';
export const FETCH_AVAILABLE_SEATS_SUCCESS = 'FETCH_AVAILABLE_SEATS_SUCCESS';

const fetchRequest = (params) => ({
  type: FETCH_AVAILABLE_SEATS_REQUEST,
  params,
});

const fetchFailure = (error = '取得尚有座位列車資料時，發生錯誤！') => ({
  type: FETCH_AVAILABLE_SEATS_FAILURE,
  error, 
});

const fetchSuccess = (data) => ({
  type: FETCH_AVAILABLE_SEATS_SUCCESS,
  data
});

export const fetchAvailableSeats = ({originStationID, destinationStationID}) => {
  return (dispatch) => {
    dispatch(fetchRequest({originStationID, destinationStationID}));

    const baseURL = 'https://ptx.transportdata.tw/MOTC/v2/Rail/THSR';

    const trainDate = dayjs().format('YYYY-MM-DD');

    return Promise.all([
      axios.get(`${baseURL}/AvailableSeatStatusList/${originStationID}?$format=JSON`),
      axios.get(`${baseURL}/ODFare/${originStationID}/to/${destinationStationID}?$format=JSON`),
      axios.get(`${baseURL}/DailyTimetable/OD/${originStationID}/to/${destinationStationID}/${trainDate}?$format=JSON`)
    ]).then(values => {
      dispatch(fetchSuccess({
        availableSeats: values[0].data,
        price: values[1].data,
        schedule: values[2].data,
      }));
    }).catch(() => {
      dispatch(fetchFailure());
    });
  }
}