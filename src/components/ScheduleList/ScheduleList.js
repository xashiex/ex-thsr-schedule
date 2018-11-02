import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ResultTable from '../ResultTable';
import styles from './styles';

import { columns, head, body } from '../ResultTable/testData';

class ScheduleList extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" color="inherit">
          2018/11/1 從 台北 到 高雄 列車時刻查詢結果：
        </Typography>
        <ResultTable
          columns={columns} 
          head={head}
          body={body}
          initSortBy="originTime"
          initAscending={true}
        />
      </div>
    );
  }
}

ScheduleList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ScheduleList);