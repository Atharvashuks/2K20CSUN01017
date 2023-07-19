import React from 'react'
import { baseURL } from "../Utils/baseURL";
import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: baseURL,
});

const getAllTrains = () => async () => {
  try {
    const { data } = await instance.get("api/trains/getTrains", {
    //   headers: {
    //     Authorization: `Bearer ${authToken}`,
    //   },
    });

    toast.success(data.message);

      console.log(data);

    
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.message);
  }
};

export const allTrains = () => {
  return (
    {{
    getAllTrains()
    }}
    <div>data</div>
  )
}
