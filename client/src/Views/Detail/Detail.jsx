import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import style from "./Detail.module.css";

import {
  cleanDetail,
  getDetails,
  deletePokemon,
  modifyPokemon,
} from "../../Redux/Actions";

const Detail = () => {
  const dispatch = useDispatch();
  const { pokemonId } = useParams();
  const pokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getDetails({ pokemonId }));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, pokemonId]);

  const pPerType = (arg) => {
    switch (arg) {
      case "normal":
        return <p className={style.normal}>{"NORMAL"}</p>;

      case "fighting":
        return <p className={style.fighting}>{"FIGHTING"}</p>;

      case "flying":
        return <p className={style.flying}>{"FLYING"}</p>;

      case "poison":
        return <p className={style.poison}>{"POISON"}</p>;

      case "ground":
        return <p className={style.ground}>{"GROUND"}</p>;

      case "rock":
        return <p className={style.rock}>{"ROCK"}</p>;

      case "bug":
        return <p className={style.bug}>{"BUG"}</p>;

      case "ghost":
        return <p className={style.ghost}>{"GHOST"}</p>;

      case "steel":
        return <p className={style.steel}>{"STEEL"}</p>;

      case "fire":
        return <p className={style.fire}>{"FIRE"}</p>;

      case "water":
        return <p className={style.water}>{"WATER"}</p>;

      case "grass":
        return <p className={style.grass}>{"GRASS"}</p>;

      case "electric":
        return <p className={style.electric}>{"ELECTRIC"}</p>;

      case "psychic":
        return <p className={style.psychic}>{"PSYCHIC"}</p>;

      case "ice":
        return <p className={style.ice}>{"ICE"}</p>;

      case "dragon":
        return <p className={style.dragon}>{"DRAGON"}</p>;

      case "dark":
        return <p className={style.dark}>{"DARK"}</p>;

      case "fairy":
        return <p className={style.fairy}>{"FAIRY"}</p>;

      default:
        return null;
    }
  };

  const handleDelete = () => {
    dispatch(deletePokemon(pokemon.id));
    return alert("Pokemon eliminado correctamente");
  };
  const handleModify = (id) => {
    dispatch(modifyPokemon(pokemon.id));
  };

  return (
    <div>
      {pokemon?.image ? (
        <div className={style.detCont}>
          <Link to={`/detail/${pokemon.id - 1}`}>
            {pokemon.id !== 1 ? (
              <button className={style.bttn}>&lt;</button>
            ) : null}
          </Link>
          <div className={style.firstCont}>
            <div className={style.name}>{pokemon?.name}</div>
            <img
              src={pokemon?.image}
              alt="PokemonPhoto"
              className={style.portrait}
            />
          </div>

          <div className={style.secondCont}>
            <label className={style.statsTitle}>Statistics:</label>
            <div className={style.statCont}>
              <div className={style.statChild1}>HP: {pokemon?.hp}</div>
              <p className={style.statChild2}>Attack: {pokemon?.attack}</p>
              <p className={style.statChild3}>Defense: {pokemon?.defense}</p>
              <p className={style.statChild4}>SpAttack: {pokemon?.spAttack}</p>
              <p className={style.statChild5}>
                SpDefense: {pokemon?.spDefense}
              </p>
              <p className={style.statChild6}>Speed: {pokemon?.speed}</p>
            </div>

            <div className={style.specs}>
              <p>{pokemon.Types ? pPerType(pokemon.Types[0]) : null}</p>
              <p> {pokemon.Types ? pPerType(pokemon.Types[1]) : null}</p>

              <p className={style.weight}>{pokemon.weight / 10} kg</p>
              <p className={style.height}>{pokemon.height / 10} m</p>
            </div>

            {isNaN(pokemon.id) ? (
              <Link to="/home">
                <button onClick={handleDelete} className={style.delete}>
                  <span>DELETE</span>
                </button>
              </Link>
            ) : (
              <Link to={`/update/${pokemon.id}`}>
                <button onClick={handleModify} className={style.modify}>
                  <span>MODIFY</span>
                </button>
              </Link>
            )}
          </div>
          <Link to={`/detail/${pokemon.id + 1}`}>
            <button className={style.bttn}>&gt;</button>
          </Link>
        </div>
      ) : (
        <h3 className={style.loading}>
          <iframe
            title="loading"
            src=" https://i.gifer.com/9xnj.gif"
            width="720"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </h3>
      )}
    </div>
  );
};

export default Detail;
