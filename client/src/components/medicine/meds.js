import FormControlLabel from "@material-ui/core/FormControlLabel";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import { Doughnut, Line } from "react-chartjs-2";
// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import "./meds.css";

const useStyles = makeStyles({
    root: {
        minWidth: "80%",
        maxWidth: "80%",
        maxHeight: 700,
        padding: 10,
    },
});

const Meds = (props) => {
    const { patientName, headingColor, first, second, third } = props;
    const classes = useStyles();
    return ( <
        >
        <
        Card className = { `${classes.root} home-cards` } >
        <
        CardContent className = { `${classes.cardInnerCont}` } >
        <
        div className = "ltr" >
        <
        div className = "down" >
        <
        h3 > Medicine Name < /h3> <
        p > Crocin < /p> <
        /div> <
        div className = "down" >
        <
        h3 > Dosage < /h3> <
        /div> <
        div className = "check" >
        <
        div className = "check" >
        <
        FormControlLabel control = { < Checkbox defaultChecked / > }
        label = "B"
        labelPlacement = "top" /
        >
        <
        FormControlLabel control = { < Checkbox defaultChecked / > }
        label = "L"
        labelPlacement = "top" /
        >
        <
        FormControlLabel control = { < Checkbox defaultChecked / > }
        label = "D"
        labelPlacement = "top" /
        >
        <
        /div> <
        /div> <
        div className = "down" >
        <
        h3 > Instructions < /h3> <
        /div> <
        /div> <
        /CardContent> <
        /Card> { /* </Button> */ } <
        />
    );
};

export default Meds;