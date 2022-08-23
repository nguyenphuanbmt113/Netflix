import React from "react";
import useSWR from "swr";
import fetcher from "../config/fetcher";
import { useNavigate } from "react-router-dom";
export const Footer = () => {
  const navigate = useNavigate();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=89c2f4cad3722f5e0fd78a89c8d7a6e8&language=en-US`,
    fetcher
  );
  const dataGenres = data?.genres;
  return (
    <div className="text-white bg-black p-4 md:p-8 pt-[50px]">
      <div>
        <div>
          <h1 className="text-red-600 text-2xl font-bold cursor-pointer mb-5">
            NETFLIX
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
        {dataGenres &&
          dataGenres.length > 0 &&
          dataGenres.map((item) => (
            <div
              key={item.id}
              className="text-white cursor-pointer"
              onClick={() => navigate(`/genre/${item.id}`)}>
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
};
