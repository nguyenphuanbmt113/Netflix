import React from "react";
import { Banner } from "../components/Banner";
import { MoviesList } from "../components/MoviesList";

export const Home = () => {
  return (
    <>
      <Banner></Banner>
      <MoviesList title="upcoming"></MoviesList>
      <MoviesList title="top_rated"></MoviesList>
      <MoviesList title="popular"></MoviesList>
    </>
  );
};
