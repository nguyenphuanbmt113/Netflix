import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { CardMovie } from "../components/CardMovie";
import { GenresFilter } from "../components/GenresFilter";

export const TvShows = () => {
  const btnRef = useRef();
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(20);
  const [nextPage, setNextPage] = useState(1);
  useEffect(() => {
    let here = true;
    try {
      let url = `https://api.themoviedb.org/3/tv/popular?api_key=89c2f4cad3722f5e0fd78a89c8d7a6e8&language=en-US&limit=${limit}&page=${nextPage}`;
      const fetching = async () => {
        const res = await axios.get(url);
        const data = res?.data.results;
        if (here === false) return null;
        if (here) {
          setMovie((p) => [...p, ...data]);
        }
        setLoading(true);
      };
      fetching();
    } catch (err) {
      console.log("err:", err);
    }
    return () => {
      here = false;
    };
  }, [limit, nextPage]);
  const loadMore = () => {
    setNextPage((next) => next + 1);
  };
  useEffect(() => {
    let btn = btnRef.current;
    let num = 1;
    if (loading) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
          if (num >= 5) {
            observer.unobserve(btn);
          }
        }
      });
      observer.observe(btn);
    }
  }, [loading]);
  return (
    <>
      <div className="p-4 md:p-8">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
          {movies.length > 0 &&
            movies.map((item) => (
              <CardMovie item={item} key={item.id}></CardMovie>
            ))}
        </div>
        <div className="text-center opacity-0">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg my-5"
            ref={btnRef}>
            Load More
          </button>
        </div>
      </div>
    </>
  );
};
