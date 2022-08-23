import React from "react";
import { useNavigate } from "react-router-dom";
import { Collection } from "../context/CollectionContext";

export const Collections = () => {
  const navigate = useNavigate();
  const { listCollection, deleteCollection } = Collection();
  if (listCollection.length === 0) {
    navigate("/");
  }
  return (
    <div className="p-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 pt-[50px]">
      {listCollection &&
        listCollection.map((item) => (
          <div className="relative w-full h-full cursor-pointer">
            <div
              className="w-full h-auto cursor-pointer"
              onClick={() => navigate(`/movie/${item.id}`)}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p
              className="text-gray-400 mt-2 dark:text-black"
              onClick={() => navigate(`/movie/${item.id}`)}>
              {item.title}
            </p>
            <div
              className="w-5 h-5 grid place-content-center rounded-full bg-white absolute top-2 right-2"
              onClick={() => deleteCollection(item.id)}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        ))}
    </div>
  );
};
