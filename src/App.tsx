import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RequireAuth } from "./components/RequireAuth.c";
import { useAuthStore } from "./store/auth.store";

// Pages - Template
import Template from "./pages/Template.p";

// Pages - Children
// Pages Public
import Home from "./pages/publicpages/Home.p";
import Login from "./pages/publicpages/Login.p";
import Register from "./pages/publicpages/Register.p";
import NoPageP from "./pages/publicpages/NoPage.p";
import BranchP from "./pages/privatepages/Branch.p";

//Pages Private
import UsersP from "./pages/privatepages/Users.p";
import GamesP from "./pages/privatepages/Games.p";
import GameP from "./pages/privatepages/Game.p";

const App = () => {
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Template Comp={Home} />} />
        <Route path="/login" element={<Template Comp={Login} />} />
        <Route path="/register" element={<Template Comp={Register} />} />
        <Route path="*" element={<Template Comp={NoPageP} />} />

        <Route path="/users" element={<Template Comp={UsersP} />} />
        <Route path="/games" element={<Template Comp={GamesP} />} />
        <Route path="/branch" element={<Template Comp={BranchP} />} />
        <Route path="/branch/:branch" element={<Template Comp={GameP} />} />

        {/* Private Pages */}
        <Route element={<RequireAuth isAllowed={isAuth} />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
