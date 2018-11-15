import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SchedulePage from '../../pages/SchedulePage';
import AvailableSeatsPage from '../../pages/AvailableSeatsPage';
import styles from './styles.js';

class MainContent extends Component {

  render() {
    const { classes } = this.props;

    return (
      <main className={ classes.content }>
        <div className={ classes.toolbar } />
        <Switch>
          <Route path="*/available-seats" component={AvailableSeatsPage} />
          <Route exact component={SchedulePage} />
        </Switch>
      </main>
    );
  }
}

MainContent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MainContent);