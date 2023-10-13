import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";

const Cards = ({ cardsPerPage, currentPage, isLoading }) => {
  const pokemon = useSelector((state) => state.pokemon);
  let actualCards;
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  if (Array.isArray(pokemon))
    actualCards = pokemon?.slice(firstCardIndex, lastCardIndex);
  else actualCards = [pokemon];

  return (
    <div className={style.cont}>
      {!actualCards?.length && !isLoading ? (
        <div>
          <p className={style.p}>No hay pokemons cargados</p>
        </div>
      ) : (
        actualCards?.map((poke) => {
          return (
            <Card
              key={poke.id}
              id={poke.id}
              name={poke.name}
              image={poke.image}
              hp={poke.hp}
              attack={poke.attack}
              types={poke.Types}
              weight={poke.weight}
              height={poke.height}
            />
          );
        })
      )}
    </div>
  );
};

export default Cards;
