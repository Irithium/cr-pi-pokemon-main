import style from "./Home.module.css";
// COMPONENTES
import Pagination from "../../Components/Pagination/Pagination";
import Order from "../../Components/Order/Order";
import Filters from "../../Components/Filters/Filters";
import Cards from "../../Components/Cards/Cards";
// HOOKS Y ACTIONS
import { getPokemons, getTypes } from "../../Redux/Actions/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  // GIFS DE CARGA
  const [isLoading, setIsLoading] = useState(true);
  const [gifIndex, setGifIndex] = useState(0);
  // PAGINACIÓN
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  const loadingGifs = [
    "https://i.gifer.com/9xnj.gif",
    "https://i.gifer.com/7ttQ.gif",
    "https://i.giphy.com/media/428dIJljoEbxS/giphy.webp",
  ];

  // CARGA DE TIPOS Y POKEMON
  useEffect(() => {
    dispatch(getTypes());

    dispatch(getPokemons()).then(() => setIsLoading(false));
    setGifIndex(Math.floor(Math.random() * loadingGifs.length));
  }, [dispatch, loadingGifs.length]);

  // FUNCIONES DE PAGINADO
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < Math.ceil(pokemon.length / cardsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleStart = () => {
    setCurrentPage(1);
  };
  const handleEnd = () => {
    setCurrentPage(Math.ceil(pokemon.length / cardsPerPage));
  };

  return (
    <div>
      <div>
        <h1>
          <img
            className={style.image}
            src="https://i.postimg.cc/43DG6P8q/pngegg-1.png"
            alt=""
          />
        </h1>
        <div className={style.homeCont}>
          <div className={style.formatCont}>
            <Filters setCurrentPage={setCurrentPage} />
            <Order />
          </div>

          <div className={style.pagCont}>
            <Pagination
              totalPages={Math.ceil(pokemon.length / cardsPerPage)}
              handleStart={handleStart}
              handleEnd={handleEnd}
              handlePrev={handlePrev}
              handleNext={handleNext}
              handleClick={handleClick}
            />
          </div>

          <div className={style.cardsCont}>
            <Cards
              cardsPerPage={cardsPerPage}
              currentPage={currentPage}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <p>
          <iframe
            className={style.gif}
            src={loadingGifs[gifIndex]}
            frameBorder="0"
            width="480"
            height="300"
            allowFullScreen
            title="Loading"
          ></iframe>
        </p>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Home;
