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
    <div>
      <UserMainCard
        heading="Income"
        headingColor="green"
        first={content.monthlyIncome}
      />
    </div>
  );
};

export default UserHome;
