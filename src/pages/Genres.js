import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CardMovie } from "../components/CardMovie";
import ReactPaginate from "react-paginate";

export const Genres = () => {
  const { genre } = useParams();
  const [limit, setLimit] = useState(20);
  const [nextPage, setNextPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [sort, setSort] = useState();
  const [year, setYear] = useState("");
  const [region, setRegion] = useState("");
  const [changeUrl, setChangeUrl] = useState("");
  const [filter, setFilter] = useState(false);
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    let here = true;
    try {
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=89c2f4cad3722f5e0fd78a89c8d7a6e8&with_genres=${genre}&page=${nextPage}&limit=20`;
      const fetching = async () => {
        const res = await axios.get(url.concat(changeUrl));
        setTotalResult(res?.data?.total_results);
        const data = res?.data.results;
        if (here === false) return null;
        setMovie(data);
      };
      fetching();
    } catch (error) {
      console.log("error:", error);
    }
    return () => {
      here = false;
    };
  }, [genre, changeUrl, nextPage]);
  useEffect(() => {
    setChangeUrl("");
    if (sort) {
      setChangeUrl(changeUrl.concat("&", sort));
    }
    if (year) {
      setChangeUrl(changeUrl.concat("&", year));
    }
    if (region) {
      setChangeUrl(changeUrl.concat("&", region));
    }
    setFilter(false);
  }, [filter]);
  useEffect(() => {
    setPageCount(Math.ceil(totalResult / limit));
  }, [itemOffset, limit, movies, totalResult]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * limit) % totalResult;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
  return (
    <div className="px-4 pt-[50px]">
      <div className="mt-5 mb-10 flex items-start gap-5 flex-col md:items-center md:flex-row">
        <select
          className="form-select p-2 border border-black border-solid"
          defaultValue={"DEFAULT"}
          onChange={(e) => setSort(e.target.value)}>
          <option value="DEFAULT" disabled>
            Open this select menu
          </option>
          <option value="title.asc">Movie Title A to Z</option>
          <option value="title.desc">Movie Title Z to A</option>
          <option value="popularity.asc">Increasing in Popularity</option>
          <option value="popularity.desc">Descending in Popularity</option>
          <option value="primary_release_date.asc">
            Increasing by Release Date
          </option>
          <option value="primary_release_date.desc">
            Descending by Release Date
          </option>
        </select>
        <select
          className="form-select p-2 border border-black border-solid"
          defaultValue={"DEFAULT"}
          onChange={(e) => setYear(e.target.value)}>
          <option value="DEFAULT" disabled className="text-white">
            select Year
          </option>
          <option value="year=2018">2018</option>
          <option value="year=2019">2019</option>
          <option value="year=2020">2020</option>
          <option value="year=2021">2021</option>
          <option value="year=2022">2022</option>
        </select>
        <select
          className="form-select p-2 border border-black border-solid"
          defaultValue={"DEFAULT"}
          onChange={(e) => setRegion(e.target.value)}>
          <option className="text-black" value="DEFAULT" disabled>
            select Region
          </option>
          <option value="region=VN">Viet Nam</option>
          <option value="region=CN">China</option>
          <option value="region=JP">Japan</option>
          <option value="region=US">US</option>
          <option value="region=KR">Korea</option>
        </select>
        <button
          className="px-4 py-2 bg-red-500 text-white"
          onClick={() => setFilter(true)}>
          Filter
        </button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
        {movies.length > 0 &&
          movies.map((item) => (
            <CardMovie item={item} key={item.id}></CardMovie>
          ))}
      </div>
      <div className="my-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};
