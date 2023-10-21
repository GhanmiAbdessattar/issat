import axios from "axios";
import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const Logout = () => {
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {

        await axios.get("/auth/logout/");
      } catch (error) {
        console.error("Erreur lors de la déconnexion :", error);
      } finally {
   
        setTimeout(() => {
          navigate("/");
        }, 2000); 
      }
    };

    performLogout();
  }, [navigate]);

  

  return <div>Déconnexion en cours...</div>;
};

export default Logout;
