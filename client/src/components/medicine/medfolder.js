import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Meds from "./meds";
// import CreateMed from "./createmed";
const MedFolder = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={{ display: "flex" }}
      >
        <TextField
          id="standard-basic"
          label="Medicine Name"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Dosage"
          variant="standard"
          type="number"
        />
        <div className="check">
          <div className="check">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="B"
              labelPlacement="top"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="L"
              labelPlacement="top"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="D"
              labelPlacement="top"
            />
          </div>
        </div>
        <TextField
          id="standard-basic"
          label="Instructions"
          variant="standard"
        />
        <Button size="small" variant="contained">
          Add Medicine
        </Button>
      </Box>
      {/* <CreateMed /> */}
      <hr />
      <Meds />
    </div>
  );
};

export default MedFolder;
