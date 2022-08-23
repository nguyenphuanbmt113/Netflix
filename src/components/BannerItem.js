import React from "react";
import { useNavigate } from "react-router-dom";
export const BannerItem = ({ movie }) => {
  const navigate = useNavigate();
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div
      className="w-full h-[630px] text-white relative"
      onClick={() => navigate(`/movie/${movie.id}`)}>
      <div className="overlay w-full h-full absolute inset-0 bg-gradient-to-r from-black/80 z-1"></div>
      <div className="w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt=""
          className="w-full h-full object-fill"
        />
      </div>
      <div className="content  absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>
        <div className="flex items-center gap-4 my-4">
          <button className="bg-red-500 px-5 py-2 text-white">Play</button>
          <button className="px-5 py-2 bg-blue-500 hover:bg-blue-400 transition-all">
            Watch Now
          </button>
        </div>
        <p className="">Released: {movie.release_date}</p>
        <p className="w-full md:max-w-[50%] xl:max-w-[35%] text-gray-200">
          {truncateString(movie.overview, 150)}
        </p>
      </div>
    </div>
  );
};
