import React from "react";
import Album from "../Album";
import "./style.scss";
import PropTypes from "prop-types";

Albumlist.propTypes = {
  AlbumList: PropTypes.array.isRequired,
};

function Albumlist({ AlbumList }) {
  return (
    <ul className="album-list">
      {AlbumList.map((album) => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

Albumlist.propTypes = {};

export default Albumlist;
