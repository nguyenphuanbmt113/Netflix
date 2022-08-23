import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
export const CardMovie = ({ item }) => {
  const imgRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    const img = imgRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        img.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/original${item.backdrop_path}`
        );
      }
    });

    if (img) {
      observer.observe(img);
    }
    return () => {
      observer.unobserve(img);
    };
  }, [item.backdrop_path]);
  return (
    <div
      className="relative w-full h-full cursor-pointer group hover:transition-all"
      onClick={() => navigate(`/movie/${item.id}`)}>
      <div className="w-full h-auto cursor-pointer relative hover:shadow-lg hover:scale-110 transition-all z-20">
        <img
          ref={imgRef}
          // src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.backdrop_path}
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="#fff">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="absolute top-[5%] right-[5%] w-7 h-7 bg-yellow-400 rounded-3xl flex items-center justify-center p-1">
            <p className="text-black text-[12px]">{item.vote_average}</p>
            <p className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <p className="text-black mt-2 hover:text-red-500">
        {item.title || item.name}{" "}
      </p>
    </div>
  );
};
