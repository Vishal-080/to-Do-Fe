import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../feature/signup/authSlice";
import { Link, Navigate } from "react-router-dom";


const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid gray",
        height: "8vh",
        backgroundColor: "navy",
        color: "white",
      }}
    >
      <div>
        <Link to="/todo" style={{ textDecoration: "none", color: "white" }}>
          To-Do
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <button
          style={{
            background: "none",
            padding: "8px",
            textAlign: "center",
            borderRadius: "8px",
            margin:"8px",
            border:"none"
          }}
        >
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            Login
          </Link>
        </button>
        <button style={{
            background: "none",
            padding: "8px",
            textAlign: "center",
            borderRadius: "8px",
            margin:"8px",
            border:"none"
          }}>
          <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
            Signup
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
