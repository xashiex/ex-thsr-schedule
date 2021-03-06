import React, { Component } from 'react';
import { HashRouter as Router } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import HeaderContainer from '../HeaderContainer';
import NavigationContainer from '../NavigationContainer';
import MainContent from '../MainContent';
import StationsErrorModalContainer from '../../containers/StationsErrorModalContainer';
import styles from './styles';

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={ classes.root }>
          <CssBaseline />
          <HeaderContainer />
          <NavigationContainer />
          <MainContent />
          <StationsErrorModalContainer />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
