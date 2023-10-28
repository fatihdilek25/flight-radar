import { configureStore } from "@reduxjs/toolkit";
import flightSlices from "./slices/flightSlices";


export default configureStore({ reducer: flightSlices })