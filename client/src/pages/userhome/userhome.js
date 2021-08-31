import UserMainCard from "./usermaincard/usermaincard";
import HomeGraph from "../../components/homegraph/homegraph";
import "./userhome.css";
const content = {
  monthlyIncome: "Monthly Income",
  MTD: "mtd ki value",
  today: "today ki value",
  totalInvestment: "Total investment so far",
  totalSavings: "saving this year",
};

const UserHome = () => {
  return (
    <div className="cont">
      <div className="maincard">
        <UserMainCard
          patientName="Pateint Name"
          headingColor="green"
          first={content.monthlyIncome}
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
