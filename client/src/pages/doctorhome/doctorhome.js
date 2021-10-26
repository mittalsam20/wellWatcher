import ListOfCalls from "../../components/dlistofpatients/listofcalls";
import UserMainCard from "../../components/usermaincard/usermaincard";
import HomeGraph from "../../components/homegraph/homegraph";
import MedFolder from "../../components/medicine/medfolder";

import "./doctorhome.css";
const DoctorHome = () => {
  return (
    <div className="doctorhomes">
      <div>
        <ListOfCalls />
      </div>
      <div>
        <UserMainCard />
        <MedFolder />
        <div>
          <HomeGraph />
          <HomeGraph />
          <HomeGraph />
          <HomeGraph />
          <HomeGraph />
        </div>
      </div>
    </div>
  );
};

export default DoctorHome;
