import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

const Navbar: React.FC = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);

  return (
    <nav>
      <Link to="/" className="logo">
        <h3>Bold Choice</h3>
      </Link>
      <div>
        <ul className="listNav">
          {profile?.type === "admin" ? (
            <>
              <li>
                <Link to="/games" className="itemNav">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/users" className="itemNav">
                  Users
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}
          <li>
            <Link to="/branch" className="itemNav">
              Clasificaciones
            </Link>
          </li>
        </ul>
        {isAuth ? (
          <Link
            to={"/login"}
            className="itemNav"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Link>
        ) : (
          <Link to="/login" className="itemNav">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
