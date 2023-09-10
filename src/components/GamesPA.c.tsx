import { gamesRequestP, gamesRequestPO } from "../api/api";
import { useState } from "react";
import { Input, Form, FormGroup, Label, Button, Col, Row } from "reactstrap";

const GamesPA = ({ value }: any) => {
  const dataGames = {
    id: "",
    type: "",
    branch: "",
    title: "",
    description: "",
    question: "",
    image: "",
    answer: "",
    incorrect1: "",
    incorrect2: "",
    incorrect3: "",
    value: 0,
    updated: "",
  };

  const [games, setGames] = useState(dataGames);
  const [arrayQuestions, setArrayQuestions] = useState([{}]);

  const handleInputQuestion = async (e: any) => {
    const { name, value } = e.target;
    setGames((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleQuestion = async (e: any) => {
    e.preventDefault();

    const questionEmpty = {
      id: games.id,
      type: games.type,
      branch: games.branch,
      title: games.title,
      description: games.description,
      question: "",
      image: "",
      answer: "",
      incorrect1: "",
      incorrect2: "",
      incorrect3: "",
      value: games.value,
      updated: games.updated,
    };

    const newQuestion = {
      question: games.question,
      image: games.image,
      answer: games.answer,
      options: [games.incorrect1, games.incorrect2, games.incorrect3],
      value: games.value,
    };

    setArrayQuestions((prevState) => [...prevState, newQuestion]);
    setGames(questionEmpty);
  };

  const handleInputChange = async (e: any) => {
    const { name, value } = e.target;
    setGames((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const questionsArray = arrayQuestions.slice(1);

    const newGames = {
      id: games.id,
      type: games.type,
      branch: games.branch,
      title: games.title,
      description: games.description,
      questions: questionsArray,
      updated: new Date().toISOString(),
    };

    if (value === "Ingresar") {
      const resGamesP = await gamesRequestP(newGames);
    } else {
      const resGamesPO = await gamesRequestPO(newGames);
    }
    setGames(dataGames);
    setArrayQuestions([{}]);
  };

  return (
    <div className="cont_postGame">
      <h1>{value} Juego</h1>
      <form action="" method="POST" className="form_games">
        {/*         <Input
          type="file"
          name="image"
          value={games.image}
          onChange={handleInputChange}
          bsSize="sm"
        /> */}

        {value === "Actualizar" ? (
          <div className="partFormGames">
            <FormGroup floating>
              <Input
                type="text"
                name="id"
                placeholder="ID"
                value={games.id}
                onChange={handleInputChange}
              />
              <Label htmlFor="">ID: </Label>
            </FormGroup>
          </div>
        ) : (
          <></>
        )}
        <Form>
          <div className="partFormGames">
            <FormGroup floating>
              <Input
                type="text"
                name="type"
                placeholder="Tipo de juego"
                value={games.type}
                onChange={handleInputChange}
                bsSize="sm"
              />
              <Label htmlFor="">Type: </Label>
            </FormGroup>
          </div>
          <div className="partFormGames">
            <FormGroup floating>
              <Input
                type="text"
                name="branch"
                placeholder="Clasificación"
                value={games.branch}
                onChange={handleInputChange}
                bsSize="sm"
              />
              <Label htmlFor="">Clasificacion: </Label>
            </FormGroup>
          </div>

          <div className="partFormGames">
            <FormGroup floating>
              <Input
                type="text"
                name="title"
                placeholder="Titulo"
                value={games.title}
                onChange={handleInputChange}
                bsSize="sm"
              />
              <Label htmlFor="">Titulo: </Label>
            </FormGroup>
          </div>

          <div className="partFormGames">
            <FormGroup floating>
              <Input
                type="textarea"
                name="description"
                placeholder="Descripción"
                value={games.description}
                onChange={handleInputChange}
              />
              <Label htmlFor="">Descripción:</Label>
            </FormGroup>
          </div>
        </Form>

        {/*-------------------------------PREGUNTAS--------------------------------------------*/}

        <div className="cont_questionForm">
          <div className="cont_questionFormIandC">
            <div className="partFormGamesQuestion">
              <FormGroup floating>
                <Input
                  type="text"
                  name="question"
                  placeholder="Pregunta"
                  value={games.question}
                  onChange={handleInputQuestion}
                />
                <Label htmlFor="">Preguntas:</Label>
              </FormGroup>
            </div>
            <div className="partFormGamesQuestion" id="incorrectAnswerGames">
              <Form>
                <Row>
                  <Col sm="4" xs="6" />
                  <FormGroup floating>
                    <Input
                      type="text"
                      name="incorrect1"
                      placeholder="Incorrecta 1"
                      value={games.incorrect1}
                      onChange={handleInputQuestion}
                    />
                    <Label htmlFor="">Incorrecta 1</Label>
                  </FormGroup>
                  <Col sm="4" xs="6" />
                  <FormGroup floating>
                    <Input
                      type="text"
                      name="incorrect2"
                      placeholder="Incorrecta 2"
                      value={games.incorrect2}
                      onChange={handleInputQuestion}
                    />
                    <Label htmlFor="">Incorrecta 2</Label>
                  </FormGroup>
                  <Col sm="4" />
                  <FormGroup floating>
                    <Input
                      type="text"
                      name="incorrect3"
                      placeholder="Incorrecta 3"
                      value={games.incorrect3}
                      onChange={handleInputQuestion}
                    />
                    <Label htmlFor="">Incorrecta 3</Label>
                  </FormGroup>
                </Row>
              </Form>
            </div>

            <div className="partFormGamesQuestion">
              <FormGroup floating>
                <Input
                  type="text"
                  name="answer"
                  placeholder="Correcta"
                  value={games.answer}
                  onChange={handleInputQuestion}
                />
                <Label htmlFor="">Respuesta: </Label>
              </FormGroup>
            </div>
          </div>
          <div className="cont_questionFormButton">
            <Button
              block
              color="primary"
              size="sm"
              type="submit"
              className="questionFormButton"
              onClick={handleQuestion}
            >
              Agregar
            </Button>
          </div>
        </div>

        {/*-------------------------------PREGUNTAS--------------------------------------------*/}

        {/* <div className="partFormGames">
          <FormGroup floating>
            <Input
              type="number"
              name="value"
              placeholder="Valor"
              value={games.value}
              onChange={handleInputChange}
            />
            <Label htmlFor="">Valor:</Label>
          </FormGroup>
        </div>
        <div className="partFormGames">
          <FormGroup floating>
            <Input
              type="text"
              name="updated"
              placeholder="Actualizar Fecha"
              value={games.updated}
              onChange={handleInputChange}
            />
            <Label htmlFor="">Actualizado en:</Label>
          </FormGroup>
        </div> */}
        <Button
          color="success"
          block
          type="submit"
          className="button_formGames"
          size="sm"
          onClick={handleSubmit}
        >
          {value}
        </Button>
      </form>
    </div>
  );
};

export default GamesPA;
