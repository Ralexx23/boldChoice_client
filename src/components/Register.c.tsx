import React from "react";
import { usersRequestP, profileRequest } from "../api/api";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";
import { Input, FormGroup, Label, Button } from "reactstrap";
import { useState } from "react";

const Register = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  async function fetchData(auth: { user: string; password: string }) {
    try {
      const resregister = await usersRequestP(auth);
      return resregister;
    } catch (error: any) {
      console.log(error.response.data.msg);
      return error.response.data.msg;
    }
  }

  function authFail(data: string) {
    if (typeof data === "string") {
      const authFail = data;
      return authFail;
    }
  }

  let [errol, setErrol] = useState(undefined as string | undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const type = "user";
    const name = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const lastname = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const user = (e.currentTarget.elements[2] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[3] as HTMLInputElement).value;

    const auth = { type, name, lastname, user, password };
    const resregister = await fetchData(auth);

    setErrol(authFail(resregister));

    setToken(resregister?.data.token);
    navigate("/users");
    const resProfile = await profileRequest();
    setProfile(resProfile.data.user);
  };

  return (
    <div className="bodyLogin">
      <form onSubmit={handleSubmit} className="login-form">
        <img src="" alt="" className="logo" />
        <h1 className="login-title">Iniciar Sesión</h1>
        <p className="error-message">{errol}</p>

        <label className="form-label">Nombres</label>
        <input type="text" className="form-input" />

        <label className="form-label">Apellidos</label>
        <input type="text" className="form-input" />

        <label className="form-label">Usuario</label>
        <input type="text" className="form-input" />

        <label className="form-label">Contraseña</label>
        <input type="password" className="form-input" />

        <button className="login-button">Iniciar</button>
      </form>
    </div>
  );
};

export default Register;
