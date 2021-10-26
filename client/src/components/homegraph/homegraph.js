import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Doughnut, Line } from "react-chartjs-2";
// import Button from "@material-ui/core/Button";
// import "./cards.css";

const useStyles = makeStyles({
  root: {
    minWidth: 610,
    maxWidth: 610,
    maxHeight: 400,
    margin: 15,
  },
});

const ldata = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
const pdata = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, .4)",
        "rgba(54, 162, 235, .4)",
        "rgba(255, 206, 86, .4)",
        "rgba(75, 192, 192, .4)",
        "rgba(153, 102, 255, .4)",
        "rgba(255, 159, 64, .4)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1.5,
    },
  ],
};

const HomeGraph = (props) => {
  //   const { heading, headingColor, first, second, third } = props;
  const classes = useStyles();
  return (
    <>
      {/* <Button> */}
      <Card className={`${classes.root} home-cards `}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            // style={{ color: headingColor }}
          >
            {/* {heading} */}
          </Typography>
          <Typography variant="body2" component="p">
            {/* <strong> MTD: </strong> {first} <br />
            {second && (
              <>
                <strong> Today: </strong> {second} <br />
              </>
            )} */}
          </Typography>
          <br />
          <div style={{ maxWidth: "100%" }}>
            <Line data={ldata} options={options} />
          </div>
        </CardContent>
      </Card>
      {/* </Button> */}
    </>
  );
};

export default HomeGraph;
