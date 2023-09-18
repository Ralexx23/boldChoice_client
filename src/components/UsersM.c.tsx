import Udatagrid from "./Udatagrid.c";
import { usersRequest } from "../api/api";
import { useEffect, useState } from "react";

const UsersM = ({ value }: any) => {
  const getUsers = async () => {
    const response = await usersRequest();
    return response;
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response: any) => {
      setUsers(response.data.users);
    });
  }, []);

  const GridProps = {
    columns: [
      { field: "id", headerName: "ID", width: 90 },
      { field: "type", headerName: "Tipo", width: 150 },
      { field: "name", headerName: "Nombres", width: 150 },
      { field: "lastname", headerName: "Apellidos", width: 150 },
      { field: "user", headerName: "Usuario", width: 150 },
      { field: "password", headerName: "Contraseña", width: 150 },
    ],
    rows: users,
  };

  return <div className="contDatagrid"><Udatagrid data={GridProps} /></div>;
};

export default UsersM;
