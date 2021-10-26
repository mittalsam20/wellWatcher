import UserMainCard from "../../components/usermaincard/usermaincard";
import HomeGraph from "../../components/homegraph/homegraph";
import "./userhome.css";
const content = {
  param1: "98",
  param2: "98",
  param3: "98",
  param4: "98",
  param5: "98",
};

const UserHome = () => {
  return (
    <div className="cont">
      <div className="maincard">
        <UserMainCard
          patientName="Pateint Name"
          headingColor="green"
          first={content.param1}
        />
      </div>
      <div className="allgraph">
        <HomeGraph />
        <HomeGraph />
        <HomeGraph />
        <HomeGraph />
        <HomeGraph />
      </div>
    </div>
  );
};

export default UserHome;
