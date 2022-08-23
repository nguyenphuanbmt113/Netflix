import React from "react";
import useSWR from "swr";
import fetcher from "../config/fetcher";
export const Caster = ({ id }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=89c2f4cad3722f5e0fd78a89c8d7a6e8&language=en-US`,
    fetcher
  );
  const dataCast = data && data.cast;
  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-black">
        Caster
      </h1>
      <div className="mb-10 flex items-center justify-center gap-7 p-4">
        {dataCast &&
          dataCast.length > 0 &&
          dataCast.slice(0, 5).map((item) => {
            return (
              <div className="flex flex-col gap-3" key={item.id}>
                <div className="h-[200px]">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="text-black">{item.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
