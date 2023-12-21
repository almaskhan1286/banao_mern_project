import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { Dropdown } from "bootstrap";
import { VscInfo } from "react-icons/vsc";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { MdGroupAdd } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";

const PostPage = () => {
  useEffect(() => {
    // Initialize Bootstrap dropdown
    const dropdownElementList = [].slice.call(
      document.querySelectorAll(".dropdown-toggle")
    );
    dropdownElementList.map(function (dropdownToggle) {
      return new Dropdown(dropdownToggle);
    });
  }, []);

  return (
    <>
      <div className="container-md w-100">
        <div className="container mt-5 p-0 px-md-5">
          <div className="container d-flex flex-row">
            <div className="me-3 border-bottom pb-2 border-black">
              All Posts(32)
            </div>
            <div className="me-3 d-none d-md-flex">Article</div>
            <div className="me-3 d-none d-md-flex">Event</div>
            <div className="me-3 d-none d-md-flex">Education</div>
            <div className="me-3 d-none d-md-flex">Job</div>

            {/* Write Post Dropdown Button */}
            <div className=" d-flex dropdown ms-auto justify-content-center d-md-flex d-none mb-2">
              <button
                className="btn bg-light dropdown-toggle mx-3"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Write a Post
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
              {/* Join Button */}
              <div className=" ms-auto justify-content-center align-items-center d-md-flex d-none">
                <button
                  className="btn btn-primary"
                  type="button"
                  aria-expanded="false"
                >
                  <MdGroupAdd style={{ fontSize: "18px" }} /> Join Group
                </button>
              </div>
            </div>
            {/* Filter All Button For Mobile */}
            <div className="dropdown ms-auto justify-content-center d-sm-flex d-md-none mb-2">
              <button
                className="btn bg-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Filter All
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="border-top w-100 bg-gray-200 mb-3"></div>

          <div className="row d-flex align-items-start">
            <div className="col col-sm-block col-md-8 col-lg-8 p-0">
              <PostCard
                imageSrc="../src/assets/Rectangle5.png"
                userImg="../src/assets/sarthak.png"
                userName="Sarthak Kamra"
                category="✍️ Article"
                title="React Hooks: The Power of State Management"
                paragraph="Learn how to manage state efficiently in your React applications with React Hooks..."
              />
              <PostCard
                imageSrc="../src/assets/Rectangle 6.png"
                userImg="../src/assets/sara.png"
                userName="Sarah West"
                category="🔬️ Education"
                title="Tax Benefits for Investment under National Pension Scheme launched by Government"
                paragraph="Learn how to manage state efficiently in your React applications with React Hooks..."
              />
              <PostCard
                imageSrc="../src/assets/Rectangle 7.png"
                userImg="../src/assets/ronal.png"
                userName="Ronal Jones"
                category="🗓️ Meetup"
                title="Finance & Investment Elite Social Mixer @Lujiazui"
                paragraph="Learn how to manage state efficiently in your React applications with React Hooks..."
              />
              <PostCard
                // imageSrc="../src/assets/Rectangle 5.png"
                userImg="../src/assets/joseph.png"
                userName="Joseph Gray"
                category="Technology"
                title="Software Developer"
                paragraph="Learn how to manage state efficiently in your React applications with React Hooks..."
              />
            </div>

            <div className="col align-items-start p-4 mt-5 d-none d-md-block">
              <div className="d-flex  align-items-center mb-2">
                <MdOutlineLocationOn style={{ fontSize: "24px" }} />
                <h6>Nodia, India</h6>
                <HiPencil className="ms-auto" style={{ fontSize: "25px" }} />
              </div>
              <div class="border-top w-100 bg-gray-200 mb-3"></div>

              <div className="d-flex w-100 my-4">
                <VscInfo
                  className="mx-2"
                  style={{ fontSize: "22px", width: "25" }}
                />
                <p className="text-secondary px-1" style={{ fontSize: "13px" }}>
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
