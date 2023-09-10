import { useState } from "react";
import { usersRequestD } from "../api/api";
import { Input, Form, FormGroup, Label, Button, Col, Row } from "reactstrap";


const UsersDel = ({ value }: any) => {
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
    const resUsersD = await usersRequestD(id);
    setID("");
  };

  return (
    <div className="cont_postGame">
      <h1>{value} Usuario</h1>
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
        block
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

export default UsersDel;
