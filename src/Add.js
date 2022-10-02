import "mapbox-gl/dist/mapbox-gl.css";
import Estatetype from "./components/Add/Estatetype";
import TransactionType from "./components/Add/Transactiontype";
import Uploads from "./components/Add/Uploads";
import MapView from "./components/Map";
import SearchBar from "./components/SearchBar";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./states/user_context";
import { useNavigate } from "react-router-dom";

function Add() {
  const { user } = useContext(UserContext);


  const navigate = useNavigate();
  useEffect(() => {
    if (user == undefined || user == null) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <MapView />
      <SearchBar />
      <TransactionType />
      <Estatetype />
      <Uploads />
    </div>
  );
}

export default Add;
