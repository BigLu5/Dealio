import { useState, useEffect } from "react";
// import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Result from "./pages/Result";
import FormPage from "./pages/FormPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

const API_KEY = import.meta.env.LOCATION_KEY;

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const admins = [
    "luke.reynolds.92@gmail.com",
    "susannahelisabeth1@gmail.com",
    "snapecordelia@gmail.com",
    "afennell@hotmail.co.uk",
  ];

  const [favourites, setFavourites] = useState([]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Header />
      {isAuthenticated && (
        <div>
          <Profile />
          <LogoutButton />
        </div>
      )}
      {!isAuthenticated && <LoginButton />}
      {admins.includes(user?.email)}
      <Routes>
        <Route
          path="/"
          element={
            <Home favourites={favourites} setFavourites={setFavourites} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/results/:id" element={<Result />} />
        <Route
          path="/favourites"
          element={
            <Favourites favourites={favourites} setFavourites={setFavourites} />
          }
        />
        <Route path="/formpage" element={<FormPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
