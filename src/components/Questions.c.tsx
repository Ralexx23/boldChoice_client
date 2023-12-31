import { useEffect, useState } from "react";
import Results from "./Results.c";
import Timer from "./Time.c";

const Question = ({
  filteredQuestion,
  questionsFiltered,
  indexQuestion,
  setIndexQuestion,
  setActiveQuiz,
}: any) => {
  const [answersRandom, setAnswersRandom] = useState([]);
  const [score, setScore] = useState(0);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [activeResults, setActiveResults] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const answers = [...filteredQuestion.options, filteredQuestion.answer];

    // genera un número aleatorio dentro de un rango personalizado (min y max)
    function customRandom(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // función personalizada para reordenar el arreglo de manera más aleatoria.
    function shuffleArray<T>(array: T[]): T[] {
      const shuffledArray = [...array];

      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = customRandom(0, i);
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }

      return shuffledArray;
    }

    setAnswersRandom(shuffleArray(answers) as []);
  }, [filteredQuestion]);

  const checkAnswer = (answerText: any, index: any) => {
    if (answerText === filteredQuestion.answer) {
      setScore(score + 1);
    }
    setSelectAnswerIndex(index);
    setAnswered(true);
  };

  const onNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setSelectAnswerIndex(null);
    setAnswered(false);
  };

  const onReset = () => {
    setScore(0);
    setActiveQuiz(false);
    setIndexQuestion(0);
  };

  return (
    <>
      {activeResults ? (
        <Results
          questionsFiltered={questionsFiltered}
          score={score}
          onReset={onReset}
        />
      ) : (
        <div className="question">
          {/* Número de pregunta actual y Número de preguntas totales */}

          <div className="settings_question">
            <h1 className="question_current">
              {indexQuestion + 1} / {questionsFiltered.length}
            </h1>
            <Timer initialTime={30} rese />
          </div>

          <div className="question_letters">
            <h1 className="letters">{filteredQuestion.question}</h1>
          </div>

          {/* Las respuestas aquí */}
          <div className="question_answer">
            {/* Mapeamos un arreglo de respuesta correcta y respuestas incorrectas */}
            {answersRandom.map((answer, index) => (
              <button
                className={`answers ${
                  selectAnswerIndex !== null && index === selectAnswerIndex
                    ? answer === filteredQuestion.answer
                      ? "answer_correct"
                      : "answer_incorrect"
                    : ""
                }`}
                key={answer}
                onClick={() => checkAnswer(answer, index)}
                disabled={answered && selectAnswerIndex !== index}
              >
                <p className="font-medium text-center text-sm">{answer}</p>
              </button>
            ))}
          </div>

          {/* Condicional para mostrar el botón de siguiente pregunta o el de finalizar */}
          {indexQuestion + 1 === questionsFiltered.length ? (
            <button
              className="question_next"
              onClick={() => {
                setAnswered(false);
                setActiveResults(true);
                setReset(true);
              }}
            >
              Finalizar
            </button>
          ) : (
            <button className="question_next" onClick={onNextQuestion}>
              Siguiente Pregunta
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Question;
