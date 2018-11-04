import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

class StationsErrorModal extends Component {

  render() {
    const { classes, error } = this.props;
    return error ? (
      <Modal open>
        <div className={classes.paper}>
          <Typography variant="subtitle2">{error}</Typography>
        </div>
      </Modal>
    ) : null;
  }
}

StationsErrorModal.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.string
}

export default withStyles(styles)(StationsErrorModal);