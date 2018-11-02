import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

class Header extends Component {

  render() {
    const { classes, toggleNav } = this.props;

    return (
      <header>
        <AppBar className={ classes.appBar }>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => toggleNav()}
              className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="inherit">
              高鐵列車查詢系統
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleNav: PropTypes.func.isRequired
}

export default withStyles(styles)(Header);