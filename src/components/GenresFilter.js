import React from "react";
import useSWR from "swr";
import fetcher from "../config/fetcher";
export const GenresFilter = ({ setGen }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=89c2f4cad3722f5e0fd78a89c8d7a6e8&language=en-US`,
    fetcher
  );
  const dataGenres = data?.genres;
  return (
    <div className="flex items-center gap-3 flex-wrap my-5 p-4 md:p-8">
      {dataGenres?.length > 0 &&
        dataGenres.map((item) => (
          <div>
            <div
              key={item.id}
              className="text-white cursor-pointer px-4 py-2 rounded-[20px] bg-blue-500"
              onClick={() => setGen(item.id)}>
              {item.name}
            </div>
          </div>
        ))}
    </div>
  );
};
