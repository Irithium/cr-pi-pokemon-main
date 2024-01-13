import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postPokemon, getTypes } from "../../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "./Validation";
import style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({
    name: " Rellene las casillas",
    image: " Rellene las casillas",
    hp: " Rellene las casillas",
    attack: " Rellene las casillas",
    defense: " Rellene las casillas",
    spAttack: " Rellene las casillas",
    spDefense: " Rellene las casillas",
    height: " Rellene las casillas",
    weight: " Rellene las casillas",
    speed: " Rellene las casillas",
  });
  const [input, setInput] = useState({
    name: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    spAttack: "",
    spDefense: "",
    height: "",
    weight: "",
    speed: "",
    types: [],
  });
  const tipos = input.types;

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const fieldErrors = validate(name, value);
    console.log("soy fieldErrors", fieldErrors);

    setInput({
      ...input,
      [name]: value,
    });

    setErrors({ ...errors, [name]: fieldErrors[name] });
  };

  const handleFirstType = (event) => {
    const selectedType = event.target.value.toLowerCase();
    if (tipos.length >= 2) {
      input.types.pop();
      input.types.unshift(selectedType);
    } else input.types.push(selectedType);

    console.log(tipos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);

    dispatch(postPokemon(input))
      .then(() => {
        alert("Pokemon Creado");
        setInput({
          name: "",
          img: "",
          hp: "",
          attack: "",
          defense: "",
          height: "",
          weight: "",
          speed: "",
          types: [],
        });
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error al crear el Pokémon:", error);
      });
  };

  const isFormComplete = () => {
    if (
      errors.name === undefined &&
      errors.attack === undefined &&
      errors.defense === undefined &&
      errors.health === undefined &&
      errors.height === undefined &&
      errors.speed === undefined &&
      errors.weight === undefined &&
      errors.image === undefined &&
      types.length > 0
    )
      return true;
    else return false;
  };

  // const handleRandom = () => {
  //   const nombresPokemon = [
  //     "Sparkleash",
  //     "Florafin",
  //     "Frosquid",
  //     "Stonewyrm",
  //     "Nightwingle",
  //   ];
  //   const maxStat = 255;
  //   const minStat = 1;

  //   setInput({
  //     name: nombresPokemon[Math.floor(Math.random() * nombresPokemon.length)],
  //     hp: Math.floor(Math.random() * (maxStat - minStat) + minStat),
  //     attack: Math.floor(Math.random() * (maxStat - minStat) + minStat),
  //     defense: Math.floor(Math.random() * (maxStat - minStat) + minStat),
  //     spAttack: Math.floor(Math.random() * (maxStat - minStat) + minStat),
  //     spDefense: Math.floor(Math.random() * (maxStat - minStat) + minStat),
  //     speed: Math.floor(Math.random() * (maxStat - minStat) + minStat),
  //     height: Math.floor(Math.random() * (maxStat - minStat) + minStat),
  //     weight: Math.floor(Math.random() * (maxStat - minStat) + minStat),
  //     img: "https://placehold.it/200x200",
  //   });
  // };

  return (
    <div>
      <h1 className={style.title}>Crea tu Pokemon </h1>
      {/* <button className={style.button} onClick={handleRandom}>
        Randomize
      </button> */}

      <div className={style.cont}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={style.dataCont}>
            <div className={style.valueCont}>
              <label className={style.label}>Name:</label>
              <br />
              <input
                id="name"
                type="text"
                name="name"
                defaultValue={input.name}
                className={style.input}
                placeholder="Coloque un nombre"
                onChange={(event) => handleChange(event)}
              />
              <p hidden={errors.name ? false : true} className={style.errors}>
                ERROR: {errors.name}
              </p>
            </div>

            <div className={style.valueCont}>
              <label>HP:</label>
              <br />
              <input
                id="hp"
                type="text"
                name="hp"
                defaultValue={input.hp}
                className={style.input}
                placeholder="Puntos de vida"
                onChange={(event) => handleChange(event)}
              />
              <p hidden={errors.hp ? false : true} className={style.errors}>
                ERROR: {errors.hp}
              </p>
            </div>

            <div className={style.valueCont}>
              <label>Attack:</label>
              <br />
              <input
                id="attack"
                type="text"
                name="attack"
                defaultValue={input.attack}
                className={style.input}
                placeholder="Puntos de Ataque"
                onChange={(event) => handleChange(event)}
              />
              <p hidden={errors.attack ? false : true} className={style.errors}>
                ERROR: {errors.attack}
              </p>
            </div>

            <div className={style.valueCont}>
              <label>Defense:</label>
              <br />
              <input
                id="defense"
                type="text"
                name="defense"
                defaultValue={input.hp}
                className={style.input}
                placeholder="Puntos de Defensa"
                onChange={(event) => handleChange(event)}
              />
              <p
                hidden={errors.defense ? false : true}
                className={style.errors}
              >
                ERROR: {errors.defense}
              </p>
            </div>

            <div className={style.valueCont}>
              <label>Special Attack:</label>
              <br />
              <input
                id="spAttack"
                type="text"
                name="spAttack"
                defaultValue={input.spAttack}
                className={style.input}
                placeholder="Puntos de Ataque Especial"
                onChange={(event) => handleChange(event)}
              />
              <p
                hidden={errors.spAttack ? false : true}
                className={style.errors}
              >
                ERROR: {errors.spAttack}
              </p>
            </div>

            <div className={style.valueCont}>
              <label>Special Defense:</label>
              <br />
              <input
                id="spDefense"
                type="text"
                name="spDefense"
                defaultValue={input.spDefense}
                className={style.input}
                placeholder="Puntos de Defensa Especial"
                onChange={(event) => handleChange(event)}
              />
              <p
                hidden={errors.spDefense ? false : true}
                className={style.errors}
              >
                ERROR: {errors.spDefense}
              </p>
            </div>

            <div className={style.valueCont}>
              <label>Speed:</label>
              <br />
              <input
                id="speed"
                type="text"
                name="speed"
                defaultValue={input.speed}
                className={style.input}
                placeholder="Puntos de Velocidad"
                onChange={(event) => handleChange(event)}
              />
              <p hidden={errors.speed ? false : true} className={style.errors}>
                ERROR: {errors.speed}
              </p>
            </div>

            <div className={style.valueCont}>
              <label>Weight:</label>
              <br />
              <input
                id="weight"
                type="text"
                name="weight"
                defaultValue={input.weight}
                className={style.input}
                placeholder="Peso"
                onChange={(event) => handleChange(event)}
              />
              <p hidden={errors.weight ? false : true} className={style.errors}>
                ERROR: {errors.weight}
              </p>
            </div>

            <div className={style.valueCont}>
              <label>Height:</label>
              <br />
              <input
                id="height"
                type="text"
                name="height"
                defaultValue={input.height}
                className={style.input}
                placeholder="Altura"
                onChange={(event) => handleChange(event)}
              />
              <p hidden={errors.height ? false : true} className={style.errors}>
                ERROR: {errors.height}
              </p>
            </div>

            <div className={style.typeCont}>
              <label className={style.label}>Type/s:</label>
              <select
                id="filterType"
                className={style.select}
                onChange={(event) => {
                  handleFirstType(event);
                }}
              >
                <option value="">-</option>
                {types.map((type) => {
                  return (
                    <option key={type.id} value={type.name}>
                      {type.typeName.toUpperCase()}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={style.valueCont}>
              <label>Image:</label>
              <br />
              <input
                id="image"
                name="image"
                type="text"
                defaultValue={input.image}
                className={style.input}
                placeholder="Enlace a una imagen"
                onChange={(event) => handleChange(event)}
              />
              <p hidden={errors.image ? false : true} className={style.errors}>
                ERROR: {errors.image}
              </p>
            </div>
          </div>

          <button
            type="submit"
            className={style.submitBttn}
            disabled={isFormComplete() ? false : true}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
