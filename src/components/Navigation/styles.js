const navWidth = 210;

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  navigation: {
    [theme.breakpoints.up('sm')]: {
      width: navWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: navWidth,
  },
  selected: {
    backgroundColor: '#eee'
  }
});

export default styles;