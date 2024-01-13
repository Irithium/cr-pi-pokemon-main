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
  GET_POKEMONS_BY_GEN,
  POST_POKEMON,
} from "../Actions/action-type";
const url = `http://localhost:3001/pokemon/`;

// GET ACTIONS
export const getTypes = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/types");
      dispatch({ type: GET_TYPES, payload: data });
    } catch (error) {
      alert(
        "No se han cargado correctamente los tipos, por favor recargue la pagina"
      );
    }
  };
};

export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(url);
      dispatch({
        type: GET_POKEMONS,
        payload: data,
      });
    } catch (error) {
      alert(
        "No se consiguieron pokemon o se acabo el tiempo de carga, por favor recargue la pagina",
        error
      );
    }
  };
};

export function postPokemon(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/pokemon",
        payload
      );
      return dispatch({
        type: POST_POKEMON,
        payload: response.data,
      });
    } catch (error) {
      alert(
        "El pokemon no fue creado de manera correcta, por favor intente de nuevo",
        error
      );
    }
  };
}

export const getPokemonsBygen = (payload) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${url}gen?gen=${payload}`);
      dispatch({
        type: GET_POKEMONS_BY_GEN,
        payload: data,
      });
    } catch (error) {
      alert(
        "No se consiguieron pokemon o se acabo el tiempo de carga, por favor recargue la pagina"
      );
    }
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
      alert("¡No hay pokemon con ese nombre, intenta con otro!");
    }
  };
};

export const getPokemonsById = (payload) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(url + payload);
      return dispatch({ type: SEARCH_BY_ID, payload: data });
    } catch (error) {
      alert("¡No hay pokemon con ese id, intenta con otro!");
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
      alert("¡No hay pokemon con ese id, intenta con otro!");
    }
  };
};

// CLEAN ACTION
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

// FILTER ACTIONS
export const filterSource = (payload) => {
  try {
    return {
      type: FILTER_BY_SOURCE,
      payload,
    };
  } catch (error) {
    alert("Error al filtrar por origen", error);
  }
};

export const filterType = (types) => {
  try {
    return { type: FILTER_BY_TYPE, payload: types };
  } catch (error) {
    alert("Error al filtrar por tipo/s", error);
  }
};

// ORDER ACTIONS
export const orderByName = (payload) => {
  try {
    return {
      type: ORDER_BY_NAME,
      payload,
    };
  } catch (error) {
    alert("Error al ordenar por nombre", error);
  }
};

export const orderByAttack = (payload) => {
  try {
    return {
      type: ORDER_BY_ATTACK,
      payload,
    };
  } catch (error) {
    alert("Error al ordenar por ataque", error);
  }
};

export const orderByDefense = (payload) => {
  try {
    return {
      type: ORDER_BY_DEFENSE,
      payload,
    };
  } catch (error) {
    alert("Error al ordenar por defensa", error);
  }
};

export const orderBySpeed = (payload) => {
  try {
    return {
      type: ORDER_BY_SPEED,
      payload,
    };
  } catch (error) {
    alert("Error al ordenar por velocidad", error);
  }
};

// !ACTION DELETE
export const deletePokemon = (id) => {
  return async function () {
    try {
      const deleted = await axios.delete(
        `http://localhost:3001/pokemon/delete/${id}`
      );
      return deleted;
    } catch (error) {
      alert("Error in deleting pokemon", error);
    }
  };
};

//!ACTION MODIFY
export const modifyPokemon = (id) => {
  return async function (dispatch) {
    try {
      const modified = await axios.get(`http://localhost:3001/pokemon/${id}`);
      return dispatch({ type: MODIFY_POKEMON, payload: modified.data });
    } catch (error) {
      alert(
        "No se pudo modificar de manera correcta, por favor intente de nuevo",
        error
      );
    }
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
