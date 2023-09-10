import React, { useState } from "react";
import UsersPA from "./UsersPA.c";
import UsersDel from "./UsersDel";
import UsersM from "./UsersM.c";

interface MostrarProps {
  mostrar: string;
}

interface InsertarProps {
  insertar: string;
}

interface ActualizarProps {
  actualizar: string;
}

interface EliminarProps {
  eliminar: string;
}

const Mostrar: React.FC<MostrarProps> = ({ mostrar }) => {
  return <UsersM value={mostrar} />;
};

const Insertar: React.FC<InsertarProps> = ({ insertar }) => {
  return <UsersPA value={insertar} />;
};

const Actualizar: React.FC<ActualizarProps> = ({ actualizar }) => {
  return <UsersPA value={actualizar} />;
};

const Eliminar: React.FC<EliminarProps> = ({ eliminar }) => {
  return <UsersDel value={eliminar} />;
};

const UsersSet: React.FC = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

  const handleSeleccionarOpcion = (opcion: string) => {
    setOpcionSeleccionada(opcion);
  };

  let componente: JSX.Element | null = null;

  if (opcionSeleccionada === "get") {
    componente = <Mostrar mostrar="Mostrar" />;
  } else if (opcionSeleccionada === "post") {
    componente = <Insertar insertar={"Ingresar"} />;
  } else if (opcionSeleccionada === "put") {
    componente = <Actualizar actualizar="Actualizar" />;
  } else if (opcionSeleccionada === "delete") {
    componente = <Eliminar eliminar={"Eliminar"} />;
  }

  return (
    <div className="cont_gamesSet">
      <ul className="listGamesOptions">
        <li onClick={() => handleSeleccionarOpcion("get")}>Mostrar</li>
        <li onClick={() => handleSeleccionarOpcion("post")}>Ingresar</li>
        <li onClick={() => handleSeleccionarOpcion("put")}>Actualizar</li>
        <li onClick={() => handleSeleccionarOpcion("delete")}>Eliminar</li>
      </ul>
      {componente}
    </div>
  );
};

export default UsersSet;
