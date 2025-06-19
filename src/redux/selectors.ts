import type { StoreState } from "./store";

export const selectAllCars = (state: StoreState) => state.main.count;
