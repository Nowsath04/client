import axios from "axios";
import { config } from "../config";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get(`${config.api}/api/pizzas/getallpizzas`);
    console.log(response);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};

export const getPizzaById = (pizzaid) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    const response = await axios.post(`${config.api}/api/pizzas/getpizzabyid`, {
      pizzaid,
    });
    console.log(response);
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZABYID_FAILED", payload: error });
  }
};