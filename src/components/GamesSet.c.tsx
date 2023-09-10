import React, { useState } from "react";
import GamesPA from "./GamesPA.c";
import GamesDel from "./GamesDel.c";
import GamesM from "./GamesM.c";

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
  return <GamesM value={mostrar} />;
};

const Insertar: React.FC<InsertarProps> = ({ insertar }) => {
  return <GamesPA value={insertar} />;
};

const Actualizar: React.FC<ActualizarProps> = ({ actualizar }) => {
  return <GamesPA value={actualizar} />;
};

const Eliminar: React.FC<EliminarProps> = ({ eliminar }) => {
  return <GamesDel value={eliminar} />;
};

const GamesSet: React.FC = () => {
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

export default GamesSet;
