import Meds from "./meds";
import CreateMed from "./createmed";
const MedFolder = () => {
  return (
    <div>
      <CreateMed />
      <hr />
      <Meds />
    </div>
  );
};

export default MedFolder;
