import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
// import AccInfo from "./accinfo";
// import ResetPass from "./resetpass";
// import Nav from "../../components/navbar/nav";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={10}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    margin: "100px 10px 0 100px",
  },
}));

const UserAccount = () => {
  // const [root, setRoot] = useState({});
  // const history = useHistory();

  // const callMainPage = async () => {
  //   try {
  //     const res = await axios.get("/app/main", {
  //       withCredentials: true,
  //     });
  //     const userdata = res.data;
  //     setRoot(userdata);
  //     console.log("acccpage", userdata);
  //     // setUser(userdata);
  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.log("error i am finding", err);
  //     history.push("/login");
  //   }
  // };

  // useEffect(() => {
  //   callMainPage();
  // }, []);

  // useEffect(() => {}, [root]);

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Nav /> */}
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Account Info" {...a11yProps(0)} />
          <Tab label="Reset Password" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          {/* <AccInfo user={root} /> */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* <ResetPass user={root} /> */}
        </TabPanel>
      </div>
    </>
  );
};

export default UserAccount;
