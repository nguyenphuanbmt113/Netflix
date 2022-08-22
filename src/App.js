import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { TvShows } from "./pages/TvShows";
import { Collections } from "./pages/Collections";
import { MoviesListPage } from "./pages/MoviesListPage";
import { Footer } from "./components/Footer";
import { DetailMovies } from "./pages/DetailMovies";
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/tvshows" element={<TvShows></TvShows>}></Route>
        <Route
          path="/collections"
          element={<Collections></Collections>}></Route>
        <Route
          path="/movieslist"
          element={<MoviesListPage></MoviesListPage>}></Route>
        <Route
          path="/movie/:id"
          element={<DetailMovies></DetailMovies>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
