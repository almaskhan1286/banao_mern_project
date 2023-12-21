import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //
import { IoMdShare } from "react-icons/io";
import { IoIosPaper } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
// import {userPost} from "../constant";

const PostCard = ({
  imageSrc,
  title,
  userImg,
  category,
  paragraph,
  userName,
}) => {
  return (
    <div className="container border p-0 my-2">
      <div className="img-fluid">
        <img
          src={imageSrc}
          alt="Background image"
          className="img-fluid w-100 h-100"
          loading="lazy"
        />
      </div>

      <div className="card-body ">
        <p className="card-category px-3 pt-3 ">{category}</p>

        <div className="d-flex  align-items-center mb-2 px-3 ">
          <h5 className="fw-bold">{title}</h5>
          <HiDotsHorizontal className="ms-auto" style={{ fontSize: "25px" }} />
        </div>

        {/* <p className="card-text px-3 pb-2 text-muted semi-bold lh-1">
          {}
        </p> */}
        <p className="card-text px-3 pb-2 text-muted semi-bold lh-1">
          {paragraph}
        </p>

        <div className="post-footer px-3 d-flex justify-content-between align-items-center pb-3">
          <div className="author-info d-flex align-items-center">
            <img src={userImg} className="avatar" alt="Avatar" />
            <div className="ml-2 px-3">
              <p className="card-author mb-0 fw-bold">{userName}</p>
              <p className="card-views mb-0 mr-3 d-flex d-md-none">
                1.4k views
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <p className="card-views mb-0 mr-3 px-4 d-none d-md-flex">
              1.4k views
            </p>
            <div
              className="share-icon"
              style={{
                background: "rgba(237, 238, 240, 1)",
                padding: "4px",
                borderRadius: "10%",
              }}
            >
              <IoMdShare style={{ fontSize: "20px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
