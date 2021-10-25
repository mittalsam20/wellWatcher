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
            Taking <span>Care </span> of patients as
            <br />
            they are our own family members.
          </h1>
        </div>
        <div className=" first">
          <h1>
            Nurses & Doctors deserve a <span> break</span> Let us make your work
            easy.
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
            You are in <span>safe </span> hands.
          </h1>
        </div>
      </AutoplaySlider>
    </>
  );
};

export default Car;
