import axios from 'axios';

export const FETCH_SCHEDULE_REQUEST = 'FETCH_SCHEDULE_REQUEST';
export const FETCH_SCHEDULE_FAILURE = 'FETCH_SCHEDULE_FAILURE';
export const FETCH_SCHEDULE_SUCCESS = 'FETCH_SCHEDULE_SUCCESS';

const fetchRequest = (params) => ({
  type: FETCH_SCHEDULE_REQUEST,
  params,
});

const fetchFailure = (error = '取得列車時刻資料時，發生錯誤！') => ({
  type: FETCH_SCHEDULE_FAILURE,
  error, 
});

const fetchSuccess = (data) => ({
  type: FETCH_SCHEDULE_SUCCESS,
  data
});

export const fetchSchedule = ({trainDate, originStationID, destinationStationID}) => {
  return (dispatch) => {
    dispatch(fetchRequest({trainDate, originStationID, destinationStationID}));

    const baseURL = 'https://ptx.transportdata.tw/MOTC/v2/Rail/THSR';

    return Promise.all([
      axios.get(`${baseURL}/DailyTimetable/OD/${originStationID}/to/${destinationStationID}/${trainDate}?$format=JSON`),
      axios.get(`${baseURL}/ODFare/${originStationID}/to/${destinationStationID}?$format=JSON`)
    ]).then(values => {
      dispatch(fetchSuccess({
        schedule: values[0].data,
        price: values[1].data
      }));
    }).catch(() => {
      dispatch(fetchFailure());
    });
  }
}