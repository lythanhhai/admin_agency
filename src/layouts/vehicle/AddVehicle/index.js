import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TextField from "@mui/material/TextField";
import MDButton from "components/MDButton";
import { useState } from "react";
import { createVehicle } from "Apis/vehicle.api";
import { PropTypes } from "prop-types";

function AddVehicle({ setClickSave }) {
  const [vehicle, setVehicle] = useState("");
  const handleCreateVehicle = () => {
    createVehicle(vehicle);
    setClickSave(true);
  };
  return (
    <Card sx={{ height: "350px" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={4}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Add vehicle
        </MDTypography>
      </MDBox>
      <MDBox pt={3} pb={2} px={4}>
        <MDBox mb={2} display="flex">
          <MDTypography variant="caption" color="text" fontWeight="bold" width="80px">
            Name
          </MDTypography>
          <MDBox ml={4} width="15rem">
            <TextField
              label="name"
              variant="outlined"
              sx={{ mt: -1, width: "24ch" }}
              onChange={(e) => {
                setVehicle(e.target.value);
              }}
            />
          </MDBox>
        </MDBox>
        <MDBox mb={2} display="flex">
          <MDTypography variant="caption" color="text" fontWeight="bold" width="80px">
            License Plate
          </MDTypography>
          <MDBox ml={4} width="15rem">
            <TextField
              label="licensePlate"
              variant="outlined"
              sx={{ mt: -1, width: "24ch" }}
              onChange={(e) => {
                setVehicle(e.target.value);
              }}
            />
          </MDBox>
        </MDBox>
        <MDBox mb={2} display="flex">
          <MDTypography variant="caption" color="text" fontWeight="bold" width="80px">
            Quantity seat
          </MDTypography>
          <MDBox ml={4} width="15rem">
            <TextField
              label="quantityseat"
              variant="outlined"
              sx={{ mt: -1, width: "24ch" }}
              onChange={(e) => {
                setVehicle(e.target.value);
              }}
            />
          </MDBox>
        </MDBox>
        <MDBox mb={2} display="flex">
          <MDTypography variant="caption" color="text" fontWeight="bold" width="80px">
            Status
          </MDTypography>
          <MDBox ml={4} width="15rem">
            <TextField
              label="status"
              variant="outlined"
              sx={{ mt: -1, width: "24ch" }}
              onChange={(e) => {
                setVehicle(e.target.value);
              }}
            />
          </MDBox>
        </MDBox>
        <MDBox mt={1} mb={2} ml="83%" width="50px">
          <MDButton
            component=""
            to="/admin/dashboard"
            variant="gradient"
            fullWidth
            color="info"
            onClick={() => {
              handleCreateVehicle();
            }}
          >
            Lưu
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}
AddVehicle.propTypes = {
  setClickSave: PropTypes.func.isRequired,
};

export default AddVehicle;
