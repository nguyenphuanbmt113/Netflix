import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Collections } from "./pages/Collections";
import { MoviesListPage } from "./pages/MoviesListPage";
import { Footer } from "./components/Footer";
import { DetailMovies } from "./pages/DetailMovies";
import { Search } from "./pages/Search";
import { Genres } from "./pages/Genres";
import { TvShows } from "./pages/TvShows";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <div className="">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/tvshow" element={<TvShows></TvShows>}></Route>
          <Route
            path="/collections"
            element={<Collections></Collections>}></Route>
          <Route
            path="/movieslist"
            element={<MoviesListPage></MoviesListPage>}></Route>
          <Route
            path="/movie/:id"
            element={<DetailMovies></DetailMovies>}></Route>
          <Route path="/search/:query" element={<Search></Search>}></Route>
          <Route path="/genre/:genre" element={<Genres></Genres>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <ToastContainer />
    </>
  );
}

export default App;
