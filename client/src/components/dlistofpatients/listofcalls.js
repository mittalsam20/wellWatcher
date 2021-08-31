// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { useState } from "react";
import { useEffect, useState, useContext, createContext } from "react";
import CallCard from "./callcard";
import "./listofcalls.css";
// import { userData } from "../../context";
import axios from "axios";

const updateRecContext = createContext({
  filrecs: "",
  setFilRecs: () => {},
});

const ListOfCalls = () => {
  const [root, setRoot] = useState({});
  const [filrecs, setFilRecs] = useState([]);
  const [a, setA] = useState([]);

  const dbvalue = { filrecs, setFilRecs };

  const callSignPage = async () => {
    try {
      const res = await axios.get("/app/main", {
        withCredentials: true,
      });
      const userdata = await res.data;
      console.log("userdata listofcalls", userdata);
      setRoot(userdata);
      if (userdata) {
        console.log("userdata is there in list of calls..!!");
      } else {
        console.log("NO USER FOUND..!!");
      }
    } catch (err) {
      console.log("error i am finding", err);
    }
  };

  const retUrl = async () => {
    const res = await axios.get("/app/getrecurl");
    const data = await res.data;
    setA(data);
  };

  useEffect(() => {
    callSignPage();
    retUrl();
  }, []);

  useEffect(() => {
    console.log("filtered se pehle all recs", a);
    console.log("filtered se pehle root user", root);
    const userRecs = a.filter((rec) => rec.user === root._id);
    console.log("fitlered id recs", userRecs);
    setFilRecs(userRecs);
  }, [a, root]);

  useEffect(() => {}, [a, root, filrecs]);

  // console.log("just before map", a);
  // console.log(Array.isArray(a));
  return (
    <updateRecContext.Provider value={dbvalue}>
      <div className="loc-container">
        <div className="loc">
          <h3
            style={{
              margin: "0 5px 0px 0",
              padding: "20px 10px 0 10px",
              letterSpacing: ".1em",
              fontWeight: "600",
              fontSize: "30px",
            }}
          >
            Recording's
          </h3>
        </div>

        {filrecs.map((rec) => {
          const originalName = rec.recordingPath.slice(7);
          return (
            <CallCard
              Key={rec._id}
              tid={rec._id}
              name={rec.recordingFileName}
              date={rec.date}
              url={rec.recordingUrl}
              path={rec.recordingPath}
              recordingDuration={rec.duration}
              originalName={originalName}
            />
          );
        })}
      </div>
    </updateRecContext.Provider>
  );
};

export { updateRecContext };
export default ListOfCalls;
