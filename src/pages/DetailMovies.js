import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Caster } from "../components/Caster";
import { MoviesList } from "../components/MoviesList";
import { VideoMovie } from "../components/VideoMovie";
export const DetailMovies = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState({});
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
  console.log("detailk:", movie);
  return (
    <>
      <div className="relative w-full h-[550px] text-white">
        <div className="overlay w-full h-full absolute inset-0 bg-black/80 z-1"></div>
        <div className="w-full h-full">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-[10%] left-[3%]">
          <div className="flex items-start gap-7">
            <div className="w-[600px]">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold">{movie?.title}</h1>
              <div className="flex items-center gap-4 my-4">
                <button className="border bg-gray-300 text-black px-4 py-2 border-gray-300">
                  Watch
                </button>
                <button className="border  px-4 py-2 border-gray-300">
                  Trailer
                </button>
              </div>
              <p className="">Released: {movie?.release_date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-5 py-10">
        {movie &&
          movie.genres &&
          movie.genres.map((item) => {
            return (
              <span
                className="px-4 py-2 border border-black bg-white text-black cursor-pointer"
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
