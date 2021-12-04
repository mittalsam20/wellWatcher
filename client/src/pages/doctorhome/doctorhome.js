// const  = () => {
//   return (
//     <div className="doctorhomes">
//       <div>
//         <ListOfCalls />
//       </div>
//       <div>
//         <UserMainCard />
//         <MedFolder />
//         <div>
//           <HomeGraph />
//           <HomeGraph />
//           <HomeGraph />
//           <HomeGraph />
//           <HomeGraph />
//         </div>
//       </div>
//     </div>
//   );
// };

import ListOfCalls from "../../components/dlistofpatients/listofcalls";
import UserMainCard from "../../components/usermaincard/usermaincard";
import HomeGraph from "../../components/homegraph/homegraph";
import MedFolder from "../../components/medicine/medfolder";
import "./doctorhome.css";

import { createContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useHistory } from "react-router-dom";

//-------------------------Theme
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,
    direction: "row",
    justifyContent: "start",
    alignItems: "safe stretch",
    display: "flex",
    flexWrap: "nowrap",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

//--------------------Creating Context API
const recurldata = createContext({
  temp: ["sasas"],
  setTemp: () => {},
});
//-----------------------------HOMEPAGE RAFCE
const DoctorHome = () => {
  // const fetchvideo = async () => {
  //   try {
  //     // const vidblob = transfer();
  //     const vidblob = "ok";
  //     const vid = await axios.post("/app/upload", vidblob);
  //     const temp = await vid.data;
  //     console.log(temp);
  //   } catch (err) {
  //     console.log("video error", err);
  //   }
  // };
  // const [user, setUser] = useState({});

  const [temp, setTemp] = useState([]);
  const value = { temp, setTemp };

  const history = useHistory();
  const callMainPage = async () => {
    try {
      const res = await axios.get("/app/main", {
        withCredentials: true,
      });
      const userdata = await res.data;
      console.log("assemble", userdata);
      // setUser(userdata);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("error i am finding", err);
      history.push("/");
    }
  };

  useEffect(() => {
    // callMainPage();
  }, []);

  const classes = useStyles();

  return (
    // <recurldata.Provider value={value}>
    <>
      <Grid
        container
        className={classes.root}
        spacing={2}
        style={{ flexWrap: "nowrap", maxWidth: "100%", marginTop: "10px" }}
      >
        <Grid item>
          <ListOfCalls />
        </Grid>
        <Grid
          item
          style={{
            paddingLeft: "0px",
            paddingRight: "8px",
            maxWidth: "100%",
            minWidth: "95%",
          }}
        >
          <div className="rightdoc">
            <UserMainCard />
            <MedFolder />

            <div className="graph">
              <HomeGraph />
              <HomeGraph />
              <HomeGraph />
              <HomeGraph />
              <HomeGraph />
            </div>
          </div>
        </Grid>
        {/* <Grid
            item
            style={{
              paddingLeft: "0",
              paddingRight: "0",
              maxWidth: "25%",
              flexShrink: "3",
            }}
          >
            <Notes />
          </Grid> */}
      </Grid>
    </>
    // </recurldata.Provider>
  );
};

export default DoctorHome;
