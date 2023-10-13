import style from "./Pagination.module.css";

const Pagination = ({
  totalPages,
  handleStart,
  handleEnd,
  handlePrev,
  handleNext,
  handleClick,
}) => {
  // Paginación
  return (
    <div className={style.bigCont}>
      {totalPages === 0 ? (
        <div />
      ) : (
        <div className={style.pagCont}>
          <button className={style.startBttn} onClick={handleStart}>
            &lt;&lt;
          </button>

          <button className={style.button} onClick={handlePrev}>
            &lt;
          </button>

          {Array.from({ length: totalPages }).map((item, index) => {
            return (
              <button
                key={index}
                id={index + 1}
                onClick={handleClick}
                className={style.button}
              >
                {index + 1}
              </button>
            );
          })}
          <button className={style.button} onClick={handleNext}>
            &gt;
          </button>
          <button className={style.endBttn} onClick={handleEnd}>
            &gt;&gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
