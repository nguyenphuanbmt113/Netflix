import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Caster } from "../components/Caster";
import { MoviesList } from "../components/MoviesList";
import { VideoMovie } from "../components/VideoMovie";
import { Collection } from "../context/CollectionContext";
export const DetailMovies = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { handleCollection, listCollection } = Collection();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);
  useEffect(() => {
    const fetching = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=89c2f4cad3722f5e0fd78a89c8d7a6e8&language=en-US`
      );
      const data = res?.data;
      setMovie(data);
    };
    fetching();
  }, [id]);
  return (
    <>
      <div className="relative w-full h-[450px] text-white">
        <div className="overlay w-full h-full absolute inset-0 bg-black/70 z-1"></div>
        <div className="w-full h-full">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-[10%] left-[3%]">
          <div className="flex items-start gap-7">
            <div className="w-[300px] md:w-[500px] p-1 bg-slate-300 rounded-lg">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold">{movie?.title}</h1>
              <div className="flex items-center gap-4 my-4">
                <button className="px-6 py-1 bg-red-500 text-white transition-all">
                  Watch
                </button>
                <button className="px-6 py-1 bg-blue-500 text-white transition-all">
                  Trailer
                </button>
                <div onClick={() => handleCollection(movie)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill={listCollection.includes(movie) ? "	#7B68EE" : "#fff"}>
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </div>
                {/* <p className="text-white"><FiGift></FiGift></p> */}
              </div>
              <p className="">Released: {movie?.release_date}</p>
              <p className="">Status: {movie.status}</p>
              <p className="">Vote: {movie.vote_average}</p>
              <p className="hidden md:w-[50%] md:block">
                Overview: {movie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center font-bold text-2xl text-black mt-6">Genres</h1>
      <div className="flex items-center justify-center gap-x-5 py-5">
        {movie &&
          movie.genres &&
          movie.genres.map((item) => {
            return (
              <span
                className="px-4 py-2 border border-black bg-white text-black cursor-pointer hover:bg-red-500 hover:text-white hover:border-white transition-all"
                key={item.id}
                onClick={() => navigate(`/genre/${item.id}`)}>
                {item.name}
              </span>
            );
          })}
      </div>
      <Caster id={id}></Caster>
      <VideoMovie id={id}></VideoMovie>
      <MoviesList title="now_playing"></MoviesList>
      <MoviesList title="upcoming"></MoviesList>
    </>
  );
};
