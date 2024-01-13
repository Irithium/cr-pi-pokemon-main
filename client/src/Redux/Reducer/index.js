import {
  GET_POKEMONS,
  MODIFY_POKEMON,
  DELETE_POKEMON,
  GET_POKEMON_DETAIL,
  GET_TYPES,
  FILTER_BY_TYPE,
  FILTER_BY_SOURCE,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  ORDER_BY_SPEED,
  ORDER_BY_DEFENSE,
  SEARCH_BY_NAME,
  SEARCH_BY_ID,
  CLEAN_DETAIL,
  RESET,
  GET_POKEMONS_BY_GEN,
  POST_POKEMON,
} from "../Actions/action-type";

const initialState = {
  pokemon: [],
  pokemonBackup: [],
  types: [],
  pokemonsFilter: [],
  pokemonDetail: [],
  doubleFilter: [],
  modifiedPokemon: [],
  filteredtype: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //!CASOS GET
    case GET_POKEMONS:
      return {
        ...state,
        pokemon: action.payload,
        pokemonsFilter: action.payload,
        pokemonBackup: action.payload,
        doubleFilter: [],
      };

    case GET_POKEMONS_BY_GEN:
      return {
        ...state,
        pokemon: action.payload,
        pokemonsFilter: action.payload,
        pokemonBackup: action.payload,
        doubleFilter: [],
      };

    case GET_TYPES:
      return { ...state, types: action.payload };

    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };

    //! CASO POST
    case POST_POKEMON:
      return {
        ...state,
      };

    //!CASO CLEAN
    case CLEAN_DETAIL:
      return {
        ...state,
        pokemonDetail: {},
      };

    //!CASOS SEARCH
    case SEARCH_BY_NAME:
      return {
        ...state,
        pokemon: action.payload,
      };

    case SEARCH_BY_ID:
      return { ...state, pokemon: action.payload };

    //!CASOS DE ORDEN
    case ORDER_BY_NAME:
      let orderName;
      if (action.payload === "asc") {
        orderName = state.pokemon.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
      } else if (action.payload === "desc") {
        orderName = state.pokemon.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
      } else
        orderName = state.pokemon.sort(function (a, b) {
          if (isNaN(a.id)) {
            return -1;
          }
          if (isNaN(b.id)) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          if (b.id > a.id) {
            return -1;
          }

          return orderName;
        });

      return {
        ...state,
        pokemon: [...orderName],
      };

    case ORDER_BY_ATTACK:
      let orderAttack;
      if (action.payload === "asc") {
        console.log(state.pokemon);
        orderAttack = state.pokemon.sort(function (a, b) {
          if (a.attack > b.attack) {
            return -1;
          }
          if (b.attack > a.attack) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload === "desc") {
        orderAttack = state.pokemon.sort(function (a, b) {
          if (a.attack > b.attack) {
            return 1;
          }
          if (b.attack > a.attack) {
            return -1;
          }
          return 0;
        });
      } else {
        orderAttack = state.pokemon.sort(function (a, b) {
          if (isNaN(a.id)) {
            return -1;
          }
          if (isNaN(b.id)) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          if (b.id > a.id) {
            return -1;
          }

          return orderAttack;
        });
      }

      return {
        ...state,
        pokemon: [...orderAttack],
      };

    case ORDER_BY_DEFENSE:
      let orderDefense;
      if (action.payload === "asc") {
        orderDefense = state.pokemon.sort(function (a, b) {
          if (a.defense > b.defense) {
            return -1;
          }
          if (b.defense > a.defense) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload === "desc") {
        orderDefense = state.pokemon.sort(function (a, b) {
          if (a.defense > b.defense) {
            return 1;
          }
          if (b.defense > a.defense) {
            return -1;
          }
          return 0;
        });
      } else {
        orderDefense = state.pokemon.sort(function (a, b) {
          if (isNaN(a.id)) {
            return -1;
          }
          if (isNaN(b.id)) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          if (b.id > a.id) {
            return -1;
          }

          return orderDefense;
        });
      }

      return {
        ...state,
        pokemon: [...orderDefense],
      };

    case ORDER_BY_SPEED:
      let orderSpeed;
      if (action.payload === "asc") {
        orderSpeed = state.pokemon.sort(function (a, b) {
          if (a.speed > b.speed) {
            return -1;
          }
          if (b.speed > a.speed) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload === "desc") {
        orderSpeed = state.pokemon.sort(function (a, b) {
          if (a.speed > b.speed) {
            return 1;
          }
          if (b.speed > a.speed) {
            return -1;
          }
          return 0;
        });
      } else {
        orderSpeed = state.pokemon.sort(function (a, b) {
          if (isNaN(a.id)) {
            return -1;
          }
          if (isNaN(b.id)) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          if (b.id > a.id) {
            return -1;
          }

          return orderSpeed;
        });
      }

      return {
        ...state,
        pokemon: [...orderSpeed],
      };

    //!CASOS DE FILTRO
    case FILTER_BY_SOURCE:
      const filterArr = state.filteredtype.length;
      let filteredPokemons;
      if (filterArr === 0) {
        console.log("No hay filtro aplicado");
        if (action.payload === "ALL") {
          filteredPokemons = state.pokemonsFilter;
          return {
            ...state,
            pokemon: filteredPokemons,
            doubleFilter: filteredPokemons,
          };
        }

        if (action.payload === "API") {
          filteredPokemons = state.pokemonsFilter.filter(
            (poke) => !isNaN(poke.id)
          );
          return {
            ...state,
            pokemon: filteredPokemons,
            doubleFilter: filteredPokemons,
          };
        }

        if (action.payload === "DB") {
          filteredPokemons = state.pokemonsFilter.filter((poke) =>
            isNaN(poke.id)
          );
          return {
            ...state,
            pokemon: filteredPokemons,
            doubleFilter: filteredPokemons,
          };
        }

        return {
          ...state,
          pokemon: [...filteredPokemons],
        };
      } else {
        console.log("Ya tiene un filtro por type");
        if (action.payload === "ALL") {
          filteredPokemons = state.filteredtype;
          return {
            ...state,
            pokemon: filteredPokemons,
          };
        }
        if (action.payload === "API") {
          filteredPokemons = state.filteredtype.filter(
            (poke) => !isNaN(poke.id)
          );
          return {
            ...state,
            pokemon: filteredPokemons,
          };
        }
        if (action.payload === "DB") {
          filteredPokemons = state.filteredtype.filter((poke) =>
            isNaN(poke.id)
          );
          return {
            ...state,
            pokemon: filteredPokemons,
          };
        }
        return {
          ...state,
          pokemon: filteredPokemons,
        };
      }

    case FILTER_BY_TYPE:
      let filteredTypePokemons;

      action.payload = action.payload.toLowerCase();
      if (state.doubleFilter.length > 0) {
        console.log("Tiene un filtro aplicado, toca combinar");
        if (action.payload === "all") {
          filteredTypePokemons = state.doubleFilter;
        } else {
          filteredTypePokemons = state.doubleFilter.filter((poke) => {
            if (isNaN(poke.id)) {
              if (poke.Types[0].typeName === action.payload) return poke;
              if (poke.Types[1].typeName && poke.Types[1] === action.payload)
                return poke;
            }
            if (poke.Types[0] === action.payload) return poke;
            if (poke.Types[1] && poke.Types[1] === action.payload) return poke;
          });

          return {
            ...state,
            pokemon: filteredTypePokemons,
            filteredtype: filteredTypePokemons,
          };
        }

        return {
          ...state,
          pokemon: [...filteredTypePokemons],
        };
      } else {
        console.log(action.payload);
        if (action.payload === "all") {
          filteredTypePokemons = state.pokemonsFilter;
        } else {
          filteredTypePokemons = state.pokemonsFilter.filter((poke) => {
            if (isNaN(poke.id)) {
              if (poke.Types[0].typeName === action.payload) return poke;
              if (poke.Types[1].typeName) {
                if (poke.Types[1].typeName === action.payload) return poke;
              }
            }
            if (poke.Types[0] === action.payload) return true;
            if (poke.Types[1] && poke.Types[1] === action.payload) return true;
          });

          return {
            ...state,
            pokemon: filteredTypePokemons,
            filteredtype: filteredTypePokemons,
          };
        }

        return {
          ...state,
          pokemon: [...filteredTypePokemons],
          filteredtype: filteredTypePokemons,
        };
      }

    //!CASO DELETE
    case DELETE_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon.filter((el) => el.id !== action.payload),
        allPokemonsFilter: state.allPokemonsFilter.filter(
          (el) => el.id !== action.payload
        ),
      };

    //!CASO MODIFY
    case MODIFY_POKEMON:
      state.modifiedPokemon = action.payload;
      return {
        ...state,
      };

    //!CASO RESET
    case RESET:
      return {
        ...state,
        pokemon: [...state.pokemonBackup],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
