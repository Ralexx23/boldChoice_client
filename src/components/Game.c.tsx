import { useState } from "react";
import { useParams } from "react-router-dom";
import Question from "../components/Questions.c";

// Función para barajar las preguntas de cada categoría y también reducirla al número de 5
const shuffleArray = (array: any) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray;
};

const Game = (gameBranch: any) => {
  // Leer El parametro de la URL
  const { branch } = useParams();
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);

  const newQuestions = shuffleArray(gameBranch.gameBranch.questions);
  console.log(newQuestions[indexQuestion]);
  return (
    <div className="cont_game">
      {activeQuiz ? (
        <Question
          filteredQuestion={newQuestions[indexQuestion]}
          setIndexQuestion={setIndexQuestion}
          indexQuestion={indexQuestion}
          questionsFiltered={newQuestions}
          setActiveQuiz={setActiveQuiz}
        />
      ) : (
        <>
          <div className="gameDisa">
            <h1 className="game_title">{gameBranch.gameBranch.title}</h1>

            <div className="game_img">
              <img src={`/src/assets/$.png`} alt={branch} className="w-72" />
              <p>{gameBranch.gameBranch.description}</p>
            </div>
          </div>

          <button className="btn_gameOut" onClick={() => setActiveQuiz(true)}>
            Iniciar Quiz
          </button>
        </>
      )}
    </div>
  );
};
export default Game;
