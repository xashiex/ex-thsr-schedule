const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});

export default styles;