import React from "react";
import { loginRequest, profileRequest } from "../api/api";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  async function fetchData(auth: { user: string; password: string }) {
    try {
      const reslogin = await loginRequest(auth);
      return reslogin;
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
    const user = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    const auth = { user, password };
    const reslogin = await fetchData(auth);

    setErrol(authFail(reslogin));

    setToken(reslogin?.data.token);

    const resProfile = await profileRequest();
    setProfile(resProfile.data.user);

    navigate("/auth");
  };

  return (
    <div className="bodyLogin">
      <form onSubmit={handleSubmit} className="login-form">
        <img src="" alt="" className="logo" />
        <h1 className="login-title">Iniciar Sesión</h1>
        <p className="error-message">{errol}</p>

        <label className="form-label">Usuario</label>
        <input className="form-input" />

        <label className="form-label">Contraseña</label>
        <input type="password" className="form-input" />

        <button className="login-button">Iniciar</button>

        <Link to="/register" className="register-link">
          Regístrate
        </Link>
      </form>
    </div>
  );
};

export default Login;
