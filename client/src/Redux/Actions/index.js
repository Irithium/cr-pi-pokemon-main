import axios from "axios";
import {
  GET_POKEMONS,
  MODIFY_POKEMON,
  GET_POKEMON_DETAIL,
  GET_TYPES,
  FILTER_BY_TYPE,
  FILTER_BY_SOURCE,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  ORDER_BY_DEFENSE,
  SEARCH_BY_NAME,
  SEARCH_BY_ID,
  CLEAN_DETAIL,
  ORDER_BY_SPEED,
  RESET,
} from "../Actions/action-type";
const url = `http://localhost:3001/pokemon/`;

// GET ACTIONS
export const getTypes = () => {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:3001/types");
    dispatch({ type: GET_TYPES, payload: data });
  };
};

export const getPokemons = () => {
  return async function (dispatch) {
    const { data } = await axios.get(url);
    dispatch({ type: GET_POKEMONS, payload: data });
  };
};

export const getPokemonsByName = (payload) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${url}name?name=${payload}`);

      return dispatch({
        type: SEARCH_BY_NAME,
        payload: data,
      });
    } catch (error) {
      alert("¡No hay pokemon con ese Nombre, intenta de nuevo!");
    }
  };
};

export const getPokemonsById = (payload) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(url + payload);
      return dispatch({ type: SEARCH_BY_ID, payload: data });
    } catch (error) {
      alert("¡No hay pokemon con ese ID, intenta de nuevo!");
    }
  };
};

export const getDetails = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/pokemon/${id.pokemonId}`
      );
      dispatch({ type: GET_POKEMON_DETAIL, payload: data });
    } catch (error) {
      alert("¡No hay nada en esta ruta!");
    }
  };
};

// CLEAN ACTION
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

// FILTER ACTIONS
export const filterSource = (payload) => {
  return {
    type: FILTER_BY_SOURCE,
    payload,
  };
};

export const filterType = (types) => {
  return { type: FILTER_BY_TYPE, payload: types };
};

// ORDER ACTIONS
export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};
export const orderByAttack = (payload) => {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
};
export const orderByDefense = (payload) => {
  return {
    type: ORDER_BY_DEFENSE,
    payload,
  };
};
export const orderBySpeed = (payload) => {
  return {
    type: ORDER_BY_SPEED,
    payload,
  };
};

// !ACTION DELETE
export const deletePokemon = (id) => {
  return async function () {
    const deleted = await axios.delete(
      `http://localhost:3001/pokemon/delete/${id}`
    );
    return deleted;
  };
};

//!ACTION MODIFY
export const modifyPokemon = (id) => {
  return async function (dispatch) {
    const modified = await axios.get(`http://localhost:3001/pokemon/${id}`);
    return dispatch({ type: MODIFY_POKEMON, payload: modified.data });
  };
};

//!ACTION RESET
export function reset() {
  return async function (dispatch) {
    try {
      dispatch({
        type: RESET,
      });
    } catch (error) {
      console.log("error");
    }
  };
}
