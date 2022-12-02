import axios from "axios";
import { STORAGE, getLocalStorage } from "Utils/storage";
import baseUrl from "./config";

const getVehicle = (setVehicles) => {
  axios({
    method: "get",
    url: `${baseUrl}all-vehicle-agency`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      // console.log(body);
      setVehicles(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllVehicle = (setAllVehicles) => {
  axios({
    method: "get",
    url: `${baseUrl}all-vehicle`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      // console.log(body);
      setAllVehicles(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createVehicle = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}create-vehicle`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateVehicle = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}update-vehicle`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getVehicle, createVehicle, updateVehicle, getAllVehicle };
