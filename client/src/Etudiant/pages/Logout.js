import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const location = useLocation()
  axios.get("/auth/logout/").then(res =>{
    location.reload(true)
    navigate("/");
  }).catch (err => console.log(err));

  return <div>by by</div>;
};

export default Logout;
