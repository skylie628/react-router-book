import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("gmail")
  );
  console.log(window.localStorage.getItem("gmail"));
  window.localStorage.getItem("gmail");
  const handleLogout = () => {
    window.localStorage.removeItem("gmail");
    setIsLogged(false);
    navigate("/");
  };
  return (
    <div className="w-screen flex justify-center mt-5 ">
      <div className="w-10/12">
        <div className="flex justify-between">
          <h1>Bookkeeper</h1>
          {!isLogged ? (
            <button
              className="border border-black p-2 hover:bg-slate-800 hover:text-white"
              onClick={() => navigate("./signin")}
            >
              Login
            </button>
          ) : (
            <button
              className="border border-black p-2 hover:bg-slate-800 hover:text-white"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          )}
        </div>
        <div className="border-b py-4 border-black">
          <nav className="mt-3 mb-3">
            <Link to="/home">Home</Link> | <Link to="/contact">Contact</Link> |{" "}
            <Link to="/invoice">Invoice</Link>
          </nav>
          <button
            onClick={() => navigate("home")}
            className="border border-black p-2 hover:bg-slate-800 hover:text-white"
          >
            Test navigate home
          </button>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
