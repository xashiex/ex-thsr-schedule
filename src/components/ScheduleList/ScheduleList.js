import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { getScheduleItem } from '../../utils';
import ResultTable from '../ResultTable';
import styles from './styles';

import { columns, head } from '../ResultTable/data';

const getScheduleInfo = (stations, {trainDate, originStationID, destinationStationID}) => {
  const trainDateStr = trainDate.replace('-', '/');
  const originStationName = stations.list.find(station => station.StationID === originStationID).StationName.Zh_tw;
  const destinationStationName = stations.list.find(station => station.StationID === destinationStationID).StationName.Zh_tw;
  return `${trainDateStr} 從 ${originStationName} 到 ${destinationStationName} 列車時刻查詢結果：`;
}

const getTableBody = (scheduleData, priceData) => scheduleData.map(schedule => {
  return getScheduleItem(schedule, priceData[0].Fares, '標準');
});

class ScheduleList extends Component {

  render() {
    const { classes, stations, schedule } = this.props;

    const info = schedule.params ? getScheduleInfo(stations, schedule.params) : null;
    const tableBody = schedule.data ? getTableBody(schedule.data.schedule, schedule.data.price) : null;

    return (
      <div className={classes.root}>
        { schedule.error
          ? <Typography variant="subtitle1" color="inherit">
              {schedule.error}
            </Typography>
          : <Fragment>
              { info &&
                <Typography variant="subtitle1" color="inherit">
                  {info}
                </Typography>
              }
              { tableBody &&
                <ResultTable
                  columns={columns} 
                  head={head}
                  body={tableBody}
                  initSortBy="originTime"
                  initAscending={true}
                />
              }
            </Fragment>
        }
      </div>
    );
  }
}

ScheduleList.propTypes = {
  classes: PropTypes.object.isRequired,
  stations: PropTypes.object,
  schedule: PropTypes.object,
}

export default withStyles(styles)(ScheduleList);