import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Doughnut, Line } from "react-chartjs-2";
// import Button from "@material-ui/core/Button";
import "./cards.css";

// 1.50_Crore

const useStyles = makeStyles({
  root: {
    minWidth: 610,
    maxWidth: 610,
    maxHeight: 700,
    padding: 10,
  },
  cardInnerCont: {
    display: "flex",
    justifyContent: "space-between",
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
            <img src="" alt="Patient_Photo" srcset="" />
          </div>
          <div>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: headingColor }}
            >
              Hello Wellwisher of {patientName}
            </Typography>
            <div className="outerlatestUpdate">
              <Typography variant="body2" component="p">
                <div className="innerlatestUpdate">
                  <div>
                    <strong> Oxygen Level: </strong> {first} <br />
                  </div>
                  <div>
                    <strong> Body Temperature: </strong> {second} <br />
                  </div>
                </div>
                <div className="innerlatestUpdate">
                  <div>
                    <strong> Weight: </strong> {first} <br />
                  </div>
                  <div>
                    <strong>Heart Rate: </strong> {second} <br />
                  </div>
                </div>
                <div className="innerlatestUpdate">
                  <div>
                    <strong> Blood Pressure: </strong> {first} <br />
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
