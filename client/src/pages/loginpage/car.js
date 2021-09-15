import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import "./car.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Car = () => {
  return (
    <>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={true} // should stop playing on user interaction
        interval={2000}
        bullets={false}
        infinite={true}
        className="car-contain"
      >
        <div className=" fourth">
          <h1>
            Taking <span>Care </span> of children as
            <br />
            they are our own.
          </h1>
        </div>
        <div className=" first">
          <h1>
            You deserve a <span> break</span> We'll take care of the kids.
          </h1>
        </div>
        <div className=" sec">
          <h1>
            We Will Always Be There To
            <br />
            <span>Serve </span>You
          </h1>
        </div>
        <div className=" fifth">
          <h1>
            Your <span>Baby </span> is in safe hands
          </h1>
        </div>
      </AutoplaySlider>
    </>
  );
};

export default Car;
