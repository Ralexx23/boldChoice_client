const Results = ({ score, questionsFiltered, onReset }: any) => {
  return (
    <div className="result">
      <h1 className="result_title">Resultados</h1>

      <div className="result_info">
        <p>Acertaste el<span className="result_porcent"> {((score / questionsFiltered.length) * 100).toFixed(0)}%</span> de las preguntas ({score} de {questionsFiltered.length})</p>
      </div>

      <button
        className="result_reset"
        onClick={onReset}
      >
        Vamos de nuevo
      </button>
    </div>
  );
};

export default Results;
