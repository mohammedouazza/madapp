import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {
  AppBar,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { TOGGLE_NIGHT_MODE } from "../../actions/actionTypes";
import { connect } from "react-redux";

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
  link: {
    flexGrow: 1,
    height: 64,
    textAlign: "center",
    padding: "1%",
  },
}));

const Header = (props) => {
  console.log(props);
  const classes = useStyles();
  const nightMode = props.nightMode;
  const handleNightMode = () => {
    props.toggleNightMode();
  };
  document.getElementById("root").style.backgroundColor = nightMode
    ? "#212121"
    : "";
  document.getElementById("root").style.color = nightMode ? "white" : "";
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar style={{ backgroundColor: nightMode ? "#212121" : "" }}>
        <Typography variant="h6" className={classes.title}>
          <Link style={styles.link} to="/" className={classes.title}>
            <span>Divers</span>
          </Link>
        </Typography>
        <Link to="/play" className="link">
          <span>Play</span>
        </Link>
        <Link to="/learn" className="link">
          <span>Learn</span>
        </Link>

        <Link to="/practice" className="link">
          <span>Practice</span>
        </Link>
        <Switch
          checked={nightMode}
          onChange={handleNightMode}
          name="nightMode"
          inputProps={{ "aria-label": "checkbox" }}
        />
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    nightMode: state.nightMode.nightMode,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleNightMode: () => dispatch({ type: TOGGLE_NIGHT_MODE }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
