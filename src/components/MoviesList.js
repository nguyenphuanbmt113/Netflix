import React, { useEffect, useState } from "react";
import axios from "axios";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardMovie } from "./CardMovie";
export const MoviesList = ({ title }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    try {
      const fetching = async () => {
        let res = await axios.get(
          `https://api.themoviedb.org/3/movie/${title}?api_key=89c2f4cad3722f5e0fd78a89c8d7a6e8&language=en-US&page=1`
        );
        setMovies(res?.data.results);
      };
      fetching();
    } catch (error) {
      console.log("error:", error);
    }
  }, [title]);
  return (
    <>
      <div className="p-4 md:px-8">
        <h2 className="text-black font-bold md:text-xl mb-4 dark:text-black capitalize">
          {title}
        </h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 3,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1024: {
              width: 1024,
              slidesPerView: 5,
            },
            1200: {
              width: 1200,
              slidesPerView: 5,
            },
            1280: {
              width: 1280,
              slidesPerView: 5,
            },
          }}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <CardMovie item={item}></CardMovie>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};
