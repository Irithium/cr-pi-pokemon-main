import { filterSource, filterType } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const handleFilterBySource = (event) => {
    dispatch(filterSource(event.target.value));
  };

  const handleFilterByType = (event) => {
    dispatch(filterType(event.target.value));
  };

  return (
    <span>
      <span className={style.filterCont}>
        <label className={style.label}>Source: </label>

        <select
          id="filterSource"
          className={style.select}
          onChange={(e) => {
            handleFilterBySource(e);
          }}
        >
          <option>ALL</option>
          <option>API</option>
          <option>DB</option>
        </select>
      </span>

      <span className={style.filterCont}>
        <label className={style.label}>Type:</label>
        <select
          id="filterType"
          onChange={handleFilterByType}
          className={style.select}
        >
          <option>ALL</option>
          {types.map((type) => {
            return (
              <option key={type.id} value={type.name}>
                {type.typeName.toUpperCase()}
              </option>
            );
          })}
        </select>
      </span>
    </span>
  );
};

export default Filters;
