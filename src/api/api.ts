import axios from "../libs/axios";

export const loginRequest = async (auth: any) => {
  return axios.post("/auth/login", {
    auth,
  });
};

export const profileRequest = async () => {
  return await axios.get("/auth");
};

//  GAMES REQUESTS
export const gamesRequest = async () => {
  return await axios.get("/games");
};

export const gamesRequestP = async (games: any) => {
  return await axios.post("/games", {
    games,
  });
};

export const gamesRequestPO = async (games: any) => {
  return await axios.put("/games", {
    games,
  });
};

export const gamesRequestD = async (id: any) => {
  console.log(id);
  return await axios.delete(`/games/${id}`);
};

//  USERS REQUESTS
export const usersRequest = async () => {
  return await axios.get("/users");
};

export const usersRequestP = async (users: any) => {
  return await axios.post("/users", {
    users,
  });
};

export const usersRequestPO = async (users: any) => {
  return await axios.put("/users", {
    users,
  });
};

export const usersRequestD = async (id: any) => {
  console.log(id);
  return await axios.delete(`/users/${id}`);
};
