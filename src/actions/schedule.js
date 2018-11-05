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
    
    const data = {
      schedule: null,
      price: null
    };

    return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/DailyTimetable/OD/${originStationID}/to/${destinationStationID}/${trainDate}?$format=JSON`)
      .then(
        response => {
          data.schedule = response.data;
          return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/ODFare/${originStationID}/to/${destinationStationID}?$format=JSON`);
        }
      )
      .then(
        response => {
          data.price = response.data;
          dispatch(fetchSuccess(data));
        }
      )
      .catch(() => {
        dispatch(fetchFailure());
      })
  }
}