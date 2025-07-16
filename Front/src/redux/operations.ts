import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const carsApi = axios.create({ baseURL: "https://car-rental-api.goit.global" });

export const getCarById = createAsyncThunk(
  "main/getCarById",
  async (id: string, thunkAPI) => {
    try {
      const response = await carsApi.get<Car>("/cars/" + id);
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);
