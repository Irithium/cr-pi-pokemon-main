import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  // Función para crear un p en base al tipo del pokemon
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

  return (
    <div className={style.myCard}>
      <Link to={`/detail/${props.id}`}>
        <div className={style.innerCard}>
          <div className={style.frontSide}>
            <img src={props.image} alt="" className={style.portrait} />
          </div>
          <div className={style.backSide}>
            <p className={style.name}>{props.name}</p>

            <div className={style.specs}>
              <p>{pPerType(props.types[0])}</p>
              <p> {props.types[1] ? pPerType(props.types[1]) : null}</p>
            </div>

            <div className={style.specs}>
              <p className={style.weight}>
                Weight: <br />
                {props.weight / 10}kg
              </p>
              <p className={style.height}>
                Height: <br />
                {props.height / 10}m
              </p>
            </div>

            {/* <button className={style.detailButton}>DETAILS</button> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
