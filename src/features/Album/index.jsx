import React from "react";
import PropTypes from "prop-types";
import Albumlist from "./component/Albumlist";
import "./style.scss";

function Album(props) {
  const AlbumList = [
    {
      id: 1,
      name: "Mãi mãi không phải là anh",
      thumbnail:
        "https://i.ytimg.com/vi/Zzn9-ATB9aU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxGWWJVn1wkzRcP5Zf-eQnKc0SaQ",
    },
    {
      id: 2,
      name: "Nàng thơ",
      thumbnail:
        "https://i.ytimg.com/vi/Zzn9-ATB9aU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoAIz5QUr9DKR5TLdK7E8c3seDtA",
    },
    {
      id: 3,
      name: "Về bên anh",
      thumbnail:
        "https://i.ytimg.com/vi/OTxe_r4LAyo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe9MkOzwJTnxOYQii5GtTZ-iyr9A",
    },
  ];
  return (
    <div>
      <h1> Có thể bạn sẽ thích</h1>
      <Albumlist AlbumList={AlbumList} />
    </div>
  );
}

Album.propTypes = {};

export default Album;
