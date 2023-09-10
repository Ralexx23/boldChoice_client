import { useState } from "react";
import { gamesRequestD } from "../api/api";
import { Input, Form, FormGroup, Label, Button, Col, Row } from "reactstrap";

const GamesDel = ({ value }: any) => {
  const [id, setID] = useState("");

  const handleInputChange = async (e: any) => {
    const { value } = e.target;
    setID(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (id === "") {
      alert("Ingrese un ID");
      return;
    }
    const resGamesD = await gamesRequestD(id);
    setID("");
  };

  return (
    <div className="cont_postGame">
      <h1>{value} Juego</h1>
      <form action="" method="DELETE" className="form_gamesDel">
        <div className="comp_GamesDel">
          <FormGroup floating>
            <Input
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={handleInputChange}
            />
            <Label htmlFor="">ID:</Label>
          </FormGroup>
        </div>

        <Button
          color="danger"
          type="submit"
          className="button_formGamesDel"
          onClick={handleSubmit}
        >
          {value}
        </Button>
      </form>
    </div>
  );
};

export default GamesDel;
