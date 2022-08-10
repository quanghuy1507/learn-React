import React, { useState, useEffect } from "react";
import queryString from "query-string";
import Post from "./component/Post";
import Pagination from "./component/Panigation";
import PostFiltersForm from "./component/PostFiltersForm";

function Postlist(props) {
  const [postList, setPostlist] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRow: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramstring = queryString.stringify(filters);
        const requesUrl = `http://js-post-api.herokuapp.com/api/posts?${paramstring}`;
        const response = await fetch(requesUrl);
        const responseJSON = await response.json();

        const { data, pagination } = responseJSON;
        setPagination(pagination);
        setPostlist(data);
      } catch (error) {
        console.log("có lỗi", error.message);
      }
    }

    fetchPostList();
  }, [filters]);

  function HandlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleFilterChange(newFilter) {
    console.log("newFilter", newFilter);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilter.searchTerm,
    });
  }

  return (
    <div>
      <PostFiltersForm onSubmit={handleFilterChange} />
      <Post posts={postList} />
      <Pagination pagination={pagination} onPageChange={HandlePageChange} />
    </div>
  );
}

Postlist.propTypes = {};

export default Postlist;
