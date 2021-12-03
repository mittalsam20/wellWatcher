import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

import { Doughnut, Line } from "react-chartjs-2";
import "./cards.css";

const useStyles = makeStyles({
  root: {
    minWidth: "80%",
    maxWidth: "80%",
    maxHeight: 700,
    padding: 10,
  },
  cardInnerCont: {
    display: "flex",
    justifyContent: "space-around",
  },
});

const UserMainCard = (props) => {
  const { patientName, headingColor, first, second, third } = props;
  const classes = useStyles();
  return (
    <>
      <Card className={`${classes.root} home-cards`}>
        <CardContent className={`${classes.cardInnerCont}`}>
          <div>
            <img
              src="images/male.jpeg"
              alt="Patient_Photo"
              srcset=""
              style={{ borderRadius: "50%", height: "150px", width: "180px" }}
            />
          </div>
          <div>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: headingColor }}
            >
              Hello Wellwisher of Rahul Gupta
            </Typography>
            <div className="outerlatestUpdate">
              <Typography variant="body2" component="p">
                <div className="innerlatestUpdate">
                  <div>
                    <strong> Oxygen Level: </strong> 99 <br />
                  </div>
                  <div>
                    <strong> Body Temperature: </strong> <br />
                  </div>
                </div>
                <div className="innerlatestUpdate">
                  <div>
                    <strong> Weight: </strong> 76 <br />
                  </div>
                  <div>
                    <strong>Heart Rate: </strong> {second} <br />
                  </div>
                </div>
                <div className="innerlatestUpdate">
                  <div>
                    <strong> Blood Pressure: </strong> 143 <br />
                  </div>
                  <div>
                    <strong>Sugar Level: </strong> {second} <br />
                  </div>
                </div>
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* </Button> */}
    </>
  );
};

export default UserMainCard;
