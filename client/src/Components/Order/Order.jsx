import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  orderByName,
  orderByAttack,
  orderByDefense,
  orderBySpeed,
  getPokemonsBygen,
} from "../../Redux/Actions/index";
import style from "./Order.module.css";

const Order = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");

  const handleOrderName = (event) => {
    const orden = event.target.value;
    dispatch(orderByName(orden));
    setOrder(`Orden ${orden}`);
  };

  // const options = [
  //   "first",
  //   "second",
  //   "third",
  //   "fourth",
  //   "fifth",
  //   "sixth",
  //   "seventh",
  //   "eighth",
  //   "nineth",
  // ];

  // const handleGen = (event) => {
  //   const gen = event.target.value;
  //   dispatch(getPokemonsBygen(gen));
  // };

  const handleOrderAttack = (event) => {
    const orden = event.target.value;
    dispatch(orderByAttack(orden));
    setOrder(`Orden ${orden}`);
  };

  const handleOrderDefense = (event) => {
    const orden = event.target.value;

    dispatch(orderByDefense(orden));
    setOrder(`Orden ${orden}`);
  };
  const handleOrderSpeed = (event) => {
    const orden = event.target.value;

    dispatch(orderBySpeed(orden));
    setOrder(`Orden ${orden}`);
  };

  return (
    <span>
      <span className={style.orderCont}>
        <label className={style.label}>Alpha Order:</label>
        <select
          id="alphaOrder"
          className={style.select}
          onChange={(event) => {
            handleOrderName(event);
          }}
        >
          <option>UNSORTED</option>
          <option value="asc"> A-Z </option>
          <option value="desc"> Z-A </option>
        </select>
      </span>

      <span className={style.orderCont}>
        <label className={style.label}>Att Order:</label>
        <select
          id="attackOrder"
          className={style.select}
          onChange={(event) => {
            handleOrderAttack(event);
          }}
        >
          <option>UNSORTED</option>
          <option value="asc">ASCENDENTE</option>
          <option value="desc">DESCENDENTE</option>
        </select>
      </span>

      {/* <span className={style.orderCont}>
        <label className={style.label}>Gen:</label>
        <select
          id="Gen"
          className={style.select}
          onChange={(event) => {
            handleGen(event);
          }}
        >
          {options.map((gen) => {
            return (
              <option key={gen} value={gen}>
                {gen}
              </option>
            );
          })}
        </select>
      </span> */}

      <span className={style.orderCont}>
        <label className={style.label}>Def Order:</label>
        <select
          id="defenseOrder"
          className={style.select}
          onChange={(event) => {
            handleOrderDefense(event);
          }}
        >
          <option>UNSORTED</option>
          <option value="asc">ASCENDENTE</option>
          <option value="desc">DESCENDENTE</option>
        </select>
      </span>

      <span className={style.orderCont}>
        <label className={style.label}>Speed Order:</label>
        <select
          id="attackOrder"
          className={style.select}
          onChange={(event) => {
            handleOrderSpeed(event);
          }}
        >
          <option>UNSORTED</option>
          <option value="asc">ASCENDENTE</option>
          <option value="desc">DESCENDENTE</option>
        </select>
      </span>
    </span>
  );
};

export default Order;
