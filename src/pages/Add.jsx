import "mapbox-gl/dist/mapbox-gl.css";

import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Map, Estatetype, SearchBar, TransactionType, Uploads } from "../components";
import { UserContext } from "../states/user_context";

function Add() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (user == undefined || user == null) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="px-10">
      <Map />
      <SearchBar />
      <TransactionType />
      <Estatetype />
      <Uploads />
    </div>
  );
}

export default Add;
