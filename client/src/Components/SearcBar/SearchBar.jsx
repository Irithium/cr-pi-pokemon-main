import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsByName, getPokemonsById } from "../../Redux/Actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const inputChange = (event) => {
    event.preventDefault();
    setData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

    if (regex.test(data) || !isNaN(data)) {
      dispatch(getPokemonsById(data));
    } else {
      dispatch(getPokemonsByName(data));
    }
    setData("");
  };

  return (
    <div className={style.cont}>
      <input
        type="text"
        name="text"
        className={style.input}
        onChange={(event) => {
          inputChange(event);
        }}
        placeholder="Type a name"
      />
      <button
        className={style.button}
        onClick={(event) => {
          handleSubmit(event);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
