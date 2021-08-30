import UserMainCard from "./usermaincard/usermaincard";
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
    </div>
  );
};

export default UserHome;
