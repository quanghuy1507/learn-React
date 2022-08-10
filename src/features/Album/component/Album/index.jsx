import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

Album.prototype = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  console.log(album);
  return (
    <div className="album">
      <img src={album.thumbnail} alt="" />
      <p>{album.name}</p>
    </div>
  );
}

export default Album;
