import Layout from "./layout/Layout";
import "./globals.css";
import "./loader.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PanoramaContext } from "./states/panorama_context";
import { useEffect, useState } from "react";
import { ViewPortContext } from "./states/viewport_context";
import { UserContextProvider } from "./states/user_context";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import EditParanoma from "./pages/EditParanoma";
import Login from "./pages/Login";
import TourDetails from "./pages/TourDetails";

const App = () => {
  const [viewport, setViewport] = useState({});
  const [datas, setDatas] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 3.5,
        bearing: 30,
        pitch: 10,
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <PanoramaContext.Provider value={{ datas, setDatas }}>
        <ViewPortContext.Provider value={{ viewport, setViewport }}>
          <UserContextProvider>
            <Routes>
              <Route
                exact
                path="/client"
                element={
                  <Layout>
                    <Add />
                  </Layout>
                }
              />
              <Route path="/" element={<Home />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/edit/:uid" element={<EditParanoma />} />
              <Route path="/login" element={<Login />} />
              <Route path="/tour/:id" element={<TourDetails />} />
            </Routes>
          </UserContextProvider>
        </ViewPortContext.Provider>
      </PanoramaContext.Provider>
    </BrowserRouter>
  );
};

export default App;
