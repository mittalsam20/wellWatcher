import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import DeleteIcon from "@material-ui/icons/Delete";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
// import {
//   recContext,
//   recurldata,
//   mlContext,
//   durContext,
// } from "../../pages/homepage/homepage";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import React, { useContext, useEffect, useState } from "react";
import { updateRecContext } from "./listofcalls";
import axios from "axios";
// import { saveAs } from "file-saver";
import ArchiveIcon from "@material-ui/icons/Archive";
import UnarchiveIcon from "@material-ui/icons/Unarchive";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles({
  root: {
    minWidth: 290,
    maxWidth: 300,
    maxHeight: 100,
    margin: "0 8px 8px 8px",
    boxShadow: "1px 1px 3px rgb(138, 137, 137)",
    transition: "transform .05s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(240,240,240)",
      transform: "scale(1.04)",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
    marginTop: 8,
  },
  btn: {
    position: "relative",
    bottom: "82px",
    left: "12px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "15px",
    float: "right",
    color: "#3f51b5",
    border: "none",
    borderRadius: "6px",
    width: "10px",
    height: "36",
    cursor: "pointer",
    outline: "none",
    zIndex: "10",
    "&:hover": {
      backgroundColor: "rgb(200,200,200)",
    },
  },
  dbtn: {
    position: "relative",
    bottom: "80px",
    left: "30px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // marginRight: "10px",
    float: "right",
    color: "#3f51b5",
    border: "none",
    borderRadius: "6px",
    width: "10px",
    height: "36",
    cursor: "pointer",
    outline: "none",
    zIndex: "10",
    "&:hover": {
      backgroundColor: "rgb(200,200,200)",
    },
  },
  ebtn: {
    position: "relative",
    bottom: "90px",
    left: "223px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "1px",
    // marginRight: "10px",
    color: "#3f51b5",
    border: "none",
    borderRadius: "6px",
    width: "10px",
    height: "36",
    cursor: "pointer",
    outline: "none",
    zIndex: "11",
    "&:hover": {
      backgroundColor: "rgb(200,200,200)",
    },
    "&:hover .tooltiptext": {
      visibility: "visible",
    },
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CallCard = (props) => {
  // const { temp, setTemp } = useContext(recurldata); //url link for current selected video
  // const { curRec, setCurRec } = useContext(recContext); // contains key for cur rec then transffered to all comp
  // const { mlData, setMldata } = useContext(mlContext); //all mldata for current recording
  // const { filrecs, setFilRecs } = useContext(updateRecContext); //filtered recording for current user
  const [editopen, setEditOpen] = useState(false); //switch for edit modal
  const [newName, setNewname] = useState("Cannot Be Empty" || "");
  const [delOpen, setDelopen] = useState(false); //switch for del alert modal
  // const { curDur, setCurDur } = useContext(durContext);
  // const getTxt = async (a, b, c) => {
  //   console.log(a, b, c);
  //   const summaryres = await axios.get(a);
  //   const audiores = await axios.get(b);
  //   const pdfres = await axios.get(c);
  //   setMldata({
  //     summarytxt: summaryres.data || "No Summary Extracted Yet",
  //     audiotxt: audiores.data || "No Transcription Found Yet",
  //     pdfurl: pdfres.data,
  //   });
  //   console.log("text ka data", mlData.audiotxt);
  // };

  // const retUrl = async () => {
  //   const res = await axios.get("/app/getrecurl");
  //   const data = await res.data;
  //   const response = await axios.get("/app/main", {
  //     withCredentials: true,
  //   });
  //   const userdata = await response.data;
  //   const userRecs = data.filter((rec) => rec.user === userdata._id);
  //   setFilRecs(userRecs);
  // };

  // useEffect(() => {
  //   console.log(mlData);
  // }, [mlData]);

  // useEffect(() => {
  //   var data = JSON.stringify({
  //     recordingFileName: newName.concat(".webm"),
  //   });
  //   var config = {
  //     method: "patch",
  //     url: `/app/rename/${props.Key}`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //       retUrl();
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [newName]);

  // console.log("inside callcard", temp);

  const classes = useStyles();
  // console.log("recirding ka name", props.name);

  const editDial = () => {
    console.log(editopen);
    return (
      <div>
        <Dialog
          open={editopen}
          onClose={() => {
            setEditOpen(false);
          }}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Rename File</DialogTitle>
          <DialogContent>
            <TextField
              onChange={(e) => {
                setNewname(e.target.value);
              }}
              autoFocus
              margin="dense"
              id="name"
              label="New Name"
              type="text"
              fullWidth
              autoComplete="off"
              value={newName}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setEditOpen(false);
              }}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (newName === "") {
                  setNewname("Cannot Be Empy");
                } else if (newName.length > 21) {
                  setNewname(newName.slice(0, 21));
                }
                setEditOpen(false);
              }}
              color="primary"
            >
              Rename
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  const delalert = () => {
    return (
      <div>
        <Dialog
          open={delOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => {
            setDelopen(false);
          }}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{props.name}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <strong>
                After this you won't be able to access its summary or pdf
              </strong>
              <br />
              Do you really want to delete..?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setDelopen(false);
              }}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              // onClick={() => {
              //   axios
              //     .delete(`app/delrecurl/${props.Key}`)
              //     .then((res) => {
              //       console.log(JSON.stringify(res.data));
              //       retUrl();
              //     })
              //     .catch((err) => {
              //       console.log(err);
              //     });
              //   setDelopen(false);
              // }}
              color="primary"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  useEffect(() => {}, [editopen, delOpen]);
  return (
    <>
      <Card
        className={classes.root}
        // style={{
        //   backgroundColor: curRec === props.tid && "rgba(180,180,180,1)",
        // }}
      >
        <Button
        // onClick={() => {
        //   setTemp(`/app${props.url}`);
        //   setCurDur(props.recordingDuration);

        //   setCurRec(props.Key);
        //   console.log(temp);
        //   getTxt(
        //     `/ml/return-summary/${props.originalName
        //       .substring(0, props.originalName.length - 5)
        //       .concat("_summary.txt")}`,
        //     `/ml/return-transcript/${props.originalName
        //       .substring(0, props.originalName.length - 5)
        //       .concat(".txt")}`,
        //     `/ml/return-presentation/${props.originalName
        //       .substring(0, props.originalName.length - 5)
        //       .concat(".pdf")}`
        //     // "http://34.133.119.75/ml/return-summary/recording_1625899142046_summary.txt"
        //     // "http://localhost:5000/app/recording/recording_1625921327939.txt"
        //   );
        // }}
        >
          <CardContent
            style={{
              padding: "10px 10px 10px 0",
              fontSize: "1px",
              textAlign: "left",
            }}
          >
            <Typography
              component="h2"
              style={{
                fontWeight: "900",
                fontSize: "16px",
                marginBottom: "16px",
              }}
            >
              {props.name.substring(0, props.name.length - 5)}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              {props.date}
            </Typography>
          </CardContent>
        </Button>
        {editDial()}
        {delalert()}

        <Button
          size="small"
          color="primary"
          className={classes.ebtn}
          // onClick={(e) => {
          //   e.preventDefault();
          //   setEditOpen(true);
          //   console.log(editopen);
          // }}
        >
          <EditIcon style={{ fontSize: "20px" }} />
        </Button>

        <Button
          size="small"
          color="primary"
          className={classes.btn}
          // onClick={(e) => {
          //   e.preventDefault();
          //   console.log("ida ida", props.Key);
          //   setDelopen(true);

          //   console.log("ss");
          // }}
        >
          <DeleteIcon />
        </Button>

        <Button
          size="small"
          color="primary"
          // className={classes.dbtn}
          // onClick={(e) => {
          //   e.preventDefault();
          //   saveAs(`/app${props.url}`, props.name);
          //   saveAs(mlData.pdfurl, props.name);
          // }}
        >
          <GetAppRoundedIcon />
        </Button>
      </Card>
    </>
  );
};

export default CallCard;
