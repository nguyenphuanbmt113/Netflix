import axios from "axios";
import React, { useEffect, useState } from "react";
import { BannerItem } from "./BannerItem";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
export const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    try {
      const fetching = async () => {
        let res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=89c2f4cad3722f5e0fd78a89c8d7a6e8&language=en-US&page=1`
        );
        setMovies(res?.data.results);
      };
      fetching();
    } catch (error) {
      console.log("eroor:", error);
    }
  }, []);

  return (
    <Swiper slidesPerView={1}>
      {movies.length > 0 &&
        movies.map((movie) => (
          <SwiperSlide key={movie.title}>
            <BannerItem movie={movie}></BannerItem>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
