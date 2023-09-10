import { usersRequestP, usersRequestPO } from "../api/api";
import { useState } from "react";
import { Input, Form, FormGroup, Label, Button, Col, Row } from "reactstrap";


const UsersPA = ({ value }: any) => {
  const dataUsers = {
    id: "",
    type: "",
    name: "",
    lastname: "",
    user: "",
    password: "",
  };

  const [users, setUsers] = useState(dataUsers);

  const handleInputChange = async (e: any) => {
    const { name, value } = e.target;
    setUsers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newUsers = {
      id: users.id,
      type: users.type,
      name: users.name,
      lastname: users.lastname,
      user: users.user,
      password: users.password,
    };

    if (value === "Ingresar") {
      const resUsersP = await usersRequestP(newUsers);
    } else {
      const resUsersPO = await usersRequestPO(newUsers);
    }
    setUsers(dataUsers);
  };

  return (
    <div className="cont_postGame">
      <h1>{value} Usuarios</h1>
      <form action="" method="POST" className="form_games">
        {value === "Actualizar" ? (
          <div className="partFormGames">
            <FormGroup floating>
            <Input
              type="text"
              name="id"
              placeholder="ID"
              value={users.id}
              onChange={handleInputChange}
            />
            <Label htmlFor="">ID: </Label>
            </FormGroup>
          </div>
        ) : (
          <></>
        )}

        <div className="partFormGames">
          <FormGroup floating>
         
          <Input
            type="text"
            name="type"
            placeholder="Tipo de juego"
            value={users.type}
            onChange={handleInputChange}
          />
           <Label htmlFor="">Type: </Label>
          </FormGroup>
        </div>
        <div className="partFormGames">
          <FormGroup floating>
          
          <Input
            type="text"
            name="name"
            placeholder="Nombres"
            value={users.name}
            onChange={handleInputChange}
          />
          <Label htmlFor="">Nombres: </Label>
          </FormGroup>
        </div>
        <div className="partFormGames">
          <FormGroup floating>
          
          <Input
            type="text"
            name="lastname"
            placeholder="Apellidos"
            value={users.lastname}
            onChange={handleInputChange}
          />
          <Label htmlFor="">Apellidos: </Label>
          </FormGroup>
        </div>
        <div className="partFormGames">
          <FormGroup floating>
          
          <Input
            type="text"
            name="user"
            placeholder="Usuarios"
            value={users.user}
            onChange={handleInputChange}
          />
          <Label htmlFor="">Usuario: </Label>
          </FormGroup>
        </div>
        <div className="partFormGames">
          <FormGroup floating>
          
          <Input
            type="text"
            name="password"
            placeholder="Contraseña"
            value={users.password}
            onChange={handleInputChange}
          />
          <Label htmlFor="">Contraseña: </Label>
          </FormGroup>
        </div>
        <Button
        block
        color="success"
          type="submit"
          className="button_formGames"
          onClick={handleSubmit}
        >
          {value}
        </Button>
      </form>
    </div>
  );
};

export default UsersPA;
