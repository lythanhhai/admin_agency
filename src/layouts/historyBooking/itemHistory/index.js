/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import * as React from "react";
// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";
import { deleteTripInstance, updateTripInstance } from "Apis/tripinstance.api";

function ItemHistory({
  stt,
  route,
  dateOrder,
  date,
  time,
  nameVehicle,
  numberTicket,
  totalPrice,
  hide,
  idTripInstance,
  idRoute,
  setIsSave,
  setNotification,
}) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [open, setOpen] = React.useState(false);
  const [dataUpdate, setDataUpdate] = React.useState({
    date: "",
    idRoute: 0,
    idTripInstance: 0,
    timeStart: "",
  });
  React.useEffect(() => {
    setDataUpdate({ date, idRoute, idTripInstance, timeStart: time });
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteTripInstance = () => {
    // alert(idTripInstance);
    deleteTripInstance(idTripInstance, setIsSave, setNotification);
  };
  const handleUpdateTripInstance = () => {
    updateTripInstance(dataUpdate, setIsSave, setNotification);
  };
  return (
    <MDBox
      pl={3}
      display="flex"
      height="3.5rem"
      // pt={2}
      borderBottom="0.2px solid #f0f2f5"
      width="100%"
      alignItems="center"
    >
      <MDTypography variant="caption" color="text" fontWeight="medium" marginLeft="5px" width="5%">
        {stt}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        ml={1}
        width="20%"
        textAlign="left"
      >
        {route}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        ml={1}
        width="15%"
        textAlign="left"
      >
        {dateOrder?.split("T")[0]}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        ml={1}
        width="15%"
        textAlign="left"
      >
        {date?.split("T")[0]}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        ml={1}
        width="13%"
        textAlign="left"
      >
        {time}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        ml={1}
        width="17%"
        textAlign="left"
      >
        {nameVehicle}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        ml={1}
        width="8%"
        textAlign="left"
      >
        {numberTicket}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        ml={1}
        width="8%"
        textAlign="left"
      >
        {totalPrice}
      </MDTypography>
      {hide ? (
        <MDBox display="flex" alignItems="center" mt={0} width="30%">
          {null}
        </MDBox>
      ) : (
        <MDBox display="flex" alignItems="center" mt={0} width="30%">
          <MDBox mr={0} ml={0}>
            <MDButton
              variant="text"
              color="error"
              onClick={() => {
                handleDeleteTripInstance();
              }}
            >
              <Icon>delete</Icon>&nbsp;delete
            </MDButton>
          </MDBox>
          <MDButton variant="text" color={darkMode ? "white" : "dark"} onClick={handleClickOpen}>
            <Icon>edit</Icon>&nbsp;edit
          </MDButton>
        </MDBox>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle ml="43%">Update</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Date"
            type="date"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            value={dataUpdate.date}
            onChange={(e) => {
              setDataUpdate({
                ...dataUpdate,
                date: e.target.value,
              });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Time"
            type="time"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            value={dataUpdate.timeStart}
            onChange={(e) => {
              setDataUpdate({
                ...dataUpdate,
                timeStart: `${e.target.value}:00`,
              });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleUpdateTripInstance();
              handleClose();
            }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </MDBox>
  );
}

ItemHistory.propTypes = {
  stt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  dateOrder: PropTypes.string.isRequired,
  nameVehicle: PropTypes.string.isRequired,
  numberTicket: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  idTripInstance: PropTypes.number.isRequired,
  idRoute: PropTypes.number.isRequired,
  hide: PropTypes.bool.isRequired,
  setIsSave: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
};

export default ItemHistory;
